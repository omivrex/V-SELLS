import connectToDb from "../middleware/mongodbConnect.middleware";
import ProductModel from "../models/product.model";
const multer = require('multer');
const path = require('path');

export const config = {
    api: {
      bodyParser: false
    }
}

type filedType = {
    name: String,
    price: String,
    cartegories: any,
    details: String,
    isHotSale: Boolean,
    isOutOfStock: Boolean,
}

const storage = multer.diskStorage({
    destination: (req:any, file:any, callback:any) => {
      callback(null, '../../../public/productImgs')
    },

    filename: (req:any, file:any, callback:any) => {
      console.log('file', file)
      callback(null, Date.now()+path.ext(file.originalname))
    }

})

const storageMiddleware = multer({storage})

export default function (req:any, res:any) {
    try {
        console.log('req.body', req.body)
        storageMiddleware.single('product-image')
        // connectToDb(async (isConnected:boolean) => {
        //     if (isConnected) {
        //         const newProduct = new ProductModel(fields)
        //         console.log(newProduct, 'add.js line 21');
        //         await newProduct.save()
        //         res.status = 200;
        //         res.send('recieved...')
        //     }
        // })
    } catch (error) {
        console.error(error);
    }
}