import Script from 'next/script';
import { BiCartAlt } from 'react-icons/bi';
import { IconContext } from "react-icons";
import { ReactElement } from 'react'
const Navbar = (props:any):ReactElement => {
    return ( 
      <header className="header">
        <nav className="navbar">
          <a href="/" className="nav-logo">V-SELLS</a>
          <ul className="nav-menu">
              <li className="nav-item search-container">
                <input className="search-bar" placeholder="Search your for favorite product"/>
                <span title="search"><img style={{width: '100%'}} src="./search.svg"/></span>
              </li>
              <li className="nav-item">
                  <a href="#" className="nav-link">Call To Order</a>
              </li>
              <li className="nav-item">
                  <a href="#" className="nav-link">Sell</a>
              </li>
              <li className="nav-item">
                  <a href="#" className="nav-link">Currency</a>
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
        <Script type="text/javascript" src="./scripts/homepageInteraction.js"/>
      </header>
    );
}
 
export default Navbar;