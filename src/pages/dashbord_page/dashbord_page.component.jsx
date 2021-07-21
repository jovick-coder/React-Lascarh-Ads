import React from 'react'
import GroupCard from '../../components/group_card/group_card.component'
import DashBordFrame from './dashbord_frame.component'
import './dashbord_page.style.css'

// import { propTypes } from 'react-bootstrap/esm/Image'
// import { Children } from 'react'
// import { Route } from 'react-router-dom'
// import ErrorPage from '../error_page/error_page.component'
// import AdsCard from '../../components/ads_card/ads_card.component'

const DashBord = () => {
  return (
    <>
      <DashBordFrame pageName="Dashboard">
        <div class="container">
          {/* <!-- Stack the columns on mobile by making one full-width and the other half-width --> */}
          <div class="row">
            <div class="col-md-8 col-sm-4 col-xs-4">
              {' '}
              <GroupCard>.col-md-8 </GroupCard>
            </div>
            <div class="col-6 col-md-4">
              {' '}
              <GroupCard>.col-6 .col-md-4 </GroupCard>
            </div>
          </div>

          {/* <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop --> */}
          <div class="row">
            <div class="col-6 col-md-4">
              {' '}
              <GroupCard>.col-6 .col-md-4</GroupCard>
            </div>
            <div class="col-6 col-md-4">
              {' '}
              <GroupCard>.col-6 .col-md-4</GroupCard>
            </div>
            <div class="col-6 col-md-4 ">
              {' '}
              <GroupCard>.col-6 .col-md-4 new</GroupCard>
            </div>
          </div>

          {/* <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop --> */}
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

          {/* <!-- Columns are always 50% wide, on mobile and desktop --> */}
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
            <div class="col">Column</div> */}
          </div>
        </div>
      </DashBordFrame>
    </>
  )
}

export default DashBord
