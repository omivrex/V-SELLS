import Head from 'next/head'
import Navbar from '../reusable/navbar'
import Cartegory from '../reusable/Cartegory'
import Footer from '../reusable/Footer'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>V-Sells</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar shouldRenderShoppingCart = {false}></Navbar>
        <div className={styles.welcomeBanner}>
          <h1 className={styles.title}>
            V-SELLS
            <small className={styles.small}>Where all asscesories are available.</small>
          </h1>
        </div>
        <div className={styles.cartegoriesCcntainer}>
          <Cartegory/>
          <Cartegory/>
          <Cartegory/>
          <Cartegory/>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
