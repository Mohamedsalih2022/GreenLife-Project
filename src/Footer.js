import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = (props) => {
    return (
        <div className='bg-success '>
            <div className='text-white'>
                <Container>
                <Row>
                    <Col className='text-center p-1'>
                    <small><p>Copyright © 2023 GreenLife L.L.C - All rights reserved.</p></small>
                    </Col>
                   
                </Row>
                </Container>
            </div>
            
        </div>
    )
}

export default Footer
