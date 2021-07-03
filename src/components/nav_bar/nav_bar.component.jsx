import React from 'react'
import { Link } from 'react-router-dom'
import './nav_bar.style.css'

const NavBar = () => {
  return (
    <>
      <div id="navBar">
        <div className="flexbox">
          <div className="item logo-div">Logo</div>
          <div className="item links-div">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="about-us">About</Link>
              </li>
              <li>
                <Link to="service">Service</Link>
              </li>
              <li>
                <Link to="login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
