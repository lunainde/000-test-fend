//client/src/pages/SignupPage/SignupPage.jsx

import React, { useState } from "react";
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
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import "./SignupPage.css";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [siteUrl, setSiteUrl] = useState("");
  const [headline, setHeadline] = useState("");
  const [about, setAbout] = useState("");
  const [country, setCountry] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
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

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      email,
      password,
      name,
      category,
      tags,
      siteUrl,
      headline,
      about,
      country,
      imgUrl,
    };

    authService
      .signup(requestBody)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="SignupPage center">
      <div className="left-column">
        <h1>Happy to have you here!</h1>
        <p>Let's join forces for a better tomorrow.</p>
      </div>
     
      <div className="signup-container">
        <div className="right-column">
          <form onSubmit={handleSignupSubmit} className="signup-form">
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
                renderValue={(selected) => selected.join(", ")}
              >
                {[
                  "Building",
                  "Carbon",
                  "Energy",
                  "Food",
                  "Greentech",
                  "Investment",
                  "Nature-Based",
                  "ReFi",
                  "Transport",
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
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
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
              SIGN UP
            </Button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <p>Already have an account?</p>
            <Link to="/login">LOGIN</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
