import {Schema, model, models} from 'mongoose';

const cartSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    products: {
        type: [String],
        required: true
    },
    noOfProducts: {
        type: Number,
        required: true
    },
    hotSales: {
        type: [String],
        required: true
    },
    filters: {
        type: [String],
        required: true
    },
})

for (let prop in models) delete models[prop] //empty model
const CartModel = model('categories', cartSchema);

export default CartModel