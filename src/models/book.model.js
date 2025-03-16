import mongoose from "mongoose";
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String },
    price: { type: Number, required: true },
    coverImage: { type: String }, // URL to the image
    description: { type: String },
    ratings: { type: Number, default: 0 },
}, { timestamps: true });

export const Book = mongoose.model("Book", bookSchema);
