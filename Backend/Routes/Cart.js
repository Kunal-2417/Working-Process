// cartRouter.js
const express = require('express');
const router = express.Router();
const { Cart } = require('../Model/AddtoCart.js');

// Route to add an item to Cart
router.post('/', async (req, res) => {
    const { userId, name, price, link, img } = req.body;

    try {
        const cart = await Cart.findOne({ userId });

        if (cart) {
            // User's cart already exists, add the item to the items array
            cart.items.push({ name, price, link, img });
            await cart.save();
        } else {
            // User's cart does not exist, create a new cart
            await Cart.create({
                userId,
                items: [{ name, price, link, img }],
            });
        }

        res.status(201).json({ message: 'Item added to cart successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error adding item to cart' });
    }
});

// Route to get Cart items for a specific user
router.get('/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        res.json({ items: cart.items });
    } catch (error) {
        res.status(500).json({ error: 'Error getting cart items' });
    }
});

// Route to remove an item from Cart
router.delete('/:userId/:itemId', async (req, res) => {
    const { userId, itemId } = req.params;

    try {
        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Filter out the item with the specified itemId
        cart.items = cart.items.filter(item => item._id.toString() !== itemId);

        await cart.save();

        res.json({ message: 'Item removed from cart successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error removing item from cart' });
    }
});

module.exports = router;
