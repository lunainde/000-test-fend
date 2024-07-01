//client/src/components/Cards/CardFavButtons.jsx

//client/src/components/Cards/CardFavButtons.jsx

import React, { useContext, useState, useEffect } from 'react';
import { IconButton, CardActions } from '@mui/material';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { AuthContext } from '../../context/auth.context';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/auth.service';

const CardFavButtons = ({ startupId, initialShared, siteUrl }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [favorited, setFavorited] = useState(false); // INITIALIZE FAVORITED AS FALSE
  const [shared, setShared] = useState(initialShared);

  // FETCH FAVORITE STATUS WHEN COMPONENT MOUNTS
  useEffect(() => {
    const fetchFavoriteStatus = async () => {
      if (isLoggedIn) {
        try {
          const response = await authService.getFavoriteStartups(); // FETCH ALL FAVORITE STARTUPS
          const favoriteIds = response.data.map(fav => fav._id);
          setFavorited(favoriteIds.includes(startupId)); // SET FAVORITED STATE BASED ON RESPONSE
        } catch (error) {
          console.error('Error fetching favorite status:', error);
        }
      }
    };

    fetchFavoriteStatus();
  }, [isLoggedIn, startupId]);

  const handleFavoriteToggle = async () => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    try {
      if (favorited) {
        await authService.removeFavoriteStartup(startupId);
        setFavorited(false); // SET FAVORITED TO FALSE
      } else {
        await authService.addFavoriteStartup(startupId);
        setFavorited(true); // SET FAVORITED TO TRUE
      }
    } catch (error) {
      console.error('Error favoriting startup:', error);
    }
  };

  const handleShareClick = () => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    setShared(!shared);
    // Add logic here to handle the share action (e.g., API call or social media sharing)
  };

  const handleSiteClick = () => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    window.open(siteUrl, '_blank');
  };

  return (
    <CardActions
      className="bottom-fix"
      sx={{ justifyContent: 'space-around', marginTop: 'auto' }}
    >
      <IconButton onClick={handleSiteClick}>
        <WorkOutlineOutlinedIcon />
      </IconButton>

      <IconButton
        onClick={handleFavoriteToggle}
        sx={{
          color: favorited ? 'primary.main' : 'default',
          backgroundColor: favorited ? 'rgba(25, 118, 210, 0.1)' : 'transparent',
        }}
      >
        <StarOutlineIcon />
      </IconButton>

      <IconButton
        onClick={handleShareClick}
        sx={{
          color: shared ? 'primary.main' : 'default',
          backgroundColor: shared ? 'rgba(25, 118, 210, 0.1)' : 'transparent',
        }}
      >
        <ShareOutlinedIcon />
      </IconButton>
    </CardActions>
  );
};

export default CardFavButtons;




















// ---------------------v2----------------------------
// import React, { useContext, useState, useEffect } from 'react';
// import { IconButton, CardActions } from '@mui/material';
// import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
// import StarOutlineIcon from '@mui/icons-material/StarOutline';
// import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
// import { AuthContext } from '../../context/auth.context';
// import { useNavigate } from 'react-router-dom';
// import authService from '../../services/auth.service';

// const CardFavButtons = ({ startupId, initialFavorited, initialShared, siteUrl }) => {
//   const { isLoggedIn } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [favorited, setFavorited] = useState(initialFavorited);
//   const [shared, setShared] = useState(initialShared);

//   // UPDATE FAVORITED STATE WHEN initialFavorited PROP CHANGES
//   useEffect(() => {
//     setFavorited(initialFavorited);
//   }, [initialFavorited]);

//   const handleFavoriteToggle = async () => {
//     if (!isLoggedIn) {
//       navigate('/login');
//       return;
//     }

//     try {
//       if (favorited) {
//         await authService.removeFavoriteStartup(startupId);
//         setFavorited(false); // set fav to false
//       } else {
//         await authService.addFavoriteStartup(startupId);
//         setFavorited(true); // set fav to true
//       }
//     } catch (error) {
//       console.error('Error favoriting startup:', error);
//     }
//   };

