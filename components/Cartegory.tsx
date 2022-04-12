import styles from '../styles/cartegoryComp.module.css'
import Product from './Product'
import { ReactElement } from 'react'
const noOfProductsToDisp = 1
const products:ReactElement[] = []

for (let index = 0; index < noOfProductsToDisp; index++) {
    products.push(
        <Product extraClass={'frontPageProduucts'} key={index}/>
    )
}

const Cartegory = ():ReactElement => {
    return ( 
        <div className={styles.cartegory}>
            <div className={styles.prodWrapper}>
                {products}
            </div>
        </div>
     );
}
 
export default Cartegory;