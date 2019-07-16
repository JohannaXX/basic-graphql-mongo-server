import mongoose from 'mongoose';

export const Product = mongoose.model("Product", { 
    name: {
        type: String,
        required: true,
    },
    price: Number,
    description: String,
    type: String
});
