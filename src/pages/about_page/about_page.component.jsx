import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/footer.component'
import NavBar from '../../components/nav_bar/nav_bar.component'
import './about_page.style.css'

const AboutPage = () => (
  <>
    <section id="AboutPage">
      <div className="nav">
        <NavBar />
      </div>
      <div className="about-div">
        <div className="flexbox">
          <div className="item">
            <div className="img-div">
              {' '}
              <img src="./img/team.png" alt="" srcSet="" />
            </div>
          </div>
          <div className="item about-text">
            <div>
              <h1>About Us</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              commodi ducimus? Inventore suscipit dolorem nemo assumenda animi
              ducimus placeat consequuntur ullam, error amet, optio autem, iste
              facere minus consectetur sunt. Ipsam, pariatur est suscipit neque
              dignissimos obcaecati vitae consectetur
              <br />
              <Link to="about-us">
                <button className="btn btn-primary">More...</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  </>
)

export default AboutPage
