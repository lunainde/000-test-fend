//client/src/pages/SelectionPage/FavoritesPage.jsx

import React, { useState, useEffect, useContext } from 'react';
import StartupCard from '../../components/Cards/StartupCard';
// import "../Styles/FavoritesPage.css";
import "../Styles/CardPagesStyle.css";
import axios from 'axios';
import { AuthContext } from '../../context/auth.context';
import { useNavigate } from 'react-router-dom';

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        if (!isLoggedIn) {
          navigate("/login");
          return;
        }

        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users/favorites`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`
          }
        });

        setFavorites(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [isLoggedIn, navigate]);

  const handleRemoveFavorite = (startupId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite._id !== startupId)
    );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="page-header center">
      <h1 className="page-title">SELECTED STARTUPS_</h1>
      <div className="posts-list">
        {favorites.map((user) => (
          <StartupCard
            key={user._id}
            user={{ ...user, isFavorited: true }} // PASS ISFAVORITED AS TRUE
            onRemoveFavorite={handleRemoveFavorite} // ADD PROP TO HANDLE REMOVE
          />
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;























// --------v1-----------------
// import React, { useState, useEffect, useContext } from 'react';
// import StartupCard from '../../components/Cards/StartupCard';
// // import "./FavoritesPage.css";
// import "../Styles/CardPagesStyle.css";
// import axios from 'axios';
// import { AuthContext } from '../../context/auth.context';
// import { useNavigate } from 'react-router-dom';

// function FavoritesPage() {
//   const [favorites, setFavorites] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { isLoggedIn } = useContext(AuthContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchFavorites = async () => {
//       try {
//         if (!isLoggedIn) {
//           navigate("/login");
//           return;
//         }

//         const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users/favorites`, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('authToken')}`
//           }
//         });

//         setFavorites(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchFavorites();
//   }, [isLoggedIn, navigate]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="page-header center">
//       <h1 className="page-title">SELECTED STARTUPS_</h1>
//       <div className="posts-list">
//         {favorites.map((user) => (
//           <StartupCard key={user._id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FavoritesPage;
