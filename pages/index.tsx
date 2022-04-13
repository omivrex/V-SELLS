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
      <Link href={'/cartegories'} passHref={true}>
        <div>
          <Cartegory/>
        </div>
      </Link>
    )
}

const noOfHotSalesToDisp:Number = 4
const hotSales:ReactElement[] = []

for (let index = 0; index < noOfHotSalesToDisp; index++) {
    hotSales.push(
      <Link href={'/cartegories'} passHref={true}>
        <div>
          <Cartegory/>
        </div>
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
        <meta name="description" content="E-Commerce website built by Rex Omiv"/>

        <meta itemProp="name" content="V-SELLS"/>
        <meta itemProp="description" content="E-Commerce website built by Rex Omiv"/>
        <meta itemProp="image" content="/sample.png"/>

        
        <meta property="og:url" content="https://v-sells.vercel.app"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="V-SELLS"/>
        <meta property="og:description" content="E-Commerce website built by Rex Omiv"/>
        <meta property="og:image" content="/sample.png"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="V-SELLS"/>
        <meta name="twitter:description" content="E-Commerce website built by Rex Omiv"/>
        <meta name="twitter:image" content="/sample.png"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        <section className={styles.cartegoriesContainer}>
          <div className={styles.sectionHeading}><span>Hot Sales</span></div>
          {hotSales}
        </section>
        <section className={styles.cartegoriesContainer}>
          <div className={styles.sectionHeading}><span>Cartegories</span></div>
          {cartegories}
        </section>
      </main>
      <Footer/>
    </div>
  )
}
