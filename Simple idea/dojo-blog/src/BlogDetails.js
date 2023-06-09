import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useEffect";

export default function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  const history = useHistory()
  const handleClick = ()=>{
    fetch(`http://localhost:8000/blogs/${id}`,{
        method:'DELETE'
        
    }).then(()=>{
   history.push('/')
    })
  }
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delet</button>
        </article>
      )}
    </div>
  );
}
