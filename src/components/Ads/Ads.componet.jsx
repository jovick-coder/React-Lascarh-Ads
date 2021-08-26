import React from 'react'
// import { Card } from 'react-bootstrap'
import ModalImage from '../modalImage/ModalImage.component'
import './Ads.style.css'

import altImg from './undraw_Upload_image.png'

const Ads = ({ title, about, imgUrl }) => {
  return (
    <React.Fragment>
      <div className="card-div">
        <div className="ads-card">
          <div className="ads-card-img">
            <ModalImage
              imgUrl={imgUrl ? imgUrl : { altImg }}
              about={
                about
                  ? about
                  : 'Some quick example text to build on the card title'
              }
            />
          </div>
          <div className="ads-div">
            <div className="ads">Ads</div>
          </div>
          <div className="ads-card-header">
            <h5>{title ? title : 'Ads Header'}</h5>{' '}
          </div>
          <div className="ads-card-body">
            <div className="ads-card-body-text">
              {about
                ? about
                : 'Some quick example text to build on the card title'}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Ads
