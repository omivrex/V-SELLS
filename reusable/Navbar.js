import Image from 'next/image'

const Navbar = (props) => {
    return ( 
      <header className="header">
        <nav className="navbar">
          <a href="#" className="nav-logo">V-SELLS</a>
          <ul className="nav-menu">
              <li className="nav-item">
                {props.shouldRenderShoppingCart}
              </li>
              <li className="nav-item">
                  <a href="#" className="nav-link">Sell</a>
              </li>
              <li className="nav-item">
                  <a href="#" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                  <a href="#" className="nav-link">Contact</a>
              </li>
          </ul>
          <div className="hamburger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
          </div>
        </nav>
        <script type="text/javascript" src="./scripts/homepageInteraction.js"></script>
      </header>
    );
}
 
export default Navbar;