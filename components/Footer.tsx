import styles from '../styles/footer.module.css'
import { ReactElement } from 'react'
import Link from 'next/link'
import { BsFacebook } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { IoLogoWhatsapp, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io';

const Footer = ():ReactElement => {
    return ( 
      <footer className={styles.footer}>
        <h1>Desinged By Rex Omiv</h1>
        <p>
          Rex is a fullstack web and mobile developer with a lot of experience under his belt.
          <br />
          He currently works as a freelance developer, he's focused on building applications for his clients that gives them the satisfaction they deserve.
          <br/>
          V-SELLS is one of his web applications, it is an E-commerce web app desinged to showcase my frontend skills.
        </p>
        <section className={styles.contactInfo}>
          <Link href={'mailto:omivrex@gmail.com'}>
            <a>
              <SiGmail size={'40%'} color={'#ff5722'}/>
            </a>
          </Link>
          <Link href={'https://web.facebook.com/rex.omivii'}>
            <a>
              <BsFacebook size={'40%'} color={'#0164b3'}/>
            </a>
          </Link>
          <Link href={'https://wa.me/+2347084973294'}>
            <a>
              <IoLogoWhatsapp size={'40%'} color={'#4caf50'}/>
            </a>
          </Link>
          <Link href={'https://twitter.com/RexOmiv'}>
            <a>
              <IoLogoTwitter size={'40%'} color={'#0164b3'}/>
            </a>
          </Link>
          <Link href={'https://linkedin.com/in/Rex-Omiv'}>
            <a>
              <IoLogoLinkedin size={'40%'} color={'#0164b3'}/>
            </a>
          </Link>
        </section>
      </footer>
     );
}
 
export default Footer;