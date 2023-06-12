import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const OurSer = (props) => {
    return (
        <div className='bg-light p-5'>
                <div className='text-center text-success p-5'>
                    <h1>OUR SERVICES</h1>
                </div>
                <div className='p-5'>
                    <Container>
                    <Row className='align-item-center' > 
                        <Col>
                                    <Card style={{ width: '18rem' ,height:'22rem'}}>
                                    <Card.Img variant="top" src="c6.jpg" />
                                    <Card.Body>
                                    <Card.Title>Greenhouses</Card.Title>
                                    <Card.Text>
                                    We manufacture greenhouses with the best quality and standards  .
                                   

                                    </Card.Text>
                                      
                                    </Card.Body>
                                    </Card>
                        </Col>
                        <Col>
                                    <Card style={{ width: '18rem' ,height:'22rem'}}>
                                    <Card.Img variant="top" src="c2.jpg" />
                                    <Card.Body>
                                    <Card.Title>Cleaning</Card.Title>
                                    <Card.Text>
                                    We sell pesticides suitable for your products with a team specialized in spraying your product  .
                                    </Card.Text>
                                      
                                    </Card.Body>
                                    </Card>
                        </Col>
                        <Col>
                                    <Card style={{ width: '18rem',height:'22rem' }}>
                                    <Card.Img variant="top" src="c0.jpg" />
                                    <Card.Body>
                                    <Card.Title>Analyzing </Card.Title>
                                    <Card.Text>
                                    We do a complete study and do an analysis to improve the quality of your product using the best modern programs.
                                    </Card.Text>
                                      
                                    </Card.Body>
                                    </Card>
                        </Col>
                        <Col>
                                    <Card style={{ width: '18rem',height:'22rem' }}>
                                    <Card.Img variant="top" src="c6.jpg" />
                                    <Card.Body>
                                    <Card.Title>Dorne</Card.Title>
                                    <Card.Text>
                                    We sell and programming dorne to assist in the smart irrigation process.
                                    </Card.Text>
                                      
                                    </Card.Body>
                                    </Card>
                        </Col>
                    </Row>
                    </Container>    
                </div>
       </div>

    )
}

export default OurSer
