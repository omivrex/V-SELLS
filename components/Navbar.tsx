import Script from 'next/script';
import { BiCartAlt } from 'react-icons/bi';
import { BsTelephone, BsCurrencyExchange } from 'react-icons/bs';
import { IconContext } from "react-icons";
import { ReactElement } from 'react'
import Link from 'next/link';
const Navbar = (props:any):ReactElement => {
    return ( 
      <header className="header">
        <nav className="navbar">
          <Link href="/" passHref={true}> 
            <span className="nav-logo">
              V-SELLS
            </span>
          </Link>
          <ul className="nav-menu">
              <li className="nav-item search-container">
                <input className="search-bar" placeholder="Search your for favorite product"/>
                <span title="search"><img style={{width: '100%'}} src="./search.svg"/></span>
              </li>
              <li className="nav-item">
                  <Link href="#" passHref={true}>
                    <span className="nav-link"><BsTelephone/></span>
                  </Link>
              </li>
              <li className="nav-item">
                  <Link href="#" passHref={true}>
                    <span className="nav-link">Sell</span>
                  </Link>
              </li>
              <li className="nav-item">
                  <Link href="#" passHref={true}>
                    <span className="nav-link"><BsCurrencyExchange/></span>
                  </Link>
              </li>
          </ul>
              <div className='shopping-cart-wrapper'>
                <IconContext.Provider value={{ className: 'shopping-cart', size: '3rem' }}>
                  <BiCartAlt/>
                </IconContext.Provider>
              </div>
          <div className="hamburger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
          </div>
        </nav>
        <Script type="text/javascript" src="../scripts/homepageInteraction.js"/>
      </header>
    );
}
 
export default Navbar;