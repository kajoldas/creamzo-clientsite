import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Notfound.css'

const Notfound = () => {
    return (
        <div className='bg'  >
         <Container>
         <div>
            <h1>404</h1>
            <h2>WE ARE SORRY,BUT THE PAGE REQUESTED WAS NOT FOUND</h2>

            </div>
            <div>
            <Button variant="primary" size="lg" active>
             GO HOME
            </Button>{' '}
            
             <Button variant="outline-light">CONTACT</Button>{' '}
            </div>
           
            <div className="footer-col">
                            <h4>Follow Us Online</h4>
                            <div className="social-links">
                               <a href="https://www.google.com"><i className="fab fa-facebook-f"></i></a> 
                               <a href="https://www.google.com"><i className="fab fa-twitter"></i></a> 
                               <a href="https://www.google.com"><i className="fab fa-instagram"></i></a> 
                               <a href="https://www.google.com"><i className="fab fa-linkedin-in"></i></a> 
                                
                         
                        </div>
            </div>
         </Container>
           
        </div>
    );
};

export default Notfound;