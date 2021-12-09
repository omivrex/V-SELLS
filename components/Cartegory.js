import styles from '../styles/cartegoryComp.module.css'
import Product from './Product'

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
                <img src="./forward.svg"/>
            </div>
            <div className={styles.prodWrapper}>
                {products}
            </div>
        </div>
     );
}
 
export default Cartegory;