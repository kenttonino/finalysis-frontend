import Router from 'next/router'
import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import { Navbar, Container, Form, Nav, Button } from 'react-bootstrap'

import { HeadComponent } from 'src/components/head/HeadComponent'
import { User } from '../../consts/user'

const Login: NextPage = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleLoginUser = (e: React.FormEvent) => {
    e.preventDefault()

    if (email === User.email && password === User.password) {
      localStorage.setItem('isLoggedIn', 'true')
      Router.push('/profile')
    }
  }

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (isLoggedIn) Router.push('/profile')
  }, [])

  return (
    <HeadComponent titleName='FINPLN | Login'>
      <Navbar>
        <Container>
          <Navbar.Brand href='/' className='text-primary'>
            <h2 className='fw-bolder'>FINPLN</h2>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Nav>
              <Nav.Item>
                <Nav.Link href='/'>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='/login' active>
                  Login
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className='mw-100'>
        <Container style={{ width: '35rem', marginTop: '10rem' }}>
          <Form onSubmit={(e) => handleLoginUser(e)}>
            <Form.Group className='mb-4' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                placeholder='Enter email'
              />
            </Form.Group>
            <Form.Group className='mb-4' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                placeholder='Enter password'
              />
            </Form.Group>
            <Button variant='primary' type='submit' className='w-100'>
              Submit
            </Button>
          </Form>
        </Container>
      </Container>
      <Container className='bg-secondary mw-100 py-4 fixed-bottom'>
        <Container className='text-light py-5'>
          <h4 className='fw-bolder'>CONTACT US</h4>
          <p className='fw-lighter'>
            123 Paseo de Roxas, Legazpi Village
            <br /> Makati, 1229 Metro Manila, Philippines
          </p>
          <p className='mb-0'>
            <span className='fw-bold'>Phone </span>: +65-902-345-4545
          </p>
          <p>
            <span className='fw-bold'>Email </span>: development.team@finpin.com
          </p>
        </Container>
      </Container>
    </HeadComponent>
  )
}

export default Login
