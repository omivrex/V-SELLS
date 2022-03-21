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
    images: {
        data: Buffer,
        contentType: Buffer
    }
})

models = {}
const ProductModel = model('products', productSchema); /** if model is existing just use it else create it */

export default ProductModel


