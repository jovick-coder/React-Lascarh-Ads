import React from 'react'
import Ads from '../../components/Ads/Ads.componet'
import AdsCard from '../../components/ads_card/ads_card.component'
import GroupCard from '../../components/group_card/group_card.component'
import DashBordFrame from '../dashbord_page/dashbord_frame.component'

const ExplorePage = () => {
  return (
    <>
      <DashBordFrame pageName="Explore">
        <GroupCard>
          {/* program
           */}
          <div class="row">
            <div class="col-md-4 col-sm-12">
              {/* <GroupCard> */}
              .col-md-4 col-sm-12
              {/* <AdsCard />
              <Ads /> */}
              <Ads imgUrl="/img/undraw_Upload_image.png" />
              {/* </GroupCard> */}
            </div>
            <div class="col-md-4 col-sm-12">
              {/* <GroupCard> */}
              .col-md-4 col-sm-12
              {/* <AdsCard /> */}
              <Ads imgUrl="/img/undraw_Upload_image.png" />
              {/* </GroupCard> */}
            </div>
            <div class="col-md-4 col-sm-12">
              {/* <GroupCard> */}
              .col-md-4 col-sm-12
              {/* <AdsCard /> */}
              <Ads imgUrl="/img/undraw_Upload_image.png" />
              {/* </GroupCard> */}
            </div>
            <div class="col-md-4 col-sm-12">
              {/* <GroupCard> */}
              .col-md-4 col-sm-12
              {/* <AdsCard /> */}
              <Ads imgUrl="/img/undraw_Upload_image.png" />
              {/* </GroupCard> */}
            </div>
          </div>
          {/* </div> */}
        </GroupCard>
      </DashBordFrame>
    </>
  )
}

export default ExplorePage
