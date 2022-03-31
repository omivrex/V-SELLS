import connectToDb from "../middleware/mongodbConnect.middleware";
import ProductModel from "../models/product.model";
const formidable = require('formidable');
const form = formidable({ multiples: true});

export const config = {
    api: {
      bodyParser: false
    }
}

type filedType = {
    name: String,
    price: String,
    cartegories: String[],
    details: String,
    isHotSale: Boolean,
    isOutOfStock: Boolean,
}

export default function (req:any, res:any) {
    try {
        form.parse(req, (err:string, fields:filedType, image:Blob) => {
            err? console.error(err):"";
            console.log({...fields, image});
            connectToDb(async (isConnected:boolean) => {
                if (isConnected) {
                    const newProduct = new ProductModel({...fields, image})
                    console.log(newProduct, 'add.js line 21');
                    await newProduct.save()
                    res.status = 200;
                    res.send('recieved...')
                }
            })
        });
    } catch (error) {
        console.error(error);
    }
}