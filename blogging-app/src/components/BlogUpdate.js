import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';

function BlogUpdate(){
    const [title,setTitle]=useState("");
    const [author,setAuthor]=useState("");
    const [image,setImage]=useState("");
    const [body,setBody]=useState("");
    const {id}=useParams();
    // console.log("id",id);
    const [data,setData]=useState([]);
    async function fetchBlog(){
        let result=await fetch("http://localhost:3000/blogs/"+id);
        result= await result.json();
        setData(result);
        setAuthor(result.author)
        setTitle(result.title)
        setImage(result.image)
        setBody(result.body);
    }
    useEffect(()=>{
        fetchBlog();
    },[])
    

    function updateBlog(id){
        let updatedData={title,author,image,body};
        console.warn(updatedData);
        fetch("http://localhost:3000/blogs/"+id,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify(updatedData)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert('your result is updated')
            })
        })
    }
    return(
        <div>
           
            <h1>Update</h1>
            <Form className="create-form">
                <Form.Group className="mb-3 " controlId="formBasictext">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" defaultValue={data.title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter title of Blog" name="title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" defaultValue={data.author} onChange={(e)=>{setAuthor(e.target.value)}} placeholder="Enter Author of Blog" name="author"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Image Link </Form.Label>
                    <Form.Control type="url" defaultValue={data.image}  onChange={(e)=>{setImage(e.target.value)}} placeholder="Image Link" name="image"/>
                    <img style={{width:100}} src={data.image}></img>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicBody">
                    <Form.Label>Blog Content</Form.Label>
                    <Form.Control type="text" defaultValue={data.body} onChange={(e)=>{setBody(e.target.value)}} placeholder="Enter content of your Blog" name="body" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={()=>updateBlog(data.id)}>
                    Update Blog
                </Button>
            </Form>
        </div>
    )

}
export default BlogUpdate