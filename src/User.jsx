import react, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const request = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const res = await request.json();
    setUsers(res);
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <p>{user.name}</p>
      ))}
    </div>
  );
};

export default withRouter(User);
