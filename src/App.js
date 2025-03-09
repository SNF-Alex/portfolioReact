import * as React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
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
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';

const theme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          variants: [

            {
              props: { variant: 'navBar' },
                style: () => ({
                  color: '#03fcdf',
                  background:'#262626',
                  width: '100px',
                  fontWeight: 'bold',
              }),
            },
          ]
        },
      },
    },
  },
});

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function App(props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  {/* Code for the inside of the menu drawer show on smaller screens */}

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Alexander Pace
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
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  
  // ------------------------------RETURN-----------------------------
  // ------------------------------RETURN-----------------------------
  // ------------------------------RETURN-----------------------------
  // ------------------------------RETURN-----------------------------
  // ------------------------------RETURN-----------------------------
  // ------------------------------RETURN-----------------------------
  
  return (
    <ThemeProvider theme={theme}>
      <div className='container1'>
        
          <Box sx={{ display: 'flex' }}>
          <CssBaseline />

          {/* THIS IS THE TOP NAV BAR */}
          <AppBar sx={{bgcolor: '#262626'}} component="nav">
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
                sx={{ color: '#03fcdf', fontWeight:'bold',flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                Alexander Pace
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                  
                  <Button variant="navBar" key={item}>
                    {item}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>

          {/* Logic for the menu */}
          <nav>
            <Drawer
              container={container}
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
          </nav>
          <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
              <Typography>
                <div className='helloMsg'>
                  <h1>Welcome to my React App</h1>
                </div>
              </Typography>
          </Box>
          </Box>

      </div>
    </ThemeProvider>
  );
  
};

export default App;
