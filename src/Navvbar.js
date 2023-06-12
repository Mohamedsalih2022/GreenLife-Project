import React from 'react'
import { Navbar,Container,Nav} from 'react-bootstrap'


const Navvbar = (props) => {
    return (
      <div>
        <div className=''>
    
            <Navbar bg="light" fixed="top" className='' >
              <Container>
                <Navbar.Brand href="/">
                  <img
                    src="logoWeb.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    
                  
                  />
                  Green Life
                </Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/About">About</Nav.Link>
                  <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
        
        </div>
    
      </div>
    )
}

export default Navvbar
