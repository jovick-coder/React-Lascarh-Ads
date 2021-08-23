import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './nav_bar.style.css'
import './side_nav.style.css'

import facebookImg from './img/facebook.svg'
import linkedinImg from './img/linkedin.svg'
import githubImg from './img/github.svg'
import googleImg from './img/google.svg'
import twitterImg from './img/twitter.svg'
import personBoundingBoxImg from './img/person-bounding-box.svg'
import house from './img/house.svg'
import tools from './img/tools.svg'
import doorOpen from './img/door-open.svg'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const desktopView = window.matchMedia('(min-width:426px)')
    // console.log('desktopView === ', desktopView.matches)
    if (desktopView.matches === true) {
      console.log(isDesktop)
      setIsDesktop(true)
      setIsOpen(true)
    } else {
      setIsOpen(false)
      setIsDesktop(false)
    }
  }, [isDesktop])

  return (
    <>
      <div id="navBar">
        <div className="flexbox">
          <div className="item logo-div">
            Logo
            <button
              className="btn btn-sm menu-btn"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              {isOpen ? 'X' : 'Menu'}
            </button>
          </div>
          <div
            className="item links-div"
            style={
              isOpen ? { height: 'auto' } : { height: 0, overflow: 'hidden' }
            }
          >
            <ul>
              {/* <NavLink to="/" iconUrl="./img/icons/house.svg" name="Home" /> */}
              <li>
                <Link to="/">
                  <img src={house} className="icon" alt="" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="about-us">
                  <img src={personBoundingBoxImg} className="icon" alt="" />
                  About
                </Link>
              </li>
              <li>
                <Link to="service">
                  <img src={tools} className="icon" alt="" />
                  Service
                </Link>
              </li>
              <li>
                <Link to="login">
                  <img src={doorOpen} className="icon" alt="" />
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar

// export const NavLink = ({ to, iconUrl, name }) => (
//   <>
//     <div className="link-item">
//       <li>
//         <Link to={to}>
//           <img src={iconUrl} className="icon" alt="" />
//           {/* <div className="name"> */}
//           {name}
//           {/* </div> */}
//         </Link>
//       </li>
//     </div>
//   </>
// )

export const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const desktopView = window.matchMedia('(min-width:426px)')
    // console.log('desktopView === ', desktopView.matches)
    if (desktopView.matches === true) {
      setIsDesktop(true)
      setIsOpen(true)
    } else {
      setIsOpen(false)
      setIsDesktop(false)
    }
  }, [])
  return (
    <>
      <div className="side-nav">
        {isDesktop ? (
          <>
            <div className="social-icons">
              <ul>
                <li>
                  <img src={facebookImg} alt="" />
                </li>
                <li>
                  <img src={linkedinImg} alt="" />
                </li>
                <li>
                  <img src={twitterImg} alt="" />
                </li>
                <li>
                  <img src={googleImg} alt="" />
                </li>
                <li>
                  <img src={githubImg} alt="" />
                </li>
              </ul>
            </div>
          </>
        ) : (
          <button
            className="btn btn-sm menu-btn"
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          >
            {isOpen ? 'X' : 'Menu'}
          </button>
        )}
      </div>
      <div
        id="side-nav"
        style={
          isOpen ? { width: '60vw' } : { width: '0px', overflow: 'hidden' }
        }
        // style={isDesktop ? { width: '40vw' } : { width: '0vw' }}
      >
        <div className="nav">
          <div className="link-div">
            {isDesktop ? null : (
              <>
                <div className="social-icons">
                  <ul>
                    <li>
                      <img src={facebookImg} alt="" />
                    </li>
                    <li>
                      <img src={linkedinImg} alt="" />
                    </li>
                    <li>
                      <img src={twitterImg} alt="" />
                    </li>
                    <li>
                      <img src={googleImg} alt="" />
                    </li>
                    <li>
                      <img src={githubImg} alt="" />
                    </li>
                  </ul>
                </div>
              </>
            )}
            <ul>
              {/* <NavLink to="/" iconUrl="./img/icons/house.svg" name="Home" /> */}
              <li>
                <Link to="/dashbord">Dashboard</Link>
              </li>
              {/* <hr /> */}
              <li>
                <Link>Explor</Link>
              </li>
              <li>
                <Link>Post Ads</Link>
              </li>
              <li>
                <Link to="/dashbord/profile">Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
