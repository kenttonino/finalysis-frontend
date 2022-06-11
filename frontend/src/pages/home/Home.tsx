import Router from 'next/router'
import type { NextPage } from 'next'
import { Navbar, Container, Card, Nav, Button } from 'react-bootstrap'
import { useEffect } from 'react'

import { HeadComponent } from 'src/components/head/HeadComponent'
import { homeCardContent } from 'src/consts/homeCardContent'

const Home: NextPage = () => {
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (isLoggedIn) Router.push('/profile')
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
                <Nav.Link href='/' active>
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='/login'>Login</Nav.Link>
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
            <Card.Title className='fw-bolder'>WELCOME</Card.Title>
            <Card.Text>A personal financial manager for everyone.</Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Container className='d-flex justify-content-between my-5'>
        {homeCardContent.map((content) => {
          return (
            <Card style={{ width: '20rem' }} key={content.id}>
              <Card.Body>
                <Card.Title className='fw-bolder'>{content.title}</Card.Title>
                <Card.Text>{content.text}</Card.Text>
                <Button variant='primary'>Go somewhere</Button>
              </Card.Body>
            </Card>
          )
        })}
      </Container>
      <Container className='bg-secondary mw-100 py-4'>
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

export default Home
