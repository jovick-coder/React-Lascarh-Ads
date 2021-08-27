import React from 'react'
import GroupCard from '../../components/group_card/group_card.component'
import PostAdsForm from '../../components/postAdsFrom/PostAdsForm.component'
import DashBordFrame from '../dashbord_page/dashbord_frame.component'

const ProfileAdsPage = () => {
  return (
    <>
      <DashBordFrame pageName="Post Ads">
        <GroupCard>
          <PostAdsForm />
        </GroupCard>
      </DashBordFrame>
    </>
  )
}

export default ProfileAdsPage
