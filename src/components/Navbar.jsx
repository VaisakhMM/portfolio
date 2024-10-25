import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Avatar,
  Paper,
  Drawer,
  IconButton,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Twitter as TwitterIcon,
} from "@mui/icons-material";
import avatarImage from "../images/vaisakh.jpg";
import homeGif from "../images/home (1).gif";
import educationGif from "../images/graduation-cap.gif";
import skillsGif from "../images/activities.gif";
import projectsGif from "../images/vlogger.gif";
import contactGif from "../images/contact-book.gif";
import "./Navbar.css";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { text: "Home", gif: homeGif, anchor: "home" },
    { text: "Conversant Techs & Tools", gif: educationGif, anchor: "education" },
    { text: "Proficiencies", gif: skillsGif, anchor: "skills" },
    { text: "Projects", gif: projectsGif, anchor: "projects" },
    { text: "Contact", gif: contactGif, anchor: "contact" },
  ];

  const toggleDrawer = (open) => setDrawerOpen(open);
  
  const handleMenuClick = (anchor) => {
    document.getElementById(anchor).scrollIntoView({ behavior: "smooth" });
    setDrawerOpen(false);
  };

  const socialIcons = [
    { icon: <GitHubIcon />, href: "https://github.com/VaisakhMM" },
    { icon: <LinkedInIcon />, href: "http://linkedin.com/in/vaisakh-m-m-5567852b5" },
    { icon: <EmailIcon />, href: "mailto:vaisakhmmvx@gmail.com" },
    { icon: <TwitterIcon />, href: "/" },
  ];

  return (
    <>
      {/* Mobile Drawer Icon */}
      <IconButton
        onClick={() => toggleDrawer(true)}
        sx={{
          display: { xs: "flex", md: "none" },
          position: "absolute",
          left: 10,
          top: 10,
          zIndex: 10,
          color: "black",
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <Box sx={{ width: 250, height: "100vh", bgcolor: "#000", p: 2, display: "flex", flexDirection: "column" }}>
          <IconButton onClick={() => toggleDrawer(false)} sx={{ alignSelf: "flex-end", color: "white" }}>
            <CloseIcon />
          </IconButton>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
            <Avatar src={avatarImage} alt="Vaisakh M M" sx={{ width: 100, height: 100, mb: 1 }} />
            <Typography variant="h6" sx={{ color: "white", fontWeight: 700, textAlign: "center" }}>Vaisakh M M</Typography>
            <Typography variant="subtitle1" sx={{ color: "white", mb: 2 }}>Full Stack Developer</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 0 }}>
              {socialIcons.map(({ icon, href }) => (
                <IconButton key={href} component="a" href={href} target="_blank" sx={{ color: "white", "&:hover": { color: "#FF3F6C" } }}>
                  {icon}
                </IconButton>
              ))}
            </Box>
          </Box>
          <List>
            {menuItems.map(({ text, gif, anchor }) => (
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} key={anchor}>
                <ListItem button onClick={() => handleMenuClick(anchor)} sx={{ p: 2, mb: 1, borderRadius: 1, border: "1px solid white", "&:hover": { bgcolor: "#FF3F6C", color: "white" } }}>
                  <img src={gif} alt={text} style={{ width: "30px", marginRight: "10px" }} />
                  <ListItemText primary={text} sx={{ color: "white" }} />
                </ListItem>
              </motion.div>
            ))}
          </List>
          <Box sx={{ p: 2 }}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <a href="/vaisakh M M (3).pdf" download="vaisakh_CV.pdf" style={{ textDecoration: 'none' }}>
                <Button fullWidth variant="contained" sx={{ bgcolor: "#FF3F6C", "&:hover": { bgcolor: "#FF1F4B" } }}>Download CV</Button>
              </a>
            </motion.div>
          </Box>
        </Box>
      </Drawer>

      {/* Desktop Sidebar */}
      <Paper elevation={3} sx={{ display: { xs: "none", md: "flex" }, flexDirection: "column", position: "fixed", top: 0, left: 0, height: "1", width: 270, p: 2, bgcolor: "#000", borderRadius: "0 40px 40px 0" }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
          <Avatar src={avatarImage} alt="Vaisakh M M" sx={{ width: 150, height: 150, mb: 2 }} />
          <Typography variant="h6" sx={{ color: "white", fontWeight: 700 }}>Vaisakh M M</Typography>
          <Typography variant="subtitle1" sx={{ color: "white", mb: 2 }}>Full Stack Developer</Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mb: -1 }}>
            {socialIcons.map(({ icon, href }) => (
              <IconButton key={href} component="a" href={href} target="_blank" sx={{ color: "white", "&:hover": { color: "#FF3F6C" } }}>
                {icon}
              </IconButton>
            ))}
          </Box>
        </Box>
        <List>
          {menuItems.map(({ text, gif, anchor }) => (
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} key={anchor}>
              <ListItem button onClick={() => handleMenuClick(anchor)} sx={{ p: 2, mb: 1, borderRadius: 1, border: "1px solid white", "&:hover": { bgcolor: "#FF3F6C", color: "white" } }}>
                <img src={gif} alt={text} style={{ width: "30px", marginRight: "10px" }} />
                <ListItemText primary={text} sx={{ color: "white" }} />
              </ListItem>
            </motion.div>
          ))}
        </List>
        <Box sx={{ p: 2 }}>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <a href="/vaisakh M M (3).pdf" download="vaisakh_CV.pdf" style={{ textDecoration: 'none' }}>
              <Button fullWidth variant="contained" sx={{ bgcolor: "#FF3F6C", "&:hover": { bgcolor: "#FF1F4B" } }}>Download CV</Button>
            </a>
          </motion.div>
        </Box>
      </Paper>
    </>
  );
};

export default Navbar;










