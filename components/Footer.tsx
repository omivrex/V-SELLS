import styles from '../styles/footer.module.css'
import { ReactElement } from 'react'

const Footer = ():ReactElement => {
    return ( 
      <footer className={styles.footer}>
        <span>Phone: +2347084973294</span>
        <span>Address: Futo Road Eziobodo</span>
        <span>Email: omivrex@gmail.com</span>
      </footer>
     );
}
 
export default Footer;