// import {  } from 'bootstrap'
import React from 'react'
import { Form, Spinner, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavBar from '../../components/nav_bar/nav_bar.component'
import './login.style.css'

const LoginPage = () => {
  return (
    <>
      <section id="LogiPage">
        <div className="nav">
          <NavBar />
        </div>
        <div className="form-div">
          <div className="flexbox">
            <div className="item">
              <Form>
                <div className="top-text">Log in</div>
                <div className="form-input">
                  <Form.Group controlId="email">
                    <Form.Check.Label>Enter Email</Form.Check.Label>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                </div>
                <div className="form-input">
                  <Form.Group controlId="password">
                    <Form.Check.Label>Enter Password</Form.Check.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </div>
                <div className="form-input">
                  <Form.Group controlId="password">
                    <Button
                      className="float-end"
                      variant="primary"
                      //  disabled
                    >
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        className="mr-2"
                      />
                      Loading...
                    </Button>
                  </Form.Group>
                </div>
                <div className="form-input link">
                  <Link to="forgot-password">Forgot Pssword?</Link>
                  <p>
                    {' '}
                    <Link to="sign-in">Create account?</Link>
                  </p>
                </div>
                {/* <div className="form-input link">Have an account?</div> */}
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LoginPage

export const SignInPage = () => {
  return (
    <>
      <section id="LogiPage">
        <div className="nav">
          <NavBar />
        </div>
        <div className="form-div">
          <div className="flexbox">
            <div className="item sign-in">
              <Form>
                <div className="top-text">Sign in</div>
                {/* <b>NOTE: </b> */}
                <div className="form-input">
                  <span>Personal Info</span>
                  <Form.Group controlId="email">
                    {/* <Form.Check.Label>Enter Email</Form.Check.Label> */}
                    <Form.Control type="email" placeholder="Full Name" />
                  </Form.Group>

                  <Form.Group controlId="email" className="mt-2">
                    {/* <Form.Check.Label>Enter Email</Form.Check.Label> */}
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                </div>
                <div className="form-input">
                  <span>Set Password</span>
                  <Form.Group controlId="password">
                    {/* <Form.Check.Label>Enter Password</Form.Check.Label> */}
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Form.Group controlId="password" className="mt-2">
                    {/* <Form.Check.Label>Enter Password</Form.Check.Label> */}
                    <Form.Control
                      type="password"
                      placeholder="Renter Password"
                    />
                  </Form.Group>
                </div>
                <div className="form-input">
                  <Form.Group controlId="password">
                    <Button
                      className="float-end"
                      variant="primary"
                      //  disabled
                    >
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        className="mr-2"
                      />
                      Loading...
                    </Button>
                  </Form.Group>
                </div>
                <div className="form-input link">
                  {/* <Link to="forgot-password">Forgot Pssword?</Link> */}
                  <p>
                    {' '}
                    <Link to="login">Have an account?</Link>
                  </p>
                </div>
                {/* <div className="form-input link">Have an account?</div> */}
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const ForgotPassword = () => {
  return (
    <>
      <section id="LogiPage">
        <div className="nav">
          <NavBar />
        </div>
        <div className="form-div">
          <div className="flexbox">
            <div className="item forgot-password">
              <Form>
                <div className="top-text">Forgot Password</div>
                <div className="form-input">
                  <Form.Group controlId="email">
                    <Form.Check.Label>Enter Email</Form.Check.Label>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                </div>
                {/* <div className="form-input">
                  <Form.Group controlId="password">
                    <Form.Check.Label>Enter Password</Form.Check.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </div> */}
                <div className="form-input">
                  <Form.Group controlId="password">
                    <Button
                      className="float-end"
                      variant="primary"
                      //  disabled
                    >
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        className="mr-2"
                      />
                      Loading...
                    </Button>
                  </Form.Group>
                </div>
                <div className="form-input link">
                  <Link to="login">Login?</Link>
                  <p>
                    <Link to="sign-in">Create account?</Link>{' '}
                  </p>
                </div>
                {/* <div className="form-input link">Have an account?</div> */}
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
