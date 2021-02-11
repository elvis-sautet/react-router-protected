import { withRouter } from "react-router-dom";
import react, { useState, useEffect } from "react";

const Comments = () => {
  const [comment, setComments] = useState([]);

  async function fetchComments() {
    const req = await fetch(`https://jsonplaceholder.typicode.com/comments`);
    const resp = await req.json();
    setComments(resp);
  }
  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      {comment.map((comments) => (
        <>
          <small>comment Id{comments.id}</small>
          <p>{comments.name}</p>
        </>
      ))}
    </div>
  );
};

export default withRouter(Comments);
