import express from "express";
import { getBooks, getBookById, addBook, searchBooks } from "../controllers/book.controller.js";

const router = express.Router();

router.get("/", getBooks);
router.get("/search", searchBooks);
router.get("/:bookId", getBookById);
router.post("/", addBook); // For admin

export default router;
