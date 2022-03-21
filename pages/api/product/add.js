import connectToDb from "../middleware/mongodbConnect.middleware";
import ProductModel from "../models/product.model";
const formidable = require('formidable');

const form = formidable({ multiples: true});

export const config = {
    api: {
      bodyParser: false
    }
}

export default function (req, res) {
    try {
        form.parse(req, (err, fields, files) => {
            err? console.error(err):"";
            console.log({...fields, images: files});
            connectToDb(async isConnected => {
                if (isConnected) {
                    const newProduct = new ProductModel({...fields, ...{images: files}})
                    console.log(newProduct, 'add.js line 21');
                    await newProduct.save()
                    res.status = 200;
                    res.send('recieved...')
                }
            })
        });
    } catch (error) {
        console.throw(error);
    }
}