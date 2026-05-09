import { SignIn } from "@clerk/nextjs";
import { Card } from "@/components/ui/card";

export default function SignInPage() {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return (
      <div className="page-shell min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md">
          <Card className="glass-panel p-8">
            <h1 className="text-2xl font-black text-white">Clerk is not configured</h1>
            <p className="mt-4 text-slate-300 leading-7">
              Add <code>NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code> to <code>.env.local</code> to use sign in.
            </p>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <Card className="glass-panel p-8">
          <SignIn
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "bg-transparent shadow-none border-none",
                headerTitle: "text-white font-black text-3xl",
                headerSubtitle: "text-slate-300",
                formButtonPrimary:
                  "bg-red-500 hover:bg-red-600 text-white font-semibold h-12",
                formFieldInput:
                  "bg-white/5 border border-white/10 text-white placeholder-slate-400 h-11 rounded-lg",
                formFieldLabel: "text-slate-300 text-sm font-medium",
                footerActionLink: "text-red-400 hover:text-red-300",
                socialButtonsBlockButton:
                  "bg-white/5 border border-white/10 text-white hover:bg-white/10",
              },
            }}
          />
        </Card>
      </div>
    </div>
  );
}
