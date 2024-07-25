import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import { NavLink, Outlet } from 'react-router-dom';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(2),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const CustomAppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const NavigationDrawer = ({ open, handleDrawerToggle }) => (
  <Drawer
    variant="temporary"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        zIndex: 1200, // Ensure Drawer is above other content
      },
    }}
    open={open}
    onClose={handleDrawerToggle}
  >
    <DrawerHeader>
      <IconButton onClick={handleDrawerToggle}>
        {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </DrawerHeader>
    <Divider />
    <List>
      {[
        { text: 'Home', icon: <HomeRoundedIcon /> },
        { text: 'Map', icon: <MapRoundedIcon /> },
        { text: 'Deliveries', icon: <LocalShippingRoundedIcon /> },
      ].map(({ text, icon }) => (
        <ListItem key={text} disablePadding>
          <NavLink to={text === 'Home' ? '/' : `/${text.toLowerCase()}`} style={{ textDecoration: 'none' }}>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#0F5132' }}>
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} primaryTypographyProps={{color: 'black', fontWeight: 'bold'}}/>
            </ListItemButton>
          </NavLink>
        </ListItem>
      ))}
    </List>
  </Drawer>
);

const NavigationComponent = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false); // Start with drawer closed

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <CustomAppBar position="fixed" open={open}>
        <Toolbar sx={{backgroundColor: '#0F5132'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ display: 'flex', alignItems: 'center' }}>
            <ManageAccountsRoundedIcon sx={{ mr: 1 }} fontSize="large" />
            Rainforest Retail Route Management System
          </Typography>
        </Toolbar>
      </CustomAppBar>
      <NavigationDrawer open={open} handleDrawerToggle={handleDrawerToggle} />
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
};


export default NavigationComponent;
