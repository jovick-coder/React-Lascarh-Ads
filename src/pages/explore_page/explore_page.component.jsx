import React from 'react'
import Ads from '../../components/Ads/Ads.componet'
import GroupCard from '../../components/group_card/group_card.component'
import DashBordFrame from '../dashbord_page/dashbord_frame.component'

const ExplorePage = () => {
  return (
    <>
      <DashBordFrame pageName="Explore">
        <GroupCard>
          <div class="row">
            <div class="col-md-4 col-sm-12">
              .col-md-4 col-sm-12
              <Ads imgUrl="/img/undraw_Upload_image.png" />
            </div>
            <div class="col-md-4 col-sm-12">
              .col-md-4 col-sm-12
              <Ads imgUrl="/img/undraw_Upload_image.png" />
            </div>
            <div class="col-md-4 col-sm-12">
              .col-md-4 col-sm-12
              <Ads imgUrl="/img/undraw_Upload_image.png" />
            </div>
            <div class="col-md-4 col-sm-12">
              .col-md-4 col-sm-12
              <Ads imgUrl="/img/undraw_Upload_image.png" />
            </div>
          </div>
        </GroupCard>
      </DashBordFrame>
    </>
  )
}

export default ExplorePage
