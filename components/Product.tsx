import styles from '../styles/product.module.css'
import Image from 'next/image'
import { useRef, ReactElement } from 'react'



const Product = ({onclick}:any):ReactElement => {
    const productImg = useRef<HTMLSpanElement|any>()
    return (
        <div onClick={onclick} className={styles.product}>
            <span ref={productImg} className={styles.productImg}>
                <Image onLoad={()=> productImg.current.style.animation = 'slideInUp 1.5s ease forwards'} height={150} width={150} src="/product.jpg"/>
            </span>
            <div className={styles.price}>$190</div>
        </div>
     );
}
 
export default Product;