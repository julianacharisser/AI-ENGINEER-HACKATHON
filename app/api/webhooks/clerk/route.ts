import { Webhook } from "svix";
import { headers } from "next/headers";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";

export async function POST(req: Request) {
  // Get the Svix ID and timestamp from headers
  const svixId = headers().get("svix-id");
  const svixTimestamp = headers().get("svix-timestamp");
  const svixSignature = headers().get("svix-signature");

  // If any of the headers is missing, error out
  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const body = await req.text();

  // Create a new Webhook instance with your signing secret
  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);

  let evt: any;

  // Verify the webhook
  try {
    evt = wh.verify(body, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as any;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  const eventType = evt.type;

  console.log(`Webhook received: ${eventType}`);

  try {
    if (eventType === "user.created") {
      const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
      if (!convexUrl) {
        console.warn("Skipping Convex user sync because NEXT_PUBLIC_CONVEX_URL is not configured.");
        return new Response("Convex not configured", { status: 200 });
      }

      const { id, email_addresses, first_name, last_name } = evt.data;

      const fullName = `${first_name || ""} ${last_name || ""}`.trim() || "User";
      const email = email_addresses?.[0]?.email_address || "";
      const convex = new ConvexHttpClient(convexUrl);

      // Create user in Convex database
      await convex.mutation(api.users.createUser, {
        clerkId: id,
        email: email,
        name: fullName,
      });

      console.log(`User created: ${id} - ${email}`);
    }

    if (eventType === "user.deleted") {
      const { id } = evt.data;
      console.log(`User deleted: ${id}`);
      // Optional: Soft delete or archive user in database
    }

    if (eventType === "user.updated") {
      const { id, email_addresses, first_name, last_name } = evt.data;
      console.log(`User updated: ${id}`);
      // Optional: Update user info in database
    }

    return new Response("Webhook processed successfully", { status: 200 });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return new Response("Error processing webhook", { status: 500 });
  }
}
