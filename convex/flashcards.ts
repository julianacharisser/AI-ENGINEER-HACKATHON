import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createFlashcard = mutation({
  args: {
    userId: v.id("users"),
    topic: v.string(),
    question: v.string(),
    answer: v.string(),
    difficulty: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("flashcards", {
      userId: args.userId,
      topic: args.topic,
      question: args.question,
      answer: args.answer,
      difficulty: args.difficulty,
      createdAt: Date.now(),
    });
  },
});

export const getUserFlashcards = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("flashcards")
      .withIndex("by_userId", (q) => q.eq("userId", args.userId))
      .collect();
  },
});

export const getFlashcardsByTopic = query({
  args: { userId: v.id("users"), topic: v.string() },
  handler: async (ctx, args) => {
    const flashcards = await ctx.db
      .query("flashcards")
      .withIndex("by_userId", (q) => q.eq("userId", args.userId))
      .collect();

    return flashcards.filter((card) => card.topic === args.topic);
  },
});

export const getFlashcardById = query({
  args: { cardId: v.id("flashcards") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.cardId);
  },
});

export const updateFlashcard = mutation({
  args: {
    cardId: v.id("flashcards"),
    question: v.optional(v.string()),
    answer: v.optional(v.string()),
    difficulty: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const updates: any = {};
    if (args.question !== undefined) updates.question = args.question;
    if (args.answer !== undefined) updates.answer = args.answer;
    if (args.difficulty !== undefined) updates.difficulty = args.difficulty;

    await ctx.db.patch(args.cardId, updates);
    return await ctx.db.get(args.cardId);
  },
});

export const deleteFlashcard = mutation({
  args: { cardId: v.id("flashcards") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.cardId);
  },
});

export const bulkCreateFlashcards = mutation({
  args: {
    userId: v.id("users"),
    topic: v.string(),
    cards: v.array(
      v.object({
        question: v.string(),
        answer: v.string(),
        difficulty: v.string(),
      })
    ),
  },
  handler: async (ctx, args) => {
    const createdCards = [];
    for (const card of args.cards) {
      const cardId = await ctx.db.insert("flashcards", {
        userId: args.userId,
        topic: args.topic,
        question: card.question,
        answer: card.answer,
        difficulty: card.difficulty,
        createdAt: Date.now(),
      });
      createdCards.push(cardId);
    }
    return createdCards;
  },
});
