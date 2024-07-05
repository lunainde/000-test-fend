//client/src/pages/HomePage.jsx

import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import PostCard from "../../components/Cards/PostCard";
import StartupCard from "../../components/Cards/StartupCard";
import "./HomePage.css";
import ProtectedWrapper from "../../components/Links/ProtectedWrapper";

function HomePage() {
  const [recentPosts, setRecentPosts] = useState([]);
  const [recentStartups, setRecentStartups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/api/posts/recent`
        );
        setRecentPosts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchRecentPosts();
  }, []);

  useEffect(() => {
    const fetchRecentStartups = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/api/users/startups`
        );
        console.warn(response.data);
        setRecentStartups(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchRecentStartups();
  }, []);

  const playSound = () => {
    const audio = new Audio("/tweet.wav");
    audio.play();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="left title-container">
        <h1 className="page-title">
          From the red carpet of fame to the green carpet of change
          <button onClick={playSound} className="bird-button">
            <img src="bird.png" alt="Bird" className="bird-image" />
          </button>
        </h1>
        <div className="inline-text">
          <h1 className="typing-animation">LET IT TWEET HERE . . .</h1>
          <img
            src="bird2.png"
            alt="Bird"
            style={{
              marginLeft: "10px",
              verticalAlign: "middle",
              width: "50px",
              height: "50px",
            }}
          />
        </div>
      </div>

      <div className="divider" />

      <div className="left title-container">
        <h2>Join the community of climate challenges leaders.</h2>
        <h4>
          Powered by{" "}
          <a
            href="https://www.gr33nbase.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            @GR33NBASE
          </a>
          {" | "}
          <a
            href="https://www.dionamite.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            DIONAMITE
          </a>
          {" | "}
          <a
            href="https://www.ironhack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            IRONHACK
          </a>
          {" | "}
          <a
            href="https://www.01011000.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            X-iO
          </a>
        </h4>
      </div>

      <div className="divider" />
      <div className="left title-container">
        <div className="inline-text">
          <ProtectedWrapper
            className="subtitle"
            toLoggedIn="/startups"
            toLoggedOut="/login"
            element="h2"
          >
            STARTUPS_
          </ProtectedWrapper>
          <h2 className="subtitle-text">
            {" "}
            in the making for a better tomorrow
          </h2>
        </div>
        <p>. . . and great opportunities for investments that matter</p>
        <div className="posts-list">
          {recentStartups.map((user) => (
            <StartupCard key={user._id} user={user} />
          ))}
        </div>
      </div>

      <div className="divider" style={{ marginTop: "48px" }} />

      <div className="left title-container">
        <div className="inline-text">
          <ProtectedWrapper
            className="subtitle"
            toLoggedIn="/posts"
            toLoggedOut="/login"
            element="h2"
          >
            INSIGHTS_
          </ProtectedWrapper>
          <h2 className="subtitle-text">
            stay in the loop for good decisions making
          </h2>
        </div>
        <p>. . . and take the opportunity to share knowledge</p>
        <div className="posts-list">
          {recentPosts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default HomePage;

// ----------------------v1-v2------------------------
// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../context/auth.context';
// import PostCard from "../../components/Cards/PostCard";
// import StartupCard from "../../components/Cards/StartupCard";
// import "./HomePage.css";
// import ProtectedWrapper from '../../components/Links/ProtectedWrapper';

// function HomePage() {
//   const [recentPosts, setRecentPosts] = useState([]);
//   const [recentStartups, setRecentStartups] = useState([]);
//   const [favoriteStartups, setFavoriteStartups] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { isLoggedIn } = useContext(AuthContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchRecentPosts = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_SERVER_URL}/api/posts/recent`
//         );
//         setRecentPosts(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };
//     fetchRecentPosts();
//   }, []);

//   useEffect(() => {
//     const fetchRecentStartups = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_SERVER_URL}/api/users/startups`
//         );
//         setRecentStartups(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.messege);
//         setLoading(false);
//       }
//     };
//     fetchRecentStartups();
//   }, []);

//    // FETCH FAVORITE STARTUPS FOR LOGGED-IN USER
//    useEffect(() => {
//     const fetchFavoriteStartups = async () => {
//       if (isLoggedIn) {
//         try {
//           const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users/favorites`, {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem('authToken')}`
//             }
//           });
//           setFavoriteStartups(response.data.map(fav => fav._id)); // STORE ONLY IDs OF FAVORITE STARTUPS
//         } catch (error) {
//           setError(error.message);
//         }
//       }
//     };

//     fetchFavoriteStartups();
//   }, [isLoggedIn]);

//   const playSound = () => {
//     const audio = new Audio('/tweet.wav');
//     audio.play();
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <div className= "left title-container">
//         <h1 className="title">
//           From the red carpet of fame to the green carpet of change
//           <button onClick={playSound} className="bird-button">
//             <img src="bird.png" alt="Bird" className="bird-image" />
//           </button>
//         </h1>
//         <div className="inline-text">
//           <h1 className="typing-animation">LET IT TWEET HERE . . .</h1>
//         <img src="bird2.png" alt="Bird" style={{ marginLeft: '10px', verticalAlign: 'middle', width: '50px', height: '50px' }} />
//         </div>
//       </div>

//       <div className="divider" />

//       <div className="left title-container">
//         <h2>Join the community of climate challenges leaders.</h2>
//         <h4>
//           Powered by
//           {" "}
//           <a href="https://www.gr33nbase.io" target="_blank" rel="noopener noreferrer">@GR33NBASE</a>
//           {" | "}
//           <a href="https://www.dionamite.com" target="_blank" rel="noopener noreferrer">DIONAMITE</a>
//           {" | "}
//           <a href="https://www.ironhack.com" target="_blank" rel="noopener noreferrer">IRONHACK</a>
//           {" | "}
//           <a href="https://www.01011000.io" target="_blank" rel="noopener noreferrer">X-iO</a>
//         </h4>
//       </div>

//       <div className="divider" />
//       <div className="left title-container">
//         <div className="inline-text">
//         <ProtectedWrapper
//         className="subtitle"
//         toLoggedIn="/startups"
//         toLoggedOut="/login"
//         element="h2" >
//         STARTUPS_
//         </ProtectedWrapper>
//           <h2> in the making for a better tomorrow</h2>
//         </div>
//         <p>. . . and great opportunities for investments that matter</p>
//         <div className="posts-list">
//           {recentStartups.map((user) => (
//             <StartupCard key={user._id} user={{ ...user, isFavorited: favoriteStartups.includes(user._id) }}/>
//           ))}
//         </div>
//       </div>

//       <div className="divider" style={{ marginTop: '48px' }}  />

//       <div className="left title-container">
//         <div className="inline-text">
//         <ProtectedWrapper
//         className="subtitle"
//         toLoggedIn="/posts"
//         toLoggedOut="/login"
//         element="h2" >
//         INSIGHTS_
//         </ProtectedWrapper>
//           <h2>stay in the loop for good decisions making</h2>
//         </div>
//         <p>. . . and take the opportunity to share knowledge</p>
//         <div className="posts-list">
//           {recentPosts.map((post) => (
//             <PostCard key={post._id} post={post} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// export default HomePage;
