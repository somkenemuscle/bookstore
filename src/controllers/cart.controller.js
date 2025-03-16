// cartController.js
import Cart from '../models/cart.model.js';

// Add a book to the cart
export const addToCart = async (req, res) => {
  const { userId, bookId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const itemIndex = cart.items.findIndex(item => item.bookId.toString() === bookId);

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ bookId, quantity });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error adding to cart', error });
  }
};

// Remove a book from the cart
export const removeFromCart = async (req, res) => {
  const { userId, itemId } = req.params;

  try {
    const cart = await Cart.findOne({ userId });

    if (cart) {
      const itemIndex = cart.items.findIndex(
        (item) => item._id.toString() === itemId
      );

      if (itemIndex > -1) {
        cart.items.splice(itemIndex, 1);
        await cart.save();
        res.status(200).json(cart);
      } else {
        res.status(404).json({ message: 'Item not found in cart' });
      }
    } else {
      res.status(404).json({ message: 'Cart not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error removing from cart', error });
  }
};


// Get the user's cart
export const getCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.findOne({ userId }).populate('items.bookId', 'title author price genre coverImage description ratings'); 

    if (cart) {
      res.status(200).json(cart);
    } else {
      res.status(404).json({ message: 'Cart not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving cart', error });
  }
};
