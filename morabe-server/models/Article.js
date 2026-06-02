const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    image: { type: String, default: "" },
    content: { type: [String], default: [] },
    status: {
      type: String,
      enum: ["Active", "Disabled"],
      default: "Active",
    },
  },
  { timestamps: true },
);

module.exports =
  mongoose.models.Article || mongoose.model("Article", articleSchema);
