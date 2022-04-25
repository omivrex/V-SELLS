import CartModel from "../models/categories.model";

type productData = {
    name: String,
    price: String,
    cartegories: String[],
    details: String,
    isHotSale: Boolean,
    isOutOfStock: Boolean,
    image: String,
}

type cartegoryType = {
    name: String,
    products: String[],
    noOfProducts: Number,
    hotSales: String[],
    filters: String[],
}

const cartHandler = async (data:any) => {
    const {cartegories} = data
    cartegories.forEach((cart:string) => {
        try {
            CartModel.find({name: cart}).limit(1).then(([result]: cartegoryType[])=> {
                if (result) {
                    updateCart(result, data)
                } else {
                    createCart(cart, data)
                }
            })
        } catch (error) {
            console.log(error)
        }
    });
    
}

export default cartHandler

const createCart = (cartegoryName:string, productData:any) => {
    try {
        const {id, details, isHotSale} = productData
        const filters:string[] = extractFilters(details)
        const products:string[] = [id]
        const hotSales:string[] = [isHotSale?id:'']
        const newCart = new CartModel({name:cartegoryName, filters, products, hotSales, noOfProducts: 1})
        newCart.save()
    } catch (error) {
        console.log(error)
    }
}

const extractFilters = (productDetails:string):string[] => [... Object.keys(JSON.parse(productDetails))]

const updateCart = async (cartegory:cartegoryType, productData:any) => {
    await CartModel.updateOne({name: cartegory.name}, {
        filters: [... new Set(cartegory.filters.concat(extractFilters(productData.details)))],
        products: [... new Set(cartegory.products.concat(productData.id))],
        hotSales: productData.isHotSale?[... new Set(cartegory.hotSales.concat(productData.id))]:cartegory.hotSales,
        noOfProducts: cartegory.noOfProducts.valueOf()+1
    })
    // console.log(`updated cartegory ${cartegory.name}`)
}
