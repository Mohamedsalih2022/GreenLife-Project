import React from 'react'
import { Card, Col, Container,Image,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'


const AboutUs = (props) => {
    return (
        <div>
            <div className='bg-success text-center mt-5 text-white p-5 mb-5'>
                <h1>About Us</h1>
                
            </div>
            <div>
                <Container>
                <Row>
                    <Col xl={8}>
                    <div>
                <h2> WHO WE ARE
                </h2>
                <p>GreenLife is THE PARTNER FOR YOUR PROJECTS, specialized and experienced in Agriculture, and make your project successful in Agriculture field to get good products in all weathers and we have experts teams in this field will help you to get a good result for your project , GreenLife is established in 2023 by Mohamed Ahmed to and the aim of this compeny not only get money but its aim to save environment and make our world is green .</p>    
            </div>
                    </Col>
                    <Col > 
                   <div className=''>
                   <Image src="growing.png" rounded />
                   </div>
                    </Col>
                </Row>
            </Container>
            </div>
            <div>
                <Container>
                <Row className='m-2 '>
                    <Col>
                    <div>
                         <Card border="success" style={{ width: '25rem', height: '25rem' }}>
                                <Card.Body>
                                    <div className='text-center p-1'>
                                        <Image src="vision.png"  />
                                    </div>
                                
                                    <Card.Title className='text-center'>VISION
                                    </Card.Title>
                                    
                                    <Card.Text>
                                    <p>We want to be the best company in this field in the UAE and in world wide, partnering with our clients and providing them with the best advanced technological solutions that will continue to meet and exceed their expectations. In responding to our customers’ needs we strive to present to them the right platform that maximizes their economic, social and environmental returns on their environment investments throughout the solutions and services that our group of companies deliver..</p>    

                                    </Card.Text>

                            </Card.Body>
                            </Card>

                    </div>
                    
                    </Col>
                    <Col > 
                    <div>
                         <Card border="success" style={{ width: '25rem', height: '25rem' }}>
                                <Card.Body>
                                <div className='text-center p-1'>
                                        <Image src="MISSION.png"  />
                                    </div>
                                    <Card.Title className='text-center'>MISSION</Card.Title>
                                    
                                    <Card.Text>
                                    <p>The Mission of GreenLife is to be a leader in the development and enhancement of the country, operation and maintenance of green house and develop Agriculture system . We are determined to provide outstanding and efficient Engineering Services and pioneer in introducing innovative technologies and services driving efficiency and improving our clients’ business with the highest quality levels and at competitive prices.</p>    

                                    </Card.Text>
                              
                            </Card.Body>
                            </Card>

                    </div>
                    </Col>
                    <Col > 
                    <div>
                         <Card border="success" style={{ width: '25rem' , height: '25rem'}}>
                                <Card.Body>
                                <div className='text-center p-1'>
                                        <Image src="Policy1.png"  />
                                    </div>
                                    
                                    <Card.Title  className='text-center'>QHSE Policy</Card.Title>
                                   
                                    <Card.Text>
                                    <p>GreenLife is committed to the safety and health of every individual working within the organization. GreenLife ’ management is fully committed to the maintenance of safe working environment in every work place by providing the necessary resources in terms of equipment, personnel training and policy guidelines.</p>
                                    </Card.Text>
                                
                            </Card.Body>
                            </Card>

                    </div>
                    </Col>
                </Row>
            </Container>
            </div>
            
        </div>
    )
}

export default AboutUs
