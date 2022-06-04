import styles from '../styles/footer.module.css'
import { ReactElement } from 'react'
import Link from 'next/link'
import { BsFacebook } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { IoLogoWhatsapp, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io';
import {AiFillInstagram} from "react-icons/ai"
const Footer = ():ReactElement => {
    return ( 
      <footer className={styles.footer}>
        <h1>Designed By Sammy Savage</h1>
        <p>
          <br />
            I am a fullstack web designer and developer.
            I currently work as a self employed businessman who owns a brand called Sammy Gadget&lsquo;s, l&lsquo;m focused on designing websites and apps for my clients that
            will give them the satisfaction they deserve.
            I am a fullstack web and mobile developer.
          <br/>
            V-SELLS is one of my web applications, it is an E-
            commerce web application desinged to showcase
            my frontend skills.
        </p>
        <section className={styles.contactInfo}>
          <Link href={'mailto:Samsonm199@gmail.com'} passHref={true}>
            <span>
              <SiGmail size={'40%'} color={'#ff5722'}/>
            </span>
          </Link>
          <Link href={'https://www.instagram.com/sammy_craze/'} passHref={true}>
            <span>
              <AiFillInstagram size={'40%'} color={'#e91e63'}/>
            </span>
          </Link>
          <Link href={'https://wa.me/+2349057848503'} passHref={true}>
            <span>
              <IoLogoWhatsapp size={'40%'} color={'#4caf50'}/>
            </span>
          </Link>
          <Link href={'https://twitter.com/Sammie98271022'} passHref={true}>
            <span>
              <IoLogoTwitter size={'40%'} color={'#0164b3'}/>
            </span>
          </Link>
          <Link href={'https://linkedin.com/in/samson-moses-458ab619a'} passHref={true}>
            <span>
              <IoLogoLinkedin size={'40%'} color={'#0164b3'}/>
            </span>
          </Link>
        </section>
      </footer>
     );
}
 
export default Footer;