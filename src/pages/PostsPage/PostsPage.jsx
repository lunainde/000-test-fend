//client/src/pages/PostsPage/PostsPage.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "../../components/Cards/PostCard";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import "./PostsPage.css";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/api/posts`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("authToken"),
            },
          }
        );
        setPosts(response.data);
        setTags([...new Set(response.data.flatMap(post => post.tags))]); // Extract unique tags
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
     <div className="page-header center">
      <h1 className="page-title">INSIGHTS_</h1>
      <FormControl variant="outlined" margin="normal" sx={{ width: '200px' }}>
        <InputLabel id="tag-select-label">FILTER</InputLabel>
        <Select
          labelId="tag-select-label"
          value={selectedTag}
          onChange={handleTagChange}
          label="Filter by Tag"
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {tags.map((tag) => (
            <MenuItem key={tag} value={tag}>
              {tag}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>  
      <div className="posts-list">
        {filteredPosts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;

// -------------V2------------

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import PostCard from "../../components/Cards/PostCard";
// import "./PostsPage.css";

// const PostsPage = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_SERVER_URL}/api/posts`,
//           {
//             headers: {
//               Authorization: "Bearer " + localStorage.getItem("authToken"),
//             },
//           }
//         );
//         setPosts(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="posts-page">
//       <h1>INSIGHTS</h1>
//       <div className="posts-list">
//         {posts.map((post) => (
//           <PostCard key={post._id} post={post} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PostsPage;

/*----------------V1------------------------
 <div key={post._id} className="post-item">
    <h2>{post.title}</h2>
    <img src={post.imgUrl} alt={post.title} />
    <p>{post.content}</p>
    <p>
      <strong>Author:</strong> {post.author.name}
    </p>
  </div>
*/
