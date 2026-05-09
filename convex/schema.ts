import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    name: v.string(),
    studyStreak: v.number(),
    createdAt: v.number(),
  })
    .index("by_clerkId", ["clerkId"])
    .index("by_email", ["email"]),

  documents: defineTable({
    userId: v.id("users"),
    fileName: v.string(),
    fileType: v.string(),
    storageId: v.id("_storage"),
    uploadedAt: v.number(),
    status: v.string(),
    extractedContent: v.optional(v.string()),
  })
    .index("by_userId", ["userId"])
    .index("by_status", ["status"]),

  predictions: defineTable({
    userId: v.id("users"),
    documentId: v.id("documents"),
    predictedTopics: v.array(v.string()),
    confidence: v.number(),
    createdAt: v.number(),
  })
    .index("by_userId", ["userId"])
    .index("by_documentId", ["documentId"]),

  flashcards: defineTable({
    userId: v.id("users"),
    topic: v.string(),
    question: v.string(),
    answer: v.string(),
    difficulty: v.string(),
    createdAt: v.number(),
  })
    .index("by_userId", ["userId"])
    .index("by_topic", ["topic"]),
});
