import { useRef } from "react";
import styles from "../../styles/store.module.css";
import { AiOutlinePicture } from 'react-icons/ai';
import { ReactElement } from 'react'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Store = ():ReactElement => {
    
    const fileInput = useRef<HTMLInputElement|null>(null)
    const name = useRef<string|Blob>('')
    const price = useRef<string|Blob>('')
    const cartegories = useRef<string[]>([''])
    const details = useRef<string|Blob>('')
    const isHotSale = useRef<string|Blob>('false')
    const isOutOfStock = useRef<string|Blob>('false')
    const productImgPreview = useRef<HTMLImageElement|null>(null)
    const productImg = useRef<any>()
    const productForm = useRef<HTMLFormElement|any>()

    const addProduct = () => {
        const formData = new FormData(productForm.current);
        formData.set('name', name.current)
        formData.set('price', price.current)
        formData.set('cartegories', JSON.stringify(cartegories.current))
        formData.set('isHotSale', isHotSale.current)
        formData.set('isOutOfStock', isOutOfStock.current)
        formData.set('details', details.current)
        formData.set('productImg', productImg.current, new Date().getTime().toString())
        console.log('formData', formData)
        sendAddReq(formData)
    }

    const sendAddReq = (formData:FormData) => {
        fetch('/api/product/add', { 
            method: 'post',
            body: formData,
        })
    }

    return ( 
        <>
            <Navbar shouldRenderShoppingCart = {false}/>
            <form ref = {productForm} className={styles.form}>
                    <div className={styles.imgWrapper}>
                        <img width="100%" height="100%" style={{opacity:0, maxWidth:'inherit', maxHeight:'inherit'}} ref={productImgPreview} src='#'/>
                        <AiOutlinePicture size={'100%'} color={'#ffbd52'}/>
                        <input name="productImg" required ref={fileInput} onChange={()=>{
                            const [file]:any = fileInput.current?fileInput.current.files:null
                            if (file && productImgPreview.current) {
                                productImgPreview.current.src = URL.createObjectURL(file)
                                productImgPreview.current.style.opacity = '1';
                                productImgPreview.current.style.zIndex = '2';
                                productImg.current = file
                            }
                        }} accept=".jpg, .jpeg, .png" type="file"/>
                        Drag Image To Upload
                    </div>

                <div className={styles.fieldWrapper}>
                    <div>
                        <label>Name</label>
                        <input name="name" required onInput={(e)=> name.current = (e.target as HTMLInputElement).value} type="text"/>
                    </div>
                    <div>
                        <label>Price</label>
                        <input name="price" required onInput={(e)=> price.current = (e.target as HTMLInputElement).value} type="text"/>
                    </div>
                    
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignContent: 'center'
                    }}>
                        <span className={styles.checkboxContainer}>
                            <label>Hot Sale</label>
                            <input className={styles.checkbox} name="isHotSale" onChange = {(e) =>isHotSale.current = e.target.checked.toString()} type="checkbox"/>
                        </span>
                        <span className={styles.checkboxContainer}>
                            <label>Out Of Stock</label>
                            <input className={styles.checkbox} name="isOutOfStock" onChange = {(e) =>isOutOfStock.current = e.target.checked.toString()} type="checkbox"/>
                        </span>
                    </div>
                </div>

                <div className={styles.fieldWrapper}>
                    <div>
                        <label>Add Cartegories</label>
                        <span className={styles.addCart}>+</span>

                        {/* <input name="cartegories" required onInput={(e)=> cartegories.current = (e.target as HTMLInputElement).value.split(' ')} type="text"/> */}
                    </div>
                    <div>
                        <label>Details</label>
                        <textarea name="details" onInput={(e)=> details.current = (e.target as HTMLTextAreaElement).value}></textarea>
                    </div>
                    <button type="submit" onClick={e=> {
                        e.preventDefault()
                        addProduct()
                    }}>ADD</button>
                </div>
                
            </form>
            <Footer/>
        </>
     );
}
 
export default Store;