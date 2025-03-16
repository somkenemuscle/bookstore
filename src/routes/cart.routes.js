// cartRoutes.js
import express from 'express';
import { addToCart, removeFromCart, getCart } from '../controllers/cart.controller.js';

const router = express.Router();

router.post('/add', addToCart);
router.delete('/remove/:userId/item/:itemId', removeFromCart);
router.get('/:userId', getCart);

export default router;
