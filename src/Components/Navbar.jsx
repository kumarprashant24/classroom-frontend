import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function Navbar({user}) {
//   const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const logout = () => {
    window.open("http://localhost:5000/api/auth/logout", "_self");
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      {`Hey, ${user.firstname}`}

      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem  disablePadding onClick={logout}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={'Logout'} />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

//   const container = window !== undefined ? () => window().document.body : undefined;

  return (
   <>
     <Box sx={{ display: 'flex' }} className="navbar-box">
     <CssBaseline />
     <AppBar component={"div"} style={{position:"initial"}} >
       <Toolbar>
         <IconButton
           color="inherit"
           aria-label="open drawer"
           edge="start"
           onClick={handleDrawerToggle}
           sx={{ mr: 2, display: { sm: 'none' } }}
         >
           <MenuIcon />
         </IconButton>
         <Typography
           variant="h6"
           component="div"
           sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
         >
          {`Hey, ${user.firstname}`}
         </Typography>
         <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
           {navItems.map((item) => (
             <Button key={item} sx={{ color: '#fff' }}>
               {item}
             </Button>
           ))}
          <Button  sx={{ color: '#fff' }} onClick={logout}>
               <ExitToAppIcon/>
             </Button>

         </Box>
       </Toolbar>
     </AppBar>
     <Box component="nav">
       <Drawer
       //   container={container}
         variant="temporary"
         open={mobileOpen}
         onClose={handleDrawerToggle}
         ModalProps={{
           keepMounted: true, // Better open performance on mobile.
         }}
         sx={{
           display: { xs: 'block', sm: 'none' },
           '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
         }}
       >
         {drawer}
       </Drawer>
     </Box>
    
   </Box>

  
   </>
   
  );
}

// Navbar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default Navbar;
