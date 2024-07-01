// client/src/pages/StartupsPage/StartupsPage.jsx

// client/src/pages/StartupsPage/StartupsPage.jsx

import React, { useState, useEffect, useContext } from 'react';
import StartupCard from '../../components/Cards/StartupCard';
import "../Styles/CardPagesStyle.css";
import axios from 'axios';
import { AuthContext } from '../../context/auth.context';

function StartupsPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isLoggedIn } = useContext(AuthContext);

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




























// -----------------v1-v2----------------------
// import React, { useState, useEffect } from 'react';
// import StartupCard from '../../components/Cards/StartupCard';
// // import authService from '../../services/auth.service';
// // import "./StartupsPage.css";
// import "../Styles/CardPagesStyle.css"
// import axios from 'axios';
// // import { responsiveProperty } from '@mui/material/styles/cssUtils';

// function StartupsPage() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users`);
//         const startups = response.data.filter(user => user.category === "Startup")
        
//         setUsers(startups);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="page-header center">
//       <h1 className="page-title ">STARTUPS_</h1>
//       <div className="posts-list">
//         {users.map((user) => (
//           <StartupCard key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default StartupsPage;




