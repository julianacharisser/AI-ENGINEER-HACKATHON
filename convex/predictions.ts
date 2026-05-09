import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createPrediction = mutation({
  args: {
    userId: v.id("users"),
    documentId: v.id("documents"),
    predictedTopics: v.array(v.string()),
    confidence: v.number(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("predictions", {
      userId: args.userId,
      documentId: args.documentId,
      predictedTopics: args.predictedTopics,
      confidence: args.confidence,
      createdAt: Date.now(),
    });
  },
});

export const getUserPredictions = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    const predictions = await ctx.db
      .query("predictions")
      .withIndex("by_userId", (q) => q.eq("userId", args.userId))
      .collect();

    // Enrich with document names
    const enriched = await Promise.all(
      predictions.map(async (pred) => {
        const doc = await ctx.db.get(pred.documentId);
        return {
          ...pred,
          documentName: doc?.fileName || "Unknown",
        };
      })
    );

    return enriched;
  },
});

export const getDocumentPredictions = query({
  args: { documentId: v.id("documents") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("predictions")
      .withIndex("by_documentId", (q) => q.eq("documentId", args.documentId))
      .collect();
  },
});

export const getPredictionById = query({
  args: { predictionId: v.id("predictions") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.predictionId);
  },
});

export const deletePrediction = mutation({
  args: { predictionId: v.id("predictions") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.predictionId);
  },
});
