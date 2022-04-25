import connectToDb from "../middleware/mongodbConnect.middleware";
import ProductModel from "../models/product.model";
import nextConnect from 'next-connect';
import cartHandler from "../controllers/cartegorey.controller";
const multer = require('multer');

export const config = {
  api: {
    bodyParser: false
  }
}

let filename:string = ''

const storage = multer.diskStorage({
    destination: (req:any, file:any, callback:any) => {
      callback(null, './public/productImgs')
    },

    filename: (req:any, file:any, callback:any) => {
      filename = file.originalname+file.mimetype.replace('image/', '.')
      callback(null, filename)
    }

})

const apiRoute = nextConnect({
  onError: (err, req:any, res:any) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req:any, res:any) => {
    res.status(404).end("Page is not found");
  },
});

const storageMiddleware = multer({storage})

apiRoute.use(storageMiddleware.single('productImg'));


apiRoute.post((req:any, res:any) => {
  connectToDb(async (isConnected:boolean) => {
    if (isConnected) {
      const {cartegories, ...otherFields} = req.body
      const newProduct = new ProductModel({...otherFields, cartegories: JSON.parse(cartegories), image: filename})
      await newProduct.save()
      cartHandler(newProduct)
      res.status(200).json({ data: 'success' });
    }
  })
});

export default apiRoute;
