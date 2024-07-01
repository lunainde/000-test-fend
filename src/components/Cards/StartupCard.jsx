//client/src/components/Cards/StartupCard.jsx

import React, { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Chip, Divider, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CardFavButtons from '../Cards/CardFavButtons';
import "./CardStyle.css";

function StartupCard({ user }) {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    return <p>No user data</p>;
  }

  const formattedDate = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString()
    : "Date not available";
  const tags = user.tags && user.tags.length > 0 ? user.tags : ["No tags available"];
  const about = user.about || "No description available";

  const handleCardClick = (event) => {
    event.preventDefault();
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      window.open(user.siteUrl, "_blank");
    }
  };

  return (
    <Card sx={{ minWidth: 345, maxWidth: 345 }}>
      <CardMedia component="img" alt={user.name} height="200" image={user.imgUrl} />
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Link
            className="card-link"
            onClick={handleCardClick}
            component="button"
            underline="none"
          >
            <Typography>{user.name}</Typography>
          </Link>
          <Typography variant="body2" color="text.secondary">
            {formattedDate}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" textAlign="left">
          {user.category}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          align="left"
          sx={{ minHeight: "160px" }}
          className="about-height"
        >
          {about}
        </Typography>

        <Box mt={2}>
          {tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              sx={{ backgroundColor: "#f5f5f5", marginRight: 1 }}
            />
          ))}
        </Box>
        
      </CardContent>
      <Divider />
      <CardFavButtons
        startupId={user._id}
        initialShared={false}
        siteUrl={user.siteUrl}
      />
    </Card>
  );
}

export default StartupCard;








// ----------------------v2----------------------------
// import React, { useContext, useState } from "react";
// import { AuthContext } from "../../context/auth.context";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { Box, Chip, Divider, Link } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import CardFavButtons from '../Cards/CardFavButtons';
// import "./CardStyle.css";

// function StartupCard({ user, onRemoveFavorite }) {
//   const { isLoggedIn } = useContext(AuthContext);
//   const navigate = useNavigate();

//   if (!user) {
//     return <p>No user data</p>;
//   }

//   const formattedDate = user.createdAt
//     ? new Date(user.createdAt).toLocaleDateString()
//     : "Date not available";
//   const tags = user.tags && user.tags.length > 0 ? user.tags : ["No tags available"];
//   const about = user.about || "No description available";

//   const handleCardClick = (event) => {
//     event.preventDefault();
//     if (!isLoggedIn) {
//       navigate("/login");
//     } else {
//       window.open(user.siteUrl, "_blank");
//     }
//   };

//   // const handleRemoveFavorite = () => {
//   //   if (onRemoveFavorite) {
//   //     onRemoveFavorite(user._id); // CALL THE PROP FUNCTION TO REMOVE FAVORITE
//   //   }
//   // };

//   return (
//     <Card sx={{ minWidth: 345, maxWidth: 345 }}>
//       <CardMedia component="img" alt={user.name} height="200" image={user.imgUrl} />
//       <CardContent>
//         <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
//           <Link
//             className="card-link"
//             onClick={handleCardClick}
//             component="button"
//             underline="none"
//           >
//             <Typography>{user.name}</Typography>
//           </Link>
//           <Typography variant="body2" color="text.secondary">
//             {formattedDate}
//           </Typography>
//         </Box>
//         <Typography variant="body2" color="text.secondary" textAlign="left">
//           {user.category}
//         </Typography>
//         <Divider sx={{ my: 2 }} />
//         <Typography
//           gutterBottom
//           variant="h6"
//           component="div"
//           align="left"
//           sx={{ minHeight: "160px" }}
//           className="about-height"
//         >
//           {about}
//         </Typography>
//         <Box mt={2}>
//           {tags.map((tag, index) => (
//             <Chip
//               key={index}
//               label={tag}
//               sx={{ backgroundColor: "#f5f5f5", marginRight: 1 }}
//             />
//           ))}
//         </Box>
//       </CardContent>
//       <Divider />
//       <CardFavButtons
//         startupId={user._id}
//         initialFavorited={user.isFavorited} // Pass the actual fav state
//         initialShared={false}    // fetch the actual initial state
//         siteUrl={user.siteUrl}
//       />
//     </Card>
//   );
// }

// export default StartupCard;
























// ---------------v1---------------
// import React, { useContext, useState } from "react";
// import { AuthContext } from "../../context/auth.context";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { Box, Chip, Divider, Link } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import CardFavButtons from '../Cards/CardFavButtons';
// import "./CardStyle.css";

// function StartupCard({ user }) {
//   const { isLoggedIn } = useContext(AuthContext);
//   const navigate = useNavigate();

//   if (!user) {
//     return <p>No user data</p>;
//   }

//   const formattedDate = user.createdAt
//     ? new Date(user.createdAt).toLocaleDateString()
//     : "Date not available";
//   const tags = user.tags && user.tags.length > 0 ? user.tags : ["No tags available"];
//   const about = user.about || "No description available";

//   const handleCardClick = (event) => {
//     event.preventDefault();
//     if (!isLoggedIn) {
//       navigate("/login");
//     } else {
//       window.open(user.siteUrl, "_blank");
//     }
//   };

//   return (
//     <Card sx={{ minWidth: 345, maxWidth: 345 }}>
//       <CardMedia component="img" alt={user.name} height="200" image={user.imgUrl} />
//       <CardContent>
//         <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
//           <Link
//             className="card-link"
//             onClick={handleCardClick}
//             component="button"
//             underline="none"
//           >
//             <Typography>{user.name}</Typography>
//           </Link>
//           <Typography variant="body2" color="text.secondary">
//             {formattedDate}
//           </Typography>
//         </Box>
//         <Typography variant="body2" color="text.secondary" textAlign="left">
//           {user.category}
//         </Typography>
//         <Divider sx={{ my: 2 }} />
//         <Typography
//           gutterBottom
//           variant="h6"
//           component="div"
//           align="left"
//           sx={{ minHeight: "160px" }}
//           className="about-height"
//         >
//           {about}
//         </Typography>
//         <Box mt={2}>
//           {tags.map((tag, index) => (
//             <Chip
//               key={index}
//               label={tag}
//               sx={{ backgroundColor: "#f5f5f5", marginRight: 1 }}
//             />
//           ))}
//         </Box>
//       </CardContent>
//       <Divider />
//       <CardFavButtons
//         startupId={user._id}
//         initialFavorited={false} // You might want to fetch the actual initial state
//         initialShared={false}    // You might want to fetch the actual initial state
//         siteUrl={user.siteUrl}
//       />
//     </Card>
//   );
// }

// export default StartupCard;
