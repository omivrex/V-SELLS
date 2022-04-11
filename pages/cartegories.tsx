import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Product from '../components/Product'
import Filter from '../components/Filter'
import Details from '../components/Details'
import styles from '../styles/cartPage.module.css'
import { useRouter } from 'next/router';
import { useState, ReactElement } from 'react'

const noOfProductsToDisp:number = 6*10
const products:number[] = []
for (let index = 0; index < noOfProductsToDisp; index++) {
    products.push(index)
}


const CartPage = ():ReactElement => {
    const { query } = useRouter();
    const [displayValue, setdisplayValue] = useState<{display: string}>({display: 'none'})
    return (
        <div>
            <Head>
                <title>V-Sells | {query.cartegoryName}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar shouldRenderShoppingCart = {false}></Navbar>
            <div className={styles.cartegoryName}>
                {query.cartegoryName}
                <div>Check Out The Best And Affordable Items</div>
            </div>
            <main className={styles.main}>
                <div className={styles.filterPannel}>
                    <h2 className={styles.filterHeader}>Filters</h2>
                    <ul className={styles.ul}>
                        <Filter/>
                        <Filter/>
                        <Filter/>
                        <Filter/>
                        <Filter/>
                    </ul>
                </div>
                <div className={styles.productWrapper}>
                    {products.map((index)=> <Product onclick={()=> setdisplayValue({display: 'flex'})} styles={{margin: '8px'}} key={index} index={index}/>)}
                </div>
                <Details onclick={()=> setdisplayValue({display: 'none'})} displayValue={displayValue}/>
            </main>
            <Footer/>
        </div>
    );
}
 
export default CartPage;