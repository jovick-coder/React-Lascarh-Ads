import React from 'react'
import './dashbord_frame.style.css'
import { SideNav } from '../../components/nav_bar/nav_bar.component'

const DashBordFrame = ({ children, pageName }) => {
  return (
    <>
      <section id="dashbord">
        <div className="top-nav">Logo</div>
        <div className="flexbox">
          <div className="item side-nav">
            <div className="">
              <SideNav />
            </div>
          </div>
          <div className="item main-body">
            <h1 className="page-name">{pageName}</h1>
            <div className="">{children}</div>
          </div>
        </div>
      </section>
    </>
  )
}
export default DashBordFrame
