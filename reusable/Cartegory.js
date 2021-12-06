import styles from '../styles/cartegoryComp.module.css'

const noOfProductsToDisp = 5
const products = []

for (let index = 0; index < noOfProductsToDisp; index++) {
    products.push(
        <div key={index} className={styles.product}>
            <img className={styles.productImg} src="./product.jpg"/>
            <div className={styles.price}>$190</div>
        </div>
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