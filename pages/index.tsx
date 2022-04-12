import Head from 'next/head'
import Navbar from '../components/Navbar'
import Cartegory from '../components/Cartegory'
import Footer from '../components/Footer'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { ReactElement } from 'react'
import { setInterval } from 'timers'
import { useRef, useState, useEffect } from "react";

const noOfCartegoriesToDisp:Number = 6
const cartegories:ReactElement[] = []

for (let index = 0; index < noOfCartegoriesToDisp; index++) {
    cartegories.push(
      <Link href={'/cartegories'}>
        <a>
          <Cartegory/>
        </a>
      </Link>
    )
}

const noOfHotSalesToDisp:Number = 4
const hotSales:ReactElement[] = []

for (let index = 0; index < noOfHotSalesToDisp; index++) {
    hotSales.push(
      <Link href={'/cartegories'}>
        <a>
          <Cartegory/>
        </a>
      </Link>
    )
}

let index:number = 0
const sampleImages:string[] = [
  'phoneImg.png',
  'watch.png',
  'laptop.png',
  'shoppingCart.png',
]
const changeSampleImg = ():void => {
  console.log('called...')
  index = index===sampleImages.length-1? 0: index+1
  const sampleImg:any = document.querySelector('#sampleImg')
  if (sampleImg !== null) {
    sampleImg.src = sampleImages[index]   
  }
}

setInterval(changeSampleImg, 10000)
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
          <img className={styles.sampleImg} id="sampleImg" src={sampleImages[index]} />
        </div>
        <section className={styles.cartegoriesCcntainer}>
          <div className={styles.sectionHeading}><span>Hot Sales</span></div>
          {hotSales}
        </section>
        <section className={styles.cartegoriesCcntainer}>
          <div className={styles.sectionHeading}><span>Cartegories</span></div>
          {cartegories}
        </section>
      </main>
      <Footer/>
    </div>
  )
}
