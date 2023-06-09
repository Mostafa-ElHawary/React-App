import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending , setPending] = useState(false)
  const history = useHistory()
  const handleSubmit = (e)=> {
    e.preventDefault()
    setPending(true)

    const blog = {title , body , author}

    fetch('http://localhost:8000/blogs',{
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(blog)
    }).then(()=>{
      console.log('blog is add');
      setPending(false)
      history.push('/')
    })

    
  }
  return (
    <div className="create">
      <h2>Add a New Blog</h2>

      <form onSubmit={ handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Aziz">Aziz</option>
          <option value="Ahmed">Ahmed</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Add loading</button>}
      </form>
    </div>
  );
};
export default Create;
