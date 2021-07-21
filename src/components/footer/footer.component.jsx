import React from 'react'
import './footer.style.css'

const Footer = () => {
  return (
    <>
      <section id="footer-section" className="mt-5">
        <footer>
          <img src="./img/logo.png" alt="" />

          <div className="footer-container">
            <div className="item">
              <span>QUICK LINKS</span>
              <ul>
                <li>
                  <img src="./img/icons/house.svg" className="icon" alt="" />{' '}
                  Home
                </li>
                <li>
                  <img
                    src="./img/icons/person-bounding-box.svg"
                    className="icon"
                    alt=""
                  />{' '}
                  About
                </li>
                <li>
                  <img src="./img/icons/tools.svg" className="icon" alt="" />{' '}
                  Service
                </li>
                <li>
                  <img
                    src="./img/icons/telephone-fill.svg"
                    className="icon"
                    alt=""
                  />{' '}
                  Countact
                </li>
              </ul>
            </div>
            <div className="item">
              <span>HELP & SUPPORT</span>
              <ul>
                <li>
                  <img
                    src="./img/icons/question-circle.svg"
                    className="icon"
                    alt=""
                  />
                  FAQ
                </li>
                <li>
                  <img src="./img/icons/archive.svg" className="icon" alt="" />
                  Support
                </li>
                <li>
                  <img src="./img/icons/people.svg" className="icon" alt="" />
                  Terms of Service
                </li>
              </ul>
            </div>
            <div className="item">
              <span>COUNTACT</span>
              <ul>
                <li>
                  <img src="./img/icons/envelope.svg" className="icon" alt="" />{' '}
                  lascarh@gmail.com
                </li>
                <li>
                  <img src="./img/icons/phone.svg" className="icon" alt="" />{' '}
                  08137297150
                </li>
                <li>
                  <img src="./img/icons/map.svg" className="icon" alt="" />{' '}
                  Abuja
                </li>
              </ul>
            </div>
            <div className="item">
              <span>ABOUT</span>{' '}
              <div className="about-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                rerum suscipit ut possimus nisi nobis sit aperiam accusantium
                vel veniam at dolorem eaque magni dicta ullam quisquam ex, odit
                non!
              </div>
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
            </div>
          </div>
        </footer>
      </section>
    </>
  )
}

export default Footer
