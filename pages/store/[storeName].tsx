import { useRef } from "react";
import styles from "../../styles/store.module.css";
import { AiOutlinePicture } from 'react-icons/ai';
import { ReactElement } from 'react'

const Store = ():ReactElement => {
    
    const fileInput = useRef()
    const name = useRef<string|Blob>('')
    const price = useRef<string|Blob>('')
    const cartegories = useRef<[string|Blob]>([''])
    const details = useRef<string|Blob>('')
    const isHotSale = useRef<string|Blob>('')
    const isOutOfStock = useRef<string|Blob>('')
    const productImg = useRef<any>()

    const addProduct = async (event: any) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append('name', name.current)
        formData.append('price', price.current)
        formData.append('cartegories', cartegories.current)
        formData.append('isHotSale', isHotSale.current)
        formData.append('isOutOfStock', isOutOfStock.current)
        formData.append('details', details.current)
        formData.append('img', fileInput.current.files[0])
        await sendAddReq(formData)
    }

    const sendAddReq = async formData => {
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
                            <input required onInput={(e)=> name.current = e.target.value} type="text"/>
                        </div>
                        <div>
                            <label>Price</label>
                            <input required onInput={(e)=> price.current = e.target.value} type="text"/>
                        </div>
                        <div>
                            <label>Cartegories</label>
                            <input required onInput={(e)=> cartegories.current = e.target.value.split(' ')} type="text"/>
                        </div>
                        <div>
                            <label>Hot Sale</label>
                            <input onChange = {(e) =>isHotSale.current = e.target.checked} required type="checkbox"/>
                        </div>
                        <div>
                            <label>Out Of Stock</label>
                            <input onChange = {(e) =>isOutOfStock.current = e.target.checked} required type="checkbox"/>
                        </div>
                    </div>
                    <div className={styles.imgAndButnWrapper}>
                        <div className={styles.imgWrapper}>
                            <img width="100%" height="100%" style={{opacity:0, width:'100%', height:'100%'}} ref={productImg} src='#'/>
                            <AiOutlinePicture size={'100%'} color={'#ffbd52'}/>
                            <input required ref={fileInput} onChange={()=>{
                                const [file] = fileInput.current.files
                                if (file) {
                                    productImg.current.src = URL.createObjectURL(file)
                                    productImg.current.style.opacity = 1;
                                    productImg.current.style.zIndex = 2;
                                }
                            }} accept=".jpg, .jpeg, .png" type="file"/>
                            Drag Image To Upload
                        </div>
                        <div>
                            <label>Details</label>
                            <textarea onInput={(e)=> details.current = e.target.value}></textarea>
                        </div>
                        <button type="submit" onClick={addProduct}>ADD</button>
                    </div>
                </form>
            </div>
        </>
     );
}
 
export default Store;