import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FormContact from './FormContact'

const ContactUs = (props) => {
    return (
        <div>
            <div className='bg-success text-center mt-5 text-white p-5 mb-5'>
                <h1>Contact Us</h1>
                
            </div>
            <div className='bg-white text-center text-success '>
                <h2>GET IN TOUCH</h2>
                
            </div>
            <div >
                <Container>

                    <FormContact/>
                </Container>
                        
                        
                
                
                
            </div>
        </div>
    )
}

export default ContactUs
