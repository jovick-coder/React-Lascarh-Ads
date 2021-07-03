import React from 'react'
import './footer.style.css'

const Footer = () => {
  return (
    <>
      <section id="footer-section" className="mt-5">
        <footer>
          <img src="./img/logo.png" alt="" />

          <div class="footer-container">
            <div class="item">
              <span>QUICK LINKS</span>
              <ul>
                <li>
                  <img src="./img/icons/house.svg" class="icon" alt="" /> Home
                </li>
                <li>
                  <img
                    src="./img/icons/person-bounding-box.svg"
                    class="icon"
                    alt=""
                  />{' '}
                  About
                </li>
                <li>
                  <img src="./img/icons/tools.svg" class="icon" alt="" />{' '}
                  Service
                </li>
                <li>
                  <img
                    src="./img/icons/telephone-fill.svg"
                    class="icon"
                    alt=""
                  />{' '}
                  Countact
                </li>
              </ul>
            </div>
            <div class="item">
              <span>HELP & SUPPORT</span>
              <ul>
                <li>
                  <img
                    src="./img/icons/question-circle.svg"
                    class="icon"
                    alt=""
                  />
                  FAQ
                </li>
                <li>
                  <img src="./img/icons/archive.svg" class="icon" alt="" />
                  Support
                </li>
                <li>
                  <img src="./img/icons/people.svg" class="icon" alt="" />
                  Terms of Service
                </li>
              </ul>
            </div>
            <div class="item">
              <span>COUNTACT</span>
              <ul>
                <li>
                  <img src="./img/icons/envelope.svg" class="icon" alt="" />{' '}
                  lascarh@gmail.com
                </li>
                <li>
                  <img src="./img/icons/phone.svg" class="icon" alt="" />{' '}
                  08137297150
                </li>
                <li>
                  <img src="./img/icons/map.svg" class="icon" alt="" /> Abuja
                </li>
              </ul>
            </div>
            <div class="item">
              <span>ABOUT</span> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Vero rerum suscipit ut possimus nisi nobis sit
              aperiam accusantium vel veniam at dolorem eaque magni dicta ullam
              quisquam ex, odit non!
              <div class="social-icons">
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
