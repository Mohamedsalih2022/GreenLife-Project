import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import size from './'
import Part2 from './Part2'
import OurSer from './OurSer'
import { motion, Variants } from "framer-motion";


const HomePage = (props) => {
    return (
        <div  className='mt-5' >
           

                    <Carousel className=''>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="pic7.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>Irrigation Tecnology</h3>
                            <p>Applying controlled amounts of water to land to help grow crops, landscape plants, and lawns.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="pic8.jpg"
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="pic9.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
               </Carousel>
        <div>
            
        </div>     
        <Part2/>
        <OurSer/>
        </div>
        
    )
}

export default HomePage
