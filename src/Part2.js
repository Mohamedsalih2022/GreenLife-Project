import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import Textor from './Textor'

const Part2 = (props) => {
    return (
        <div className=' bg-success p-5'>
            <div className='text-white p-5 m-5'>
                    <Container>
                        <Row className>
                        <h1 className=' mt-5 text-center'>WHO WE ARE !</h1>
                        <p  className=' mt-5 text-center'>
                        We are GreenLife, and we are here to help you overcome security and water challenges during agriculture, and we provide you with a good environment for farmers and all the crops that you want to grow and obtain with high quality in all conditions.                </p>
                        
                        </Row> 
                        </Container>
                </div>
            <div className='text-center p-5 m-5'>
                <Button  variant="light  text-success" href='/About'>Click Here to Knows More</Button>
            </div>
                
              
           

        </div>
    )
}

export default Part2
