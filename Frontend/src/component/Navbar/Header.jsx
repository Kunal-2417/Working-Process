import React, { useState,useContext } from "react"
import "./header.css"
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from 'react-router-dom';
import { CompareContext } from '../../context/CompareContext';
import { CartContext } from '../../context/CartContext';


const Header = () => {
  const { compareItems } = useContext(CompareContext);
  const { cartItems } = useContext(CartContext);
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              <li>
                <NavLink to="/" >home</NavLink>
              </li>

              <li >
                <NavLink to="/Search">search</NavLink>
              </li>
              <li>
                <a href='#portfolio'>popular products</a>
              </li>
              <li>
                <a href='#resume'>features</a>
              </li>
              <li>
                <a href='#clients'>clients</a>
              </li>
              <li>
                <a href='#blog'>Team</a>
              </li>
              <li>
                <a href='#contact'>contact</a>
              </li>
              <li>
                <NavLink to="/Compare">
          
                  <i className="fa-solid fa-scale-unbalanced">

                  {compareItems.length > 0 && <span className="badge">{compareItems.length}</span>}
                  </i>
                  
             
                </NavLink>
              </li>
              <li>
                <NavLink to="/Cart">
                  <i className="fa-solid fa-shopping-cart">
                    {cartItems.length > 0 && <span className="badge">{cartItems.length}</span>}
                  </i>
                </NavLink>
              </li>
             {
              isAuthenticated ?
              <li>
              <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >
                Log Out
              </button>
              </li>
            : 
            <li>
            <button className="apply-btn"onClick={() => loginWithRedirect()} >Log In</button>
          </li>
             }

            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
