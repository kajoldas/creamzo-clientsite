import React from 'react';
import  './Footer.css'

const Footer = () => {
    return (
        <div>
           <footer className="footer">
               <div className="container">
                   <div className="row">
                        <div className="footer-col">
                            <a href="https://www.google.com">Terms of Service</a> 
                           
                        </div>
                        <div className="footer-col">
                            <a href="https://www.google.com">Privacy Policy</a> 
                            
                        </div>
                        <div className="footer-col">
                            <a href="https://www.google.com">Help</a> 
                            
                        </div>
                        <div className="footer-col">
                            <a href="https://www.google.com">iPhone app</a> 
                            
                        </div>
                        <div className="footer-col">
                            <a href="https://www.google.com">Android app</a> 
                            
                        </div>
                        <div className="footer-col">
                            <a href="https://www.google.com">Users</a> 
                            
                        </div>
                        <div className="footer-col">
                            <a href="https://www.google.com">Collections</a> 
                            
                        </div>
                        <div className="footer-col">
                            <a href="https://www.google.com">
                              Today  </a> 
                            
                        </div>
                        <div className="footer-col">
                            <a href="https://www.google.com">Explore</a> 
                            
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
