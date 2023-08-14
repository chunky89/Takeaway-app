import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import PaymentsIcon from '@mui/icons-material/Payments';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Typography } from '@mui/material';
const Footer = () => {
  return (
   <>
   <Box 
    sx={{ textAlign: 'center', bgcolor: '#FF00FF', color: "white", p:3 }}
    >
    <Box sx={{ 
        my: 3, 
        "& svg":  {
        fontSize:"50px",
        cursor:"pointer",
        mr: 2,
      },
      "& svg:hover":{
        color: 'red',
        transform: 'translateX(5px)',
        transition: 'all 400ms',
      },
        }}
      >
      {/* icons */}
      <InstagramIcon />
      <PaymentsIcon />
      <GitHubIcon />
      <YouTubeIcon />
    </Box>
    <Typography 
      variant="h5"
      sx={{  
        "@media( max-width:600px)": {
          fontSize: "1rem",
        },
      }}
    >
      All Rights Reserved &copy; ERC Computers
      </Typography>
   </Box>
   </>
  )
}

export default Footer