//   const handleShareClick = () => {
//     if (!isLoggedIn) {
//       navigate('/login');
//       return;
//     }

//     setShared(!shared);
//     // Add logic here to handle the share action (e.g., API call or social media sharing)
//   };

//   const handleSiteClick = () => {
//     if (!isLoggedIn) {
//       navigate('/login');
//       return;
//     }

//     window.open(siteUrl, '_blank');
//   };

//   return (
//     <CardActions
//       className="bottom-fix"
//       sx={{ justifyContent: 'space-around', marginTop: 'auto' }}
//     >
//       <IconButton onClick={handleSiteClick}>
//         <WorkOutlineOutlinedIcon />
//       </IconButton>

//       <IconButton
//         onClick={handleFavoriteToggle}
//         sx={{
//           color: favorited ? 'primary.main' : 'default',
//           backgroundColor: favorited ? 'rgba(25, 118, 210, 0.1)' : 'transparent',
//         }}
//       >
//         <StarOutlineIcon />
//       </IconButton>

//       <IconButton
//         onClick={handleShareClick}
//         sx={{
//           color: shared ? 'primary.main' : 'default',
//           backgroundColor: shared ? 'rgba(25, 118, 210, 0.1)' : 'transparent',
//         }}
//       >
//         <ShareOutlinedIcon />
//       </IconButton>
//     </CardActions>
//   );
// };

// export default CardFavButtons;
















// -----------v1-----------------------------------
// import React, { useContext, useState } from 'react';
// import { IconButton, CardActions } from '@mui/material';
// import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
// import StarOutlineIcon from '@mui/icons-material/StarOutline';
// import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
// import { AuthContext } from '../../context/auth.context';
// import { useNavigate } from 'react-router-dom';
// import authService from '../../services/auth.service';

// const CardFavButtons = ({ startupId, initialFavorited, initialShared, siteUrl }) => {
//   const { isLoggedIn } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [favorited, setFavorited] = useState(initialFavorited);
//   const [shared, setShared] = useState(initialShared);

//   const handleFavoriteToggle = async () => {
//     if (!isLoggedIn) {
//       navigate('/login');
//       return;
//     }

//     try {
//       if (favorited) {
//         // Unfavorite the startup
//         await authService.removeFavoriteStartup(startupId);
//       } else {
//         // Favorite the startup
//         await authService.addFavoriteStartup(startupId);
//       }
//       setFavorited(!favorited);
//     } catch (error) {
//       console.error('Error favoriting startup:', error);
//     }
//   };

//   const handleShareClick = () => {
//     if (!isLoggedIn) {
//       navigate('/login');
//       return;
//     }

//     setShared(!shared);
//     //logic to handle share action (e.g., API call or social media sharing)
//   };

//   const handleSiteClick = () => {
//     if (!isLoggedIn) {
//       navigate('/login');
//       return;
//     }

//     window.open(siteUrl, '_blank');
//   };

//   return (
//     <CardActions
//       className="bottom-fix"
//       sx={{ justifyContent: 'space-around', marginTop: 'auto' }}
//     >
//       <IconButton onClick={handleSiteClick}>
//         <WorkOutlineOutlinedIcon />
//       </IconButton>

//       <IconButton
//         onClick={handleFavoriteToggle}
//         sx={{
//           color: favorited ? 'primary.main' : 'default',
//           backgroundColor: favorited ? 'rgba(25, 118, 210, 0.1)' : 'transparent',
//         }}
//       >
//         <StarOutlineIcon />
//       </IconButton>

//       <IconButton
//         onClick={handleShareClick}
//         sx={{
//           color: shared ? 'primary.main' : 'default',
//           backgroundColor: shared ? 'rgba(25, 118, 210, 0.1)' : 'transparent',
//         }}
//       >
//         <ShareOutlinedIcon />
//       </IconButton>
//     </CardActions>
//   );
// };

// export default CardFavButtons;
