const mongoose =require ('mongoose');
mongoose.set('strictQuery', false);
const { Schema } = mongoose;


// Create a model for Add to Cart
const CartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    items: [{
        itemId:{
            type: String,
            required: true, 
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
    }],
});

// Export the models
module.exports ={Cart : mongoose.model('Cart', CartSchema)};
