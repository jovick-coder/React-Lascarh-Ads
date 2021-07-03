import React from 'react'
import './error_page.style.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const ErrorPage = () => {
  return (
    <>
      <section className="ErrorPage">
        <div className="image-404-div">
          <img src="./img/page_not_found.svg" alt="Page not found" />
        </div>
        <div className="error-message">Page Not Found</div>
        <div className="alt-message">Page may be deleted or not Created</div>
        <Link to="/">
          <Button variant="dark">Go Back To Home</Button>
        </Link>
      </section>
    </>
  )
}

export default ErrorPage
