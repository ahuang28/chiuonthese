import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                  CHIU ON THESE
                </Link>
                {/* menu sidebar button */}
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                {/* menu disappears after you click an option from sidebar */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  {/* <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      HOME
                    </Link>
                  </li> */}
                  <li className='nav-item'>
                    <Link to='/menu' className='nav-links' onClick={closeMobileMenu}>
                      MENU
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/lookbook' className='nav-links' onClick={closeMobileMenu}>
                      LOOKBOOK
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                      ABOUT
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                      CONTACT
                    </Link>
                  </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>MENU</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar