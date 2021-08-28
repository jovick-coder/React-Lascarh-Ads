import React from 'react'
import { Link } from 'react-router-dom'
import Ads from '../../components/Ads/Ads.componet'
import Footer from '../../components/footer/footer.component'
import GroupCard from '../../components/group_card/group_card.component'
import DashBordFrame from './dashbord_frame.component'
import './dashbord_page.style.css'

const DashBord = () => {
  return (
    <>
      <DashBordFrame pageName="Dashboard">
        <div class="container">
          <GroupCard>
            <div
              style={{ display: 'flex', border: 'sold 1px red', width: '100%' }}
            >
              <div class="row" style={{ margin: 'auto' }}>
                <div class="col-6 col-md-4 mt-3">
                  <Btn class="btn-primary">icon</Btn>
                </div>
                <div class="col-6 col-md-4 mt-3">
                  <Btn class="btn-primary">icon</Btn>
                </div>
                <div class="col-6 col-md-4 mt-3">
                  <Btn class="btn-primary">icon</Btn>
                </div>
                <div class="col-6 col-md-4 mt-3">
                  <Btn class="btn-primary">icon</Btn>
                </div>
                <div class="col-6 col-md-4 mt-3">
                  <Btn class="btn-primary">icon</Btn>
                </div>
                <div class="col-6 col-md-4 mt-3">
                  <Btn class="btn-primary">icon</Btn>
                </div>
              </div>
            </div>
          </GroupCard>
          {/* <!-- Stack the columns on mobile by making one full-width and the other half-width --> */}
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              {' '}
              <GroupCard>
                .col-md-12 col-sm-12 col-xs-12
                <div
                  className="flexbox"
                  style={{ display: 'flex', flexWrap: 'wrap' }}
                >
                  <div style={{ maxWidth: '200px' }} className="item">
                    <Ads imgUrl="./img/social_update.svg" />
                  </div>
                  <div style={{ maxWidth: '200px' }} className="item">
                    <Ads imgUrl="./img/social_update.svg" />
                  </div>
                  <div style={{ maxWidth: '200px' }} className="item">
                    <Ads imgUrl="./img/social_update.svg" />
                  </div>
                </div>
              </GroupCard>
            </div>
            {/* <div class="col-6 col-md-4 col-sm-4 col-xs-0">
              {' '}
              <GroupCard>
                .col-6 .col-md-4 col-sm-4 col-xs-0
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>3</li>
                  <li>4</li>
                  <li>4</li>
                  <li>5</li>
                </ul>
              </GroupCard>
            </div> */}
          </div>

          {/* <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
          <div class="row">
            <div class="col-8 col-md-4 col-sm-12 col-xs-12">
              {' '}
              <GroupCard>.col-8 .col-md-4 my sm-12</GroupCard>
            </div>
            <div class="col-6 col-md-4">
              {' '}
              <GroupCard>.col-6 .col-md-4 my</GroupCard>
            </div>
            <div class="col-6 col-md-4 ">
              {' '}
              <GroupCard>.col-6 .col-md-4 my</GroupCard>
            </div>
          </div>

          {/* <!-- Columns are always 50% wide, on mobile and desktop --> *}
          <div class="row">
            <div class="col-6">
              <GroupCard>.col-6</GroupCard>
            </div>
            <div class="col-6">
              <GroupCard>.col-6</GroupCard>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              <GroupCard>Column</GroupCard>
            </div>
            <div class="col">
              <GroupCard>Column</GroupCard>
            </div>
            <div class="col">
              <GroupCard>Column</GroupCard>
            </div>
            {/* <div class="col">Column</div>
            <div class="col">Column</div> *}
          </div>*/}
        </div>{' '}
        <Footer />
      </DashBordFrame>
    </>
  )
}

export default DashBord

export const Btn = ({ children, kind }) => {
  return (
    <Link>
      <button className={'btn btn-primary'}>{children}</button>
    </Link>
  )
}
