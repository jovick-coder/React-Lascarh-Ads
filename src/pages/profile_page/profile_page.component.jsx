import React from 'react'
import './profile_page.style.css'
import GroupCard from '../../components/group_card/group_card.component'
import DashBordFrame from '../dashbord_page/dashbord_frame.component'
import { Link } from 'react-router-dom'

const ProfilePage = () => {
  return (
    <>
      <DashBordFrame pageName="Profile Page">
        <div class="container">
          {/* <!-- Stack the columns on mobile by making one full-width and the other half-width --> */}
          <GroupCard>
            <b>Total post</b> 20
          </GroupCard>
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
                        <b>Name</b> Victor
                        <br />
                        <b>Suname</b> Josiah
                        <br />
                        <b>Phone Number</b> 08137297150
                        <br />
                      </div>
                    </div>
                  </div>
                  <Link to="">
                    <button className="btn btn-primary btn-sm float-end">
                      Edit Profile
                    </button>
                  </Link>
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
