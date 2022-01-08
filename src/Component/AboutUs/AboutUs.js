import React from 'react';
import './AboutUs.css'
import About from'./../../img/About.PNG'
import { Col, Container, Row } from 'react-bootstrap';
const AboutUs = () => {
    return (
        <div > 
         <div className="container">
         <h1>About Wordsmith.</h1>
            <hr></hr>
            <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo.</p>
            
            </div>
         
         <div> <img className='About'src={About}/></div>
         <div > 
             <h2>This Is Our Story</h2>
             <p>
             Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
             <br/>
             <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco. Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat aute.</p>
             </p>
         </div>
          <hr/>

        <Container>
        <Row className='d-flex justify-content-between'>
        <Col  >
         <div ClassName="about-detail" >
             <h3>Who We Are.</h3>
         <p>
         Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute ullamco Duis laborum ad non pariatur sit.
         </p>
         </div>
        </Col>
         <Col ClassName="About-detail">
         <div> <h3>Our Vision.</h3>
           <p> Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute ullamco Duis laborum ad non pariatur sit.</p></div>
         </Col>
        </Row>
        <Row>
         <Col>
        <div>
        <h3> Our Mission.</h3>
         <p>
         Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute ullamco Duis laborum ad non pariatur sit.
         </p>
        </div>
         
         </Col>
         <Col >
        <div > <h3>Our Core Values.</h3>
         <p> Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat qui sit ex occaecat et eu mollit nisi pariatur fugiat deserunt dolor veniam reprehenderit aliquip magna nisi consequat aliqua veniam in aute ullamco Duis laborum ad non pariatur sit.</p></div>
         </Col>
        
        </Row>
        </Container>
        </div>
    );
};

export default AboutUs;