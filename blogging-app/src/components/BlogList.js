import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

import React,{useState,useEffect} from "react";
function BlogList(){
    const [data,setData]=useState([]);
    async function fetchBlogs(){
        let result=await fetch('http://localhost:3000/blogs');
        result= await result.json();
        setData(result);
    }
    
    useEffect(()=>{
        fetchBlogs();
    },[])

    
    return(
        
        <div>
            <Link to="/create" className="btn btn-secondary add-blog" variant="secondary">New Post</Link>
            <br/>
            <h1>Blog List</h1>
            <br/>
            <Row xs={1} md={2} className="g-4">
                {data.map((item) => (
                    <Col key={item.id}>
                    <Card >
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                            {item.body.slice(0,180).concat("....")}<Link to={"/details/"+item.id}>Read More</Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )

}
export default BlogList