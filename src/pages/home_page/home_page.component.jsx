import React from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../../components/footer/footer.component'

// import AdsCard from '../../components/ads_card/ads_card.component'
import NavBar from '../../components/nav_bar/nav_bar.component'
import './home_page.style.css'
import { Link } from 'react-router-dom'
import Ads from '../../components/Ads/Ads.componet'

const HomePage = () => {
  return (
    <>
      <section id="HomePage">
        <div className="nav">
          <NavBar />
        </div>
        <div className="top-div">
          <div className="flexbox">
            <div className="item text">
              <span>
                Social Influencer
                <p>
                  Making your buesiness influence Online
                  <br />
                  <button className="btn btn-primary mt-2 btn-sm">Start</button>
                </p>
              </span>
            </div>
            <div className="item">
              <img
                src="./img/Social_influencer.svg"
                alt="Social_influencer"
                srcSet=""
              />
            </div>
          </div>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, commodi ducimus? Inventore suscipit dolorem nemo
                assumenda animi ducimus placeat consequuntur ullam, error amet,
                optio autem, iste facere minus consectetur sunt. Ipsam, pariatur
                est suscipit neque dignissimos obcaecati vitae consectetur
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
          <div className="why-us-text">
            <h1>Why Us</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eum
            illum ratione, laudantium asperiores at fugiat repudiandae
            necessitatibus est tempore ut magni libero vel, vero, dolorem enim
            consequuntur laborum mollitia.
          </div>
          <div className="flexbox">
            {/* <div className="item">
              <Ads />
            </div> */}
            <div className="item">
              <Ads imgUrl="/img/undraw_Upload_image.png" />
            </div>
            <div className="item">
              <Ads imgUrl="/img/undraw_Online_posts.png" />
            </div>
            <div className="item">
              <Ads imgUrl="/img/undraw_social_dashboard.png" />
            </div>
            <div className="item">
              <Ads imgUrl="/img/undraw_online_ad.png" />
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  )
}

export default HomePage
