import {useEffect,useState} from 'react'
import { useParams,Link } from 'react-router-dom';
// import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';

function BlogDetails(){
    const {id}=useParams();
    const [data,setData]=useState([]);
    async function fetchBlog(){
        let result=await fetch("http://localhost:3000/blogs/"+id);
        result= await result.json();
        setData(result);
    }
    useEffect(()=>{
        fetchBlog();
    },[])

    function deleteBlog(id){
        fetch(`http://localhost:3000/blogs/${id}`,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn("delresp",resp);
                fetchBlog();
            })
        })

    }
    return(
        <div>
            <Link type="button" className="btn btn-primary like-button">
             Like<span class="badge badge-light">4</span>
            </Link>
            {/* <button>
                <i class="fas fa-thumbs-up"></i> Like
            </button> */}
            <Link className="btn btn-outline-primary primary-button" to={"/update/"+id}>Update</Link>
            <Link className="btn btn-outline-danger danger-button" onClick={()=>deleteBlog(id)}>Delete</Link>
            <div  >
                <img className="image-blog-detail" src={data.image}></img>
            </div>
            <br/>
            <div>
                <h1>{data.title}</h1>
           </div>
            <br/>
            <div style={{textAlign:'justify',marginLeft:20,marginRight:20}}>
                {data.body}
            </div>
            <div style={{textAlign:'right',margin:20}}>
                -{data.author}
            </div>
        </div>
    )

}
export default BlogDetails