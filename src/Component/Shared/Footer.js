import React from 'react';
import { Nav } from 'react-bootstrap';
import  './Footer.css'

const Footer = () => {
    return (
        <div>
           <footer className="footer">
               <div className="container">
                   <div className="row">
                       
                        <div className="footer-col">
                            <a href="https://www.google.com">Creamzo</a> 
                            
                        </div>

                        <div className="footer-col">
                            
                            <a href="https://www.google.com">Contact Us</a> 
                            
                        </div>
                        <div className="footer-col">
                            
                            <Nav.Link href="aboutus">About Us</Nav.Link>
                            
                        </div>
                        <div className="footer-col">
                            <a href="https://www.google.com">Terms</a> 
                            <Nav.Link href="terms">Terms</Nav.Link>
                            
                        </div>
                        <div className="footer-col">
                            <a href="https://www.google.com">Join</a> 
                            
                        </div>
                      
                        {/* <div className="footer-col">
                            <h4>Follow Us Online</h4>
                            <div className="social-links">
                               <a href="https://www.google.com"><i className="fab fa-facebook-f"></i></a> 
                               <a href="https://www.google.com"><i className="fab fa-twitter"></i></a> 
                               <a href="https://www.google.com"><i className="fab fa-instagram"></i></a> 
                               <a href="https://www.google.com"><i className="fab fa-linkedin-in"></i></a> 
                                
                            </div>
                        </div> */}
                   </div>
               </div>
               <h6 style={{color:'white', marginTop:'35px'}}> All © copyright reserved 2020-2021</h6>
           </footer>

        
        </div>
    );
};

export default Footer;
