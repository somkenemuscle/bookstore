import { Book } from "../models/book.model.js";

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books" });
  }
};

// Fetch a single book by ID
export const getBookById = async (req, res) => {
  try {
    const { bookId } = req.params;
    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Error fetching book" });
  }
};

export const searchBooks = async (req, res) => {
  try {
    const { title } = req.query;
    if (!title) {
      return res.status(400).json({ message: "Please provide a title to search" });
    }

    // Use regex for case-insensitive search
    const books = await Book.findOne({ title: { $regex: title, $options: "i" } });

    if (books.length === 0) {
      return res.status(404).json({ message: "No books found" });
    }

    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const addBook = async (req, res) => {
  try {
    const { title, author, price, genre, coverImage, description } = req.body;
    const newBook = new Book({ title, author, price, genre, coverImage, description });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: "Error adding book" });
  }
};
