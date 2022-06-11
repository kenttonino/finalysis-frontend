import Router from 'next/router'
import { NextPage } from 'next'
import { useEffect } from 'react'
import { Navbar, Container, Nav, Card } from 'react-bootstrap'

import { HeadComponent } from '../../components/head/HeadComponent'

const Profile: NextPage = () => {
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) Router.push('/login')
  }, [])

  return (
    <HeadComponent titleName='FINPLN | Home'>
      <Navbar>
        <Container>
          <Navbar.Brand href='/' className='text-primary'>
            <h2 className='fw-bolder'>FINPLN</h2>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Nav>
              <Nav.Item>
                <Nav.Link href='/profile' active>
                  Welcome, Admin
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='/logout'>Logout</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className='bg-light mw-100'>
        <Card
          style={{ width: '30rem' }}
          className='mx-auto text-center bg-light border-0'
        >
          <Card.Body style={{ marginTop: '10rem', marginBottom: '10rem' }}>
            <Card.Title className='fw-bolder'>Profile Page</Card.Title>
            <Card.Text>This is temporary. Will update this soon.</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </HeadComponent>
  )
}

export default Profile
