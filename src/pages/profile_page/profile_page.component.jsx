import React from 'react'
import './profile_page.style.css'
import GroupCard from '../../components/group_card/group_card.component'
import DashBordFrame from '../dashbord_page/dashbord_frame.component'

const ProfilePage = () => {
  return (
    <>
      <DashBordFrame pageName="Profile Page">
        <div class="container">
          {/* <!-- Stack the columns on mobile by making one full-width and the other half-width --> */}
          <div class="row">
            <div class="col">
              <GroupCard>
                <div className="profile-div">
                  <div className="flexboxs">
                    <div className="item profile-img">
                      <div className="pic-div">
                        <img
                          src="/img/profile_pic.png"
                          // className="w-50"
                          alt="profile_pic.png"
                        />
                      </div>
                    </div>
                    <div className="item profile-text">
                      <div className="">
                        <b>Name</b>
                        <br />
                        <b>Suname</b>
                        <br />
                        <b>Phone Number</b>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </GroupCard>
            </div>
          </div>
        </div>
      </DashBordFrame>
    </>
  )
}

export default ProfilePage
