// client/src/components/ShareIconMenu.jsx
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const ShareIconMenu = ({ url, title }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton 
      onClick={handleClick}
        sx={{
          color: open ? "primary.main" : "default",
          backgroundColor: open ? "rgba(25, 118, 210, 0.1)" : "transparent",
        }}
      >
        <ShareOutlinedIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            border: '1px solid #222222',
            mt: 1.5,
            display: 'flex',
            flexDirection: 'row',
            '& .MuiIconButton-root': {
              ml: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <IconButton href={shareUrls.facebook} target="_blank" aria-label="Share on Facebook">
            <FacebookIcon />
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <IconButton href={shareUrls.twitter} target="_blank" aria-label="Share on Twitter">
            <TwitterIcon />
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <IconButton href={shareUrls.linkedin} target="_blank" aria-label="Share on LinkedIn">
            <LinkedInIcon />
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <IconButton href={shareUrls.email} target="_blank" aria-label="Share via Email">
            <EmailIcon />
          </IconButton>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ShareIconMenu;
