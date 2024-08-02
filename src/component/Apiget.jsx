import React, { useEffect, useState } from "react";
import axios from "axios";

const Abiget = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = "http://localhost:8000/users";

  const fetchData = () => {
    axios.get(url)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Data error", err);
        setLoading(false);
      });
  };

  
   
  const handleDelete = async (userId) => {
    await axios.delete(`http://localhost:8000/users/${userId}`);
    fetchData();
    alert("User deleted successfully!");
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      {loading ? (
        <div>Loading....</div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Abiget;
