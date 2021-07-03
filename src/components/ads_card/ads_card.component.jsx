import React from 'react'
import { Card } from 'react-bootstrap'

const AdsCard = () => {
  return (
    <>
      <Card>
        <Card>
          <Card.Img
            variant="top"
            src="./img/Social_media_re.svg"
            alt="Social_media_re"
          />

          <Card.Header>
            <h5>Social_media</h5>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              unde, tempora soluta ipsam, veniam quidem recusandae nesciunt vero
              accusamus ullam repellendus eaque, excepturi similique debitis
              consectetur quibusdam nam tenetur. Ad?
            </Card.Text>
          </Card.Body>
        </Card>
      </Card>
    </>
  )
}

export default AdsCard
