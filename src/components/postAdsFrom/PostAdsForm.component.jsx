import React, { useState } from 'react'
import { Container, Row, Form, Col } from 'react-bootstrap'
import Ads from '../Ads/Ads.componet'
import './postAdsForm.style.css'

const PostAdsForm = () => {
  const [adsList, setAdsList] = useState([])
  const [title, settitle] = useState('')
  const [about, setAbout] = useState('')

  const [img_url, setImg_url] = useState('')
  const onsubmit = () => {
    if (img_url !== '') {
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
    <section id="post-ads-form">
      <Container>
        <Row>
          <div className="img-div">
            {img_url === '' ? (
              'Select image'
            ) : (
              <img
                className="img"
                src={img_url}
                // style={{ width: '100%', display: 'block' }}
                alt="img"
              />
            )}
          </div>
          <label className="btn btn-primary" htmlFor="img-input">
            select an image
          </label>
        </Row>
        <div className="flexbox">
          <div className="item">
            <Form.Control
              type="text"
              placeholder="Ads title"
              className="m-3"
              onChange={(e) => settitle(e.target.value)}
            />
            <input
              type="file"
              name=""
              style={{ display: 'none' }}
              id="img-input"
              onChange={imageHandler}
            />
          </div>
          <div className="item">
            <textarea
              className="form-control m-3"
              id="dropdownCheck"
              placeholder="About Ads"
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>
          </div>{' '}
        </div>
        <button className="btn btn-secondary " onClick={onsubmit}>
          submit
        </button>
      </Container>
      {adsList.map((ads) => (
        // <div>
        //   <img src={ads.imgUrl} alt="ads" />
        //   <p>{ads.title}</p>
        //   <p>{ads.about}</p>
        // </div>
        <Ads title={ads.title} about={ads.about} imgUrl={ads.imgUrl} />
      ))}

      {/* {useEffect(() => {
       
      }, [adsList])} */}
    </section>
  )
}

export default PostAdsForm
