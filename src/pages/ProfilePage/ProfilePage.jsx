// client/src/pages/ProfilePage/ProfilePage.jsx
import React, { useContext, useState, useEffect } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Checkbox,
  ListItemText,
  OutlinedInput,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import axios from "axios";
import "./ProfilePage.css";
import StartupCard from "../../components/Cards/StartupCard";

function ProfilePage() {
  const { user, logOutUser, refreshUserInLocalStorage, authenticateUser } =
    useContext(AuthContext);
  const [email, setEmail] = useState(user?.email || "");
  const [name, setName] = useState(user?.name || "");
  const [category, setCategory] = useState(user?.category || "");
  const [tags, setTags] = useState(user?.tags || []);
  const [siteUrl, setSiteUrl] = useState(user?.siteUrl || "");
  const [headline, setHeadline] = useState(user?.headline || "");
  const [about, setAbout] = useState(user?.about || "");
  const [country, setCountry] = useState(user?.country || "");
  const [imgUrl, setImgUrl] = useState(user?.imgUrl || "");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setEmail(user.email || "");
      setName(user.name || "");
      setCategory(user.category || "");
      setTags(user.tags || []);
      setSiteUrl(user.siteUrl || "");
      setHeadline(user.headline || "");
      setAbout(user.about || "");
      setCountry(user.country || "");
      setImgUrl(user.imgUrl || "");
    }
  }, [user]);

  const handleEmail = (e) => setEmail(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);
  const handleTags = (e) => {
    const value = e.target.value;
    setTags(typeof value === "string" ? value.split(",") : value);
  };
  const handleSiteUrl = (e) => setSiteUrl(e.target.value);
  const handleHeadline = (e) => setHeadline(e.target.value);
  const handleAbout = (e) => setAbout(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);
  const handleImgUrl = (e) => setImgUrl(e.target.value);

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      email,
      name,
      category,
      tags,
      siteUrl,
      headline,
      about,
      country,
      imgUrl,
    };

    axios
      .put(
        `${process.env.REACT_APP_SERVER_URL}/api/users/update`,
        // `${process.env.REACT_APP_SERVER_URL}/api/users/${user._id}`,
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      )
      .then((response) => {
        const newUser = response.data;
        refreshUserInLocalStorage(newUser);
        authenticateUser(newUser);
        navigate("/profile");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/api/users/delete`, {
        // .delete(`${process.env.REACT_APP_SERVER_URL}/api/users/${user._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then(() => {
        logOutUser();
        navigate("/signup");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="ProfilePage center">
      <div className="left-column">
        <h1>Your Profile</h1>
        <StartupCard key={user._id} user={user} />
      
      
      </div>

      <div className="signup-container">
        <div className="right-column">
          <form onSubmit={handleUpdateSubmit} className="signup-form">
            <TextField
              label="Startup Name or Full Name"
              type="text"
              name="name"
              value={name}
              onChange={handleName}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <FormControl fullWidth margin="normal" variant="outlined">
              <InputLabel>Category</InputLabel>
              <Select
                value={category}
                onChange={handleCategory}
                label="Category"
                name="category"
              >
                <MenuItem value="investor">Investor</MenuItem>
                <MenuItem value="startup">Startup</MenuItem>
                <MenuItem value="expert">Expert</MenuItem>
                <MenuItem value="organization">Organization</MenuItem>
                <MenuItem value="journalist">Journalist</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal" variant="outlined">
              <InputLabel>Tags</InputLabel>
              <Select
                multiple
                value={tags}
                onChange={handleTags}
                name="tags"
                input={<OutlinedInput label="Tags" />}
                renderValue={(selected) => selected.join(" | ")}
              >
                {[
                  "building",
                  "carbon",
                  "energy",
                  "food",
                  "greentech",
                  "investment",
                  "nature-based",
                  "refi",
                  "transport",
                  "reform",
                  "other",
                ].map((tag) => (
                  <MenuItem key={tag} value={tag}>
                    <Checkbox checked={tags.indexOf(tag) > -1} />
                    <ListItemText primary={tag} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Website"
              type="url"
              name="siteUrl"
              value={siteUrl}
              onChange={handleSiteUrl}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Tagline"
              type="text"
              name="headline"
              value={headline}
              onChange={handleHeadline}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="About"
              type="text"
              name="about"
              value={about}
              onChange={handleAbout}
              fullWidth
              margin="normal"
              variant="outlined"
              inputProps={{ maxLength: 140 }}
            />
            <TextField
              label="Country"
              type="text"
              name="country"
              value={country}
              onChange={handleCountry}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Profile Image"
              type="url"
              name="imgUrl"
              value={imgUrl}
              onChange={handleImgUrl}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              UPDATE PROFILE
            </Button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="crud-buttons">
              <IconButton onClick={handleDelete}>
                <DeleteIcon className="crud-btn" />
              </IconButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

//client/src/pages/ProfilePage/ProfilePage.jsx
// import React, { useContext } from 'react';
// import { AuthContext } from '../../context/auth.context';
// import UserCard from '../../components/Cards/UserCard';
// import "./ProfilePage.css";
// function ProfilePage() {
//   const { user } = useContext(AuthContext);
//   return (
//     <div>
//       <h1>WHO ARE YOU?</h1>
//       <UserCard user={user} />
//     </div>
//   );
// }
// export default ProfilePage;
