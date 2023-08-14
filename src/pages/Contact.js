import React from 'react'
import Layout from '../components/Layout/Layout';
import CallIcon from '@mui/icons-material/Call';
import {
  Box, 
  Paper, 
  Table, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  TableBody, 
  Typography, } from '@mui/material';

const Contact = () => {
  return (
    <Layout>
     <Box sx={{ my:10, ml: 10, "& h4" : { fontWeight: "bold", mb: 2 } }}>
      <Typography variant='h4'>Telephone Orders Welcome</Typography>
      <p>
        Address: 390 DeadWorth Road, Windsor, SL4 4JR
      </p>
     </Box>
     <Box 
      sx={{
        m: 3,
        width: "600px",
        ml: 10,
        "@media (max-width:600px)": {
          width: "300px",
        },
      }}
     >
    <TableContainer component={Paper}> 
    <Table aria-label="contact table">
      <TableHead>
        <TableRow>
          <TableCell
           sx={{ bgcolor: "black", color: "white" }}
           align="center"
          >
            Contact Details
            </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: 'green', pt: 1 }} />01753 833 888 (contact number)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact