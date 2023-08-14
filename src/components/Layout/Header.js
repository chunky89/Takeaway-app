import  {useState} from 'react'
import { 
  AppBar, 
  Box, 
  Divider, 
  Drawer, 
  IconButton, 
  Toolbar, 
  Typography } from '@mui/material';
import Logo from '../../images/logo.svg';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from 'react-router-dom';
import '../../styles/HeaderStyles.css';
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  //handle menu
  const handledrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }
  //menu drawer
  const drawer = (
    <Box onClick={handledrawerToggle} sx={{textAlign: 'center'}}>
        <Typography 
            color={'white'} 
            variant="h6" 
            component="div"
            sx={{ flexGrow: 1 }}
            >
          <img src={Logo} alt="logo" height={'70'} width="250"/>
            </Typography>
            <Divider />
              <ul className='mobile-nav'>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/about'}>About</Link>
                </li>
                <li>
                  <Link to={'/menu'}>Menu</Link>
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                </li>
              </ul>
             
    </Box>
  )
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "fuchsia " }}>
          <Toolbar>
          <IconButton  
            color="inherit" 
            aria-label="open drawer" 
            edge="start" 
            sx={{
              mr: 2, 
              display: { sm: "none"},
            }}
            onClick={handledrawerToggle}
          >
          <MenuBookIcon />
          </IconButton>
          <Typography 
            color={'white'} 
            variant="h6" 
            component="div"
            sx={{ flexGrow: 1 }}>

          <FastfoodIcon />
            Welcome To Blossom
            </Typography>
            <Box sx={{ display:{xs:'none', sm:'block' } }}>
              <ul className='nav-menu'>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/about'}>About</Link>
                </li>
                <li>
                  <Link to={'/menu'}>Menu</Link>
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component='nav'>
            <Drawer variant='temporary' open={mobileOpen} 
            onClose={handledrawerToggle}
            sx={{display:{xs: 'block', sm: 'none'}, 
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "200px",
            },
          }}
            >
              {drawer}
            </Drawer>
        </Box>
        <Box>

           <Toolbar /> 
        </Box>
      </Box>
    </>
  )
}

export default Header
