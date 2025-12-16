const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discountPrice: { type: Number },
    stock: { type: Number, required: true, default: 0 },
    sku: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    brand: { type: String },
    sizes: { type: [String], required: true },
    colors: { type: [String], required: true },
    collections: { type: [String], required: true },
    material: { type: String },
    gender: { type, enum: ["Men", "Women", "Unisex"] },
    images: {
      url: { type: [String], required: true },
      altText: { type: String },
    },
    isFeatured: { type: Boolean, default: false },
    isPublished: { type: Boolean, default: true },
    rating: { type: Number, min: 0, max: 5, default: 0 },
    numreviews: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        rating: { type: Number, min: 0, max: 5 },
        comment: { type: String },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    tags: { type: [String] },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    metaTitle: { type: String },
    metaDescription: { type: String },
    metaKeywords: { type: [String] },
    dimensions: { length: Number, width: Number, height: Number },
    weight: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
