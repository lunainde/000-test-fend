// client/src/pages/BookmarksPage/BookmarksPage.jsx

import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import PostCard from "../../components/Cards/PostCard";
import axios from "axios";
import { Typography, CircularProgress } from "@mui/material";
import "../Styles/CardPagesStyle.css";

const BookmarksPage = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookmarks = async () => {
      if (isLoggedIn) {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/api/user/bookmarks`,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("authToken"),
              },
            }
          );
          setBookmarks(response.data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchBookmarks();
  }, [isLoggedIn]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!isLoggedIn)
    return <Typography>Please log in to view your bookmarks.</Typography>;

  return (
    <div className="page-container">
      <div className="page-header center">
        <h1 className="page-title">SELECTED POSTS_</h1>
        <div className="posts-list">
          {bookmarks.length > 0 ? (
            bookmarks.map((post) => <PostCard key={post._id} post={post} />)
          ) : (
            <Typography>No bookmarks found.</Typography>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookmarksPage;
