import mongoose from "mongoose";
import { Book } from "./models/book.model.js"; // Ensure this path matches your project structure

const MONGO_URI = "mongodb+srv://somkene:somkene@bookstorecluster.nhwwj.mongodb.net/?retryWrites=true&w=majority&appName=bookstoreCluster";

// Sample books with ratings
const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    price: 15.99,
    coverImage: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    description: "An easy & proven way to build good habits & break bad ones.",
    ratings: 4.8
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    price: 12.50,
    coverImage: "https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg",
    description: "A journey of a shepherd in search of treasure & self-discovery.",
    ratings: 4.7
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    genre: "Finance",
    price: 10.99,
    coverImage: "https://m.media-amazon.com/images/I/81BE7eeKzAL.jpg",
    description: "Lessons about money, investing, and financial literacy.",
    ratings: 4.6
  },
  {
    title: "Harry Potter and the Sorcerer’s Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    price: 18.99,
    coverImage: "https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg",
    description: "The first book in the legendary Harry Potter series.",
    ratings: 4.9
  },
  {
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    genre: "Self-Improvement",
    price: 17.99,
    coverImage: "https://m.media-amazon.com/images/I/71MtlMZiJlL.jpg",
    description: "A manual for gaining and maintaining power.",
    ratings: 4.5
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    genre: "Business",
    price: 14.50,
    coverImage: "https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg",
    description: "How modern startups can innovate & scale efficiently.",
    ratings: 4.4
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    price: 16.99,
    coverImage: "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg",
    description: "The adventure of Bilbo Baggins in Middle-earth.",
    ratings: 4.8
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");

    await Book.deleteMany(); // Clear existing books
    console.log("Existing books removed");

    await Book.insertMany(books);
    console.log("Books inserted successfully");

    mongoose.connection.close();
    console.log("Database connection closed");
  } catch (error) {
    console.error("Error seeding database:", error);
    mongoose.connection.close();
  }
};

seedDatabase();
