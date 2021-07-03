import React from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../../components/footer/footer.component'

import AdsCard from '../../components/ads_card/ads_card.component'
import NavBar from '../../components/nav_bar/nav_bar.component'
import './home_page.style.css'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <section id="HomePage">
        <div className="nav">
          <NavBar />
        </div>
        <div className="top-div">
          <div className="flexbox">
            <div className="item">
              <span>
                Social Influencer
                <p>
                  Making your buesiness influence Online
                  <br />
                  <button className="btn btn-primary mt-2">Sign_in</button>
                </p>
              </span>
            </div>
            <div className="item">
              <img
                src="./img/Social_influencer.svg"
                alt="Social_influencer"
                srcset=""
              />
            </div>
          </div>
        </div>
        <div className="about-div">
          <div className="flexbox">
            <div className="item">
              <img src="./img/team.png" alt="" srcset="" />
            </div>
            <div className="item about-text">
              <div>
                <h1>About Us</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, commodi ducimus? Inventore suscipit dolorem nemo
                assumenda animi ducimus placeat consequuntur ullam, error amet,
                optio autem, iste facere minus consectetur sunt. Ipsam, pariatur
                est suscipit neque dignissimos obcaecati vitae consectetur eos
                <br />
                <Link to="about-us">
                  <button className="btn btn-primary">More...</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="why-us w-100">
          <Container fluid>
            <Row>
              <Col>
                {' '}
                <AdsCard />
              </Col>
              <Col>
                {' '}
                <AdsCard />
              </Col>
              <Col>
                {' '}
                <AdsCard />
              </Col>
            </Row>
          </Container>
        </div> */}

        <div className="why-us">
          <h1>Why Us</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eum
          illum ratione, laudantium asperiores at fugiat repudiandae
          necessitatibus est tempore ut magni libero vel, vero, dolorem enim
          consequuntur laborum mollitia.
          <div className="flexbox">
            <div className="item">
              <AdsCard />
            </div>
            <div className="item">
              <AdsCard />
            </div>
            <div className="item">
              <AdsCard />
            </div>
            <div className="item">
              <AdsCard />
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  )
}

export default HomePage
