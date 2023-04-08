import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import "./Style/Header.css";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const drawerWidth = 240;
import {useNavigate} from "react-router-dom";
function Header(props)
 {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const About = () => {
   navigate('/about-us');
  }
  const Home = () => {
    navigate('/');
   }
   const Contact = () => {
    navigate('/contact-us');
   }
   const Work = () => {
    navigate('/gallary');
   }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography  variant="h6" sx={{ my: 2 }}style={{fontFamily:'Delicious Handrawn',fontWeight:'600',fontSize:'2rem',}}>
        Art & Craft
      </Typography>
      <Divider />
      <List>
        <Button className="links" onClick={Home} sx={{ color: "black"}} style={{display:'flex' ,textAlign:'center',justifyContent:'center',margin:'auto'}}  >Home</Button>
            <Button className="links" onClick={About} sx={{ color: "black"}} style={{display:'flex' ,textAlign:'center',justifyContent:'center',margin:'auto'}} >About Us</Button>
            <Button className="links" onClick={Contact} sx={{ color: "black" }} style={{display:'flex' ,textAlign:'center',justifyContent:'center',margin:'auto'}} >Contact Us</Button>
            <Button className="links" onClick={Work} sx={{ color: "black" }}style={{display:'flex' ,textAlign:'center',justifyContent:'center',margin:'auto'}}disablePadding>Work</Button>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} className="mainContainer">
      <CssBaseline />
      <AppBar component="nav" style={{ background: "#fff" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon style={{ color: "black" }} />
          </IconButton>
          <Typography
            className="logo-container-text"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            style={{ color: "black" }}
          >
            Arts & Crafts
          </Typography>
          <Box
            className="navbar-links"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Button className="links" onClick={Home} sx={{ color: "black" }}>Home</Button>
            <Button className="links" onClick={About} sx={{ color: "black" }}>About Us</Button>
            <Button className="links" onClick={Contact} sx={{ color: "black" }}>Contact Us</Button>
            <Button className="links" onClick={Work} sx={{ color: "black" }}>Work</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
