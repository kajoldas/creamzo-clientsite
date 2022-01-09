import React from 'react';
import { Card ,Container,Row,Col} from 'react-bootstrap';
import './Blog.css'
import img1 from'./../../img/blog-1.png';
import img2 from './../../img/blog-2.jpg';
import img3 from './../../img/blog-3.png';
import img4 from './../../img/blog-4.png';
import img5 from './../../img/blog-5.jpg';
import img6 from './../../img/blog-6.jpg'



const Blog = () => {
    return (
    <div className='bg-blog'  > 
        <Container>
        
        <Row>
            <Col sm={8}>
            <h2>The Blog</h2> 
            <img className='img1'src={img1}/>
            </Col>
             
             <Col sm={4}>
             
             <span className='blog-h4-s'>January 9,2022</span>
               <h4 className='blog-h4' >Tentang </h4>
               <h4 className='blog-h4' >Creativity </h4>
               <h4 className='blog-h4' >Block pada </h4>
               <h4 className='blog-h4' > UI Designer </h4>
               <p className='blog-h4-p' >
               Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo.
             </p>
            
           </Col>
            
        </Row>

        <Row xs={1} md={3} className="g-4">
  {/* {Array.from({ length: 6 }).map((_, idx) => ( */}
    <Col>
      <Card>
        <Card.Img variant="top" src= {img3} />
        <Card.Body>
        <span>January 9,2022</span>
          <Card.Title>HTML5</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src= {img3} />
        <Card.Body>
            <span>January 9,2022</span>
          <Card.Title>CSS</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src= {img4} />
        <Card.Body>
        <span>January 9,2022</span>
          <Card.Title>JavaScript</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src= {img5} />
        <Card.Body>
        <span>January 9,2022</span>
          <Card.Title>React Js</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src= {img5} />
        <Card.Body>
        <span>January 9,2022</span>
          <Card.Title>MongoDB</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src= {img6} />
        <Card.Body>
          <span>January 9,2022</span>
          <Card.Title>React Native</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  {/* ))} */}
</Row>
      </Container>
                
    <div>
         
  

            </div>
        </div>
    );
};

export default Blog;