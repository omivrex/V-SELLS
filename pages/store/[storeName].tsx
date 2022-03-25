import { useRef } from "react";
import styles from "../../styles/store.module.css";
import { AiOutlinePicture } from 'react-icons/ai';
import { ReactElement } from 'react'

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

    const addProduct = async (event: any) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append('name', name.current)
        formData.append('price', price.current)
        formData.append('cartegories', JSON.stringify(cartegories.current))
        formData.append('isHotSale', isHotSale.current)
        formData.append('isOutOfStock', isOutOfStock.current)
        formData.append('details', details.current)
        formData.append('img', productImg.current)
        await sendAddReq(formData)
    }

    const sendAddReq = async (formData:FormData) => {
        const res = await fetch('/api/product/add', { 
            body: formData,
            method: 'POST'
        })
    }
    return ( 
        <>
            <div className={styles.formWrapper}>
                <form className={styles.form}>
                    <div className={styles.textFieldWrapper}>
                        <div>
                            <label>Name</label>
                            <input required onInput={(e)=> name.current = (e.target as HTMLInputElement).value} type="text"/>
                        </div>
                        <div>
                            <label>Price</label>
                            <input required onInput={(e)=> price.current = (e.target as HTMLInputElement).value} type="text"/>
                        </div>
                        <div>
                            <label>Cartegories</label>
                            <input required onInput={(e)=> cartegories.current = (e.target as HTMLInputElement).value.split(' ')} type="text"/>
                        </div>
                        <div>
                            <label>Hot Sale</label>
                            <input onChange = {(e) =>isHotSale.current = e.target.checked.toString()} required type="checkbox"/>
                        </div>
                        <div>
                            <label>Out Of Stock</label>
                            <input onChange = {(e) =>isOutOfStock.current = e.target.checked.toString()} required type="checkbox"/>
                        </div>
                    </div>
                    <div className={styles.imgAndButnWrapper}>
                        <div className={styles.imgWrapper}>
                            <img width="100%" height="100%" style={{opacity:0, width:'100%', height:'100%'}} ref={productImgPreview} src='#'/>
                            <AiOutlinePicture size={'100%'} color={'#ffbd52'}/>
                            <input required ref={fileInput} onChange={()=>{
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
                        <div>
                            <label>Details</label>
                            <textarea onInput={(e)=> details.current = (e.target as HTMLTextAreaElement).value}></textarea>
                        </div>
                        <button type="submit" onClick={addProduct}>ADD</button>
                    </div>
                </form>
            </div>
        </>
     );
}
 
export default Store;