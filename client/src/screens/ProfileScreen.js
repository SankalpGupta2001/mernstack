import React, { useState, useEffect } from 'react'
import {Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails,updateUserProfile } from '../actions/userActions'

const ProfileScreen = ({ history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [profilePic, setprofilePic] = useState('')
  const [aboutme, setAbout] = useState('')
  const [linkedin, setLinkedIn] = useState('')
  const [github, setGithub] = useState('')
  const [facebook, setFacebook] = useState('')
  const [twitter, setTwitter] = useState('')
  const [website, setWebsite] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile


  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      if ( !user.name ) {
        
        dispatch(getUserDetails('profile'));

      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
    // eslint-disable-next-line
  }, [dispatch, history, userInfo,user])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
        dispatch(updateUserProfile({ id: user._id, name, email, password }))
    }
  }

  //console.log(orders);
  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
    
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='confirmPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='phone'>
              <Form.Label>phone</Form.Label>
              <Form.Control
                type='phone'
                placeholder='Enter phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='profilePic'>
              <Form.Label>profilePic</Form.Label>
              <Form.Control
                type='profilePic'
                placeholder='Enter profilePic'
                value={profilePic}
                onChange={(e) => setprofilePic(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>About me</Form.Label>
              <Form.Control
                type='aboutme'
                placeholder='Enter About'
                value={aboutme}
                onChange={(e) => setAbout(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>linkedIn</Form.Label>
              <Form.Control
                type='linkedin'
                placeholder='Enter Link'
                value={linkedin}
                onChange={(e) => setLinkedIn(e.target.value)}
              ></Form.Control>
            </Form.Group>

            
            <Form.Group controlId='password'>
              <Form.Label>Github</Form.Label>
              <Form.Control
                type='github'
                placeholder='Enter Link'
                value={github}
                onChange={(e) => setGithub(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>Facebook</Form.Label>
              <Form.Control
                type='facebook'
                placeholder='Enter Link'
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
              ></Form.Control>
            </Form.Group>
            
            <Form.Group controlId='password'>
              <Form.Label>Twitter</Form.Label>
              <Form.Control
                type='twitter'
                placeholder='Enter Link'
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>Website</Form.Label>
              <Form.Control
                type='website'
                placeholder='Enter Link'
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              ></Form.Control>
            </Form.Group>


            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        
      </Col>
      
    </Row>
  )
}

export default ProfileScreen
