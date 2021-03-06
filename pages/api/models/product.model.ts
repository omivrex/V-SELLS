import {Schema, model, models} from 'mongoose';

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    cartegories: {
        type: [String],
        required: true
    },
    details: {
        type: String,
        required: true
    },
    isHotSale: {
        type: Boolean,
    },
    isOutOfStock: {
        type: Boolean,
    },
    image: {
        type: String,
        required: true,
    }
})

for (let prop in models) delete models[prop] //empty model
const ProductModel = model('products', productSchema); /** if model is existing just use it else create it */

export default ProductModel


