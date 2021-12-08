import Head from 'next/head'
import Navbar from '../reusable/navbar'
import Footer from '../reusable/Footer'
import Product from '../reusable/Product'
import styles from '../styles/cartPage.module.css'
import { useRouter } from 'next/router';

const noOfProductsToDisp = 6*10
const products = []

for (let index = 0; index < noOfProductsToDisp; index++) {
    products.push(
        <Product key={index}/>
    )
}

const CartPage = () => {
    const { query } = useRouter();
    return (
        <div>
            <Head>
                <title>V-Sells | {query.cartegoryName}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar shouldRenderShoppingCart = {false}></Navbar>
            <div className={styles.cartegoryName}>
                {query.cartegoryName}
                <div>check out the best and affordable footwears</div>
            </div>
            <main className={styles.main}>
                <div className={styles.filterPannel}>

                </div>
                <div className={styles.productWrapper}>
                    {products}
                </div>
            </main>
            <Footer/>
        </div>
    );
}
 
export default CartPage;