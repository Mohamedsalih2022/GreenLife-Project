import React from 'react'
import { Button, Form } from 'react-bootstrap'

const FormContact = (props) => {
    return (
        <div className='m-2'> 
        <div>
            <p>
                     <img
                        src="office.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        x
                    
                    />
                Building No. 179, Street No.9, Airort St, Abu Dhabi
            </p>
        
                
                <p>
                <img
                        src="email.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        
                    
                    />
                    Support@greenlife.com</p>
                <p>
                <img
                        src="p8.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        
                    
                    />
                    
                    +971 2 1122358</p>
                <p>
                <img
                        src="phone.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        
                    
                    />
                      +971 50 1234657</p>
        </div>
        <div>
                <Form style={{width:'550px'}}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       
            <Form.Control type='text' placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            
            <Form.Control type="email" placeholder="Your Email Address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       
       <Form.Control type='text' placeholder="Subject" />
   </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
           
            <Form.Control as="textarea" rows={4} placeholder="Message" />
        </Form.Group>
        <Button className='btn-success'>Submit</Button>
    </Form>
        </div>
        </div>
    )
}

export default FormContact
