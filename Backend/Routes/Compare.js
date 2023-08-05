// compareRouter.js
const express = require('express');
const router = express.Router();
const { Compare } = require('../Model/AddtoCompare');

// Route to add an item to Compare
router.post('/', async (req, res) => {
    const { userId, name, price, link, img } = req.body;

    try {
        const compare = await Compare.findOne({ userId });

        if (compare) {
            // User's compare list already exists, add the item to the items array
            compare.items.push({ name, price, link, img });
            await compare.save();
        } else {
            // User's compare list does not exist, create a new compare list
            await Compare.create({
                userId,
                items: [{ name, price, link, img }],
            });
        }

        res.status(201).json({ message: 'Item added to compare list successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error adding item to compare list' });
    }
});

// Route to get Compare items for a specific user
router.get('/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const compare = await Compare.findOne({ userId });

        if (!compare) {
            return res.status(404).json({ message: 'Compare list not found' });
        }

        res.json({ items: compare.items });
    } catch (error) {
        res.status(500).json({ error: 'Error getting compare items' });
    }
});

// Route to remove an item from Compare
router.delete('/:userId/:itemId', async (req, res) => {
    const { userId, itemId } = req.params;

    try {
        const compare = await Compare.findOne({ userId });

        if (!compare) {
            return res.status(404).json({ message: 'Compare list not found' });
        }

        // Filter out the item with the specified itemId
        compare.items = compare.items.filter(item => item._id.toString() !== itemId);

        await compare.save();

        res.json({ message: 'Item removed from compare list successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error removing item from compare list' });
    }
});

module.exports = router;
