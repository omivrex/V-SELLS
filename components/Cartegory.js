import styles from '../styles/cartegoryComp.module.css'
import Product from './Product'
import Image from 'next/image'

const noOfProductsToDisp = 5
const products = []

for (let index = 0; index < noOfProductsToDisp; index++) {
    products.push(
        <Product key={index}/>
    )
}

const Cartegory = () => {
    return ( 
        <div className={styles.cartegory}>
            <div className={styles.name}>
                Checkout The Best Fitting Footwear
                <span className={styles.Image}>
                    <Image width={17} height={17} src="/forward.svg"/>
                </span>
            </div>
            <div className={styles.prodWrapper}>
                {products}
            </div>
        </div>
     );
}
 
export default Cartegory;