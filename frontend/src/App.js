import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users") // Fetching data from the new backend API route
      .then((response) => {
        setUsers(response.data); // Setting the users data from the response
      })
      .catch((error) => {
        console.error("Error fetching data from backend:", error);
      });
  }, []);

  return (
    <div>
      <h1>User List:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
