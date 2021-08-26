import React, { Fragment, useEffect, useState } from 'react'
import { Container, Row, Form, Col } from 'react-bootstrap'
import Ads from '../Ads/Ads.componet'
import './postAdsForm.style.css'

const PostAdsForm = () => {
  const [adsList, setAdsList] = useState([])
  const [title, settitle] = useState('')
  const [about, setAbout] = useState('')

  const [img_url, setImg_url] = useState('./img/image.svg')
  const onsubmit = () => {
    if (img_url !== './img/image.svg') {
      if (title !== '' && about !== '') {
        const newAds = {
          title,
          about,
          imgUrl: img_url,
        }
        setAdsList([...adsList, newAds])
      } else {
        console.log('fill fields befor submit')
      }
    } else {
      console.log('Select an image')
    }
  }
  const imageHandler = (e) => {
    const reader = new FileReader()

    reader.onload = () => {
      if (reader.readyState === 2) {
        // console.log('done ' + reader.result)
        setImg_url(reader.result)
      }
    }
    // console.log('file ' + e.target.files)

    reader.readAsDataURL(e.target.files[0])
  }

  return (
    <Fragment>
      <Container>
        <Row>
          <div className="img-div">
            <label htmlFor="img-input">
              <img
                className="img"
                src={img_url}
                // style={{ width: '100%', display: 'block' }}
                alt="img"
              />
            </label>
          </div>
        </Row>
        {/* <div>
          <b>Title: </b>
          <br />
          {title === '' ? (
            <span className="mx-3">Ads Title</span>
          ) : (
            <span className="mx-3">{title}</span>
          )}
          <p />
        </div>

        <div>
          <b>About: </b>
          <br />
          {about === '' ? (
            <span className="mx-3">About Ads</span>
          ) : (
            <span className="mx-3">{about}</span>
          )}
          <p />
        </div> */}
        <Row>
          <input
            type="file"
            name=""
            style={{ display: 'none' }}
            id="img-input"
            onChange={imageHandler}
          />
          <Col>
            <Form.Control
              type="text"
              placeholder="Ads title"
              className="m-3"
              onChange={(e) => settitle(e.target.value)}
            />
          </Col>
          <Col>
            {' '}
            <textarea
              className="form-control m-3"
              id="dropdownCheck"
              placeholder="About Ads"
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>
          </Col>
        </Row>
        <button className="btn btn-secondary " onClick={onsubmit}>
          submit
        </button>
      </Container>
      {adsList.map((ads) => (
        <Ads title={ads.title} about={ads.about} imgUrl={ads.imgUrl} />
      ))}

      {/* {useEffect(() => {
       
      }, [adsList])} */}
    </Fragment>
  )
}

export default PostAdsForm
