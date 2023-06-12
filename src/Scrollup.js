import React from 'react'
import { useEffect,useState } from 'react'
import { Button } from 'react-bootstrap'

const Scrollup = (props) => {

    const [backUp,setbackUp] = useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>800){
                setbackUp(true)
            }else{
                setbackUp(false)
            }
        })
    },[])

    const scrollup = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    return (
        <div>
                {backUp&&(
                    
                    
                    <Button 
                    className='btn-success'
                    style={{
                        position:'fixed',
                        bottom:'50px',
                        right:'60px',
                        width:'60px',
                        height:'50px',
                        fontSize:'25px'
                    
                    }}
                    onClick={scrollup}>Up</Button>
                )}
        </div>
    )
}

export default Scrollup
