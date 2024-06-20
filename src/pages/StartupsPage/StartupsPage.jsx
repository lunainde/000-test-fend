// client/src/pages/StartupsPage/StartupsPage.jsx

import React, { useState, useEffect } from 'react';
import StartupCard from '../../components/Cards/StartupCard';
// import authService from '../../services/auth.service';
import "./StartupsPage.css";
import axios from 'axios';
// import { responsiveProperty } from '@mui/material/styles/cssUtils';

function StartupsPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users`);
        const startups = response.data.filter(user => user.category === "Startup")
        
        setUsers(startups);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="page-header center">
      <h1 className="page-title ">STARTUPS_</h1>
      <div className="posts-list">
        {users.map((user) => (
          <StartupCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default StartupsPage;



// ------------------WORKING VERSION x 1---------
// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import StartupCard from '../../components/Cards/StartupCard';
// import { AuthContext } from '../../context/auth.context';
// import "./StartupsPage.css";

// function StartupsPage() {
//   const { user } = useContext(AuthContext);
//   console.log("USERDATA", user); // Ensure user data is logged

//   return (
//     <div className="posts-page">
//       <h1>All Users Page</h1>
//       {user ? <StartupCard user={user} /> : <p>Loading...</p>}
//     </div>
//   );
// }

// export default StartupsPage;




// //---------------VERSION 1----------------
// import React, { useState, useEffect } from 'react';
// import StartupCard from '../../components/Cards/StartupCard';

// function StartupsPage() {
//   const [user, setUser] = useState(null);
//   return (
//     <div>
//        <h1>GR33NBASE StartUps</h1>
//       {user ? <StartupCard user={user} /> : <p>Loading...</p>}
//     </div>
//   );
// }
// export default StartupsPage;

// ---------------TEST W/ MOCK-USER----------------------------
// import React from "react";
// import StartupCard from "../../components/Cards/StartupCard";
// const mockUser = {
//   name: 'John Doe',
//   imgUrl: 'https://example.com/avatar.jpg',
//   createdAt: new Date(),
//   about: 'This is a sample user',
//   tags: ['building', 'energy']
// };
// function StartupsPage() {
//   return (
//     <div>
//       <h1>GR33NBASE StartUps</h1>
//       {/* <StartupCard /> */}
//       <StartupCard user={mockUser} />
//     </div>
//   );
// }
// export default StartupsPage;

//// -----------------NOTE---------------------
//// → useState Hook: to create a state variable user to store the user data.
//// → useEffect Hook: simulates fetching user data when the component mounts.

// //-------------TEST simulating fetching user data------------
// import React, { useState, useEffect } from 'react';
// import StartupCard from '../../components/Cards/StartupCard';
// function StartupsPage() {
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     // Simulate an API call to fetch user data
//     const fetchUser = async () => {
//       const mockUser = {
//         name: 'Evil Bug',
//         imgUrl: 'https://images.unsplash.com/photo-1613679074451-9ddcc1103cc8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         createdAt: new Date(),
//         about: 'This is a simulating fetching user data page and card fucking working',
//         tags: ['building', 'energy']
//       };
//       setUser(mockUser);
//     };
//     fetchUser();
//   }, []);
//   return (
//     <div>
//       <h1>Startups Page</h1>
//       {user ? <StartupCard user={user} /> : <p>Loading...</p>}
//     </div>
//   );
// }

// export default StartupsPage;

