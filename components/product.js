import styles from '../styles/product.module.css'
import Image from 'next/image'

const Product = () => {
    return ( 
        <div className={styles.product}>
            <img className={styles.productImg} src="/product.jpg"/>
            <div className={styles.price}>$190</div>
        </div>
     );
}
 
export default Product;