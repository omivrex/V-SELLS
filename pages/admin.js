import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Link from "next/link"
import { signIn, useSession } from "next-auth/react"
import Product from '../components/Product'
import styles from '../styles/admin.module.css'
import { useRouter } from 'next/router';

const Admin = () => {
    const { data: session, status } = useSession()
    const router = useRouter()
    console.log(status);
    if (status === "authenticated") {
        router.push('/')
    }

    return (
        <>
            <Head>
                <title>V-Sells | Admin</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar shouldRenderShoppingCart = {false}></Navbar>
            <div className={styles.formWrapper}>
                <div className={styles.header}>
                    Welcome To The Admin Section
                    <small>Please Choose A prefered Platform To Sign In</small>
                </div>

                <div className={styles.form}>
                    <Link href='/api/auth/signIn'>
                        <a id='google' className={styles.signInButn} onClick={e=> {e.preventDefault();  signIn('google')}}>Signin with Google</a>
                    </Link>
                    <Link href='/api/auth/signIn'>
                        <a id='facebook' className={styles.signInButn} onClick={e=> {e.preventDefault();  signIn('google')}}>Signin with Facebook</a>
                    </Link>
                </div>
            </div>
            <Footer/>
            <script src="/scripts/sell-auth.js"/>
        </>
     );
}
 
export default Admin;