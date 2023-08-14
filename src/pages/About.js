import React from 'react'
import Layout from '../components/Layout/Layout'
import {Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box
      sx ={{
        my: 15,
        textAlign: "center",
        "& h2": {
          fontWeight: "bold",
        },
        "& p": {
          textAlign: "justify",
      },
      ':media (max-width:600px)': {
        mt : 0,
        "& h4 ": {
          fontSize: "1.5rem", 
        }
      }
     }}
     >
      <Typography variant="h4">Opening Hours</Typography>
        <h3>Monday To Sunday & Bank Holidays</h3>
        <p>   12 noon - 2.00pm & 5.00pm - 10.30pm Close On Tuesday
        </p>
       
        <h3>Enjoy an authentic but healthy Chinese meal at Blossom and Windsor with food that is 
          low in sodium and free from artifical flavouring </h3>
       
      </Box>
    </Layout>
  )
}

export default About
