# MERN Startup and Posts Application
LICENSE
Distributed under the GR33NBASE License. 
CONTACT - @gr33nbase - hello@gr33nbase.io
Project Link: 
https://github.com/lunainde/041-final-fend

## Table of Contents
1. License
2. Contact
3. Project Overview
4. Features
5. Tech Stack
6. Getting Started
7. Installation
8. Folder Structure

# Project Overview
The MERN Startup and Posts Application is a full-stack web application built with the MERN (MongoDB, Express, React, Node.js) stack. It allows users to sign up, log in, and interact with posts and startup profiles. Users can like, bookmark, and share posts and favorite startup profiles. The application features user authentication and authorization using JWT tokens.

# Features
- User Authentication (Sign Up, Log In, Log Out)
- JWT Token-based Authentication
- Create, Read, Update, and Delete (CRUD) operations for Posts and Startups
- Like and Bookmark Posts
- Favorite Startups
- Responsive Design
- Error Handling and Validation

# Tech Stack
- Frontend: React, Axios, Material-UI
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT
- Cloud Storage: Cloudinary (for image uploads)
- Text Editor: react-quill and quill

# Getting Started
To get a local copy up and running, follow these simple steps.

# Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm

# Install client dependencies
npm install [front/back]

# Start the server
cd server
npm run dev

# Start the client
cd ../client
npm start

# Folder Structure
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ...
        ├── pages/ 
│   │   │   ├── ...
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   └── ...
│
├── server/
│   ├── controllers/
│   │   └── ...
│   ├── db/
│   ├── models/
│   │   └── ...
│   ├── routes/
│   │   └── posts.js
│   ├── server.js
│   └── ...
└── ...