import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function BlogCreate(){
    const [title,setTitle]=useState("");
    const [author,setAuthor]=useState("");
    const [image,setImage]=useState("");
    const [body,setBody]=useState("");
    const saveBlog=(event)=>{
        event.preventDefault();
        let data={title,author,image,body};
        fetch("http://localhost:3000/blogs",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn("resp",resp);
            })
        })
       
    }
 
    return(
        <div>
            <h1>create</h1>
            <Form className="create-form">
                <Form.Group className="mb-3 " controlId="formBasictext">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter title of Blog" name="title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" value={author} onChange={(e)=>{setAuthor(e.target.value)}} placeholder="Enter Author of Blog" name="author"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Image Link </Form.Label>
                    <Form.Control type="url" value={image} onChange={(e)=>{setImage(e.target.value)}} placeholder="Image Link" name="image"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Blog Content</Form.Label>
                    <Form.Control type="text" value={body} onChange={(e)=>{setBody(e.target.value)}} placeholder="Enter content of your Blog" name="body" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={saveBlog}>
                    Submit Blog
                </Button>
            </Form>
        </div>
    )

}
export default BlogCreate