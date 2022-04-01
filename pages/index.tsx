import Head from 'next/head'
import Navbar from '../components/Navbar'
import Cartegory from '../components/Cartegory'
import Footer from '../components/Footer'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { ReactElement } from 'react'

export default function Home():ReactElement {
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
        <Link href={'/cartegories'}>
          <a>
            <Cartegory/>
          </a>
        </Link>
        <Link href={'/cartegories'}>
          <a>
            <Cartegory/>
          </a>
        </Link>
        <Link href={'/cartegories'}>
          <a>
            <Cartegory/>
          </a>
        </Link>
        <Link href={'/cartegories'}>
          <a>
            <Cartegory/>
          </a>
        </Link>
        <Link href={'/cartegories'}>
          <a>
            <Cartegory/>
          </a>
        </Link>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
