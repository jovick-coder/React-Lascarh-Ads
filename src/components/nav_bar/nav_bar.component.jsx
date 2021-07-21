import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './nav_bar.style.css'
import './side_nav.style.css'

const NavBar = () => {
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
                  <img src="./img/icons/house.svg" className="icon" alt="" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="about-us">
                  <img
                    src="./img/icons/person-bounding-box.svg"
                    className="icon"
                    alt=""
                  />
                  About
                </Link>
              </li>
              <li>
                <Link to="service">
                  <img src="./img/icons/tools.svg" className="icon" alt="" />
                  Service
                </Link>
              </li>
              <li>
                <Link to="login">
                  <img
                    src="./img/icons/door-open.svg"
                    className="icon"
                    alt=""
                  />
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
                  <img src="./img/icons/facebook.svg" alt="" />
                </li>
                <li>
                  <img src="./img/icons/linkedin.svg" alt="" />
                </li>
                <li>
                  <img src="./img/icons/twitter.svg" alt="" />
                </li>
                <li>
                  <img src="./img/icons/google.svg" alt="" />
                </li>
                <li>
                  <img src="./img/icons/github.svg" alt="" />
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
                      <img src="./img/icons/facebook.svg" alt="" />
                    </li>
                    <li>
                      <img src="./img/icons/linkedin.svg" alt="" />
                    </li>
                    <li>
                      <img src="./img/icons/twitter.svg" alt="" />
                    </li>
                    <li>
                      <img src="./img/icons/google.svg" alt="" />
                    </li>
                    <li>
                      <img src="./img/icons/github.svg" alt="" />
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
              <li>
                <Link to="/dashbord/profile">Profile</Link>
              </li>
              <li>
                <Link>Link1</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
