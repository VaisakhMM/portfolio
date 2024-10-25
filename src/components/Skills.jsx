import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { SiMongodb, SiReact, SiExpress, SiNodedotjs, SiHtml5, SiCss3, SiJavascript, SiBootstrap } from "react-icons/si";
import { motion } from "framer-motion"; // Import Framer Motion

const Skills = () => {
  const skills = [
    { name: "MongoDB", icon: <SiMongodb size={50} />, color: "#4DB33D" },
    { name: "React", icon: <SiReact size={50} />, color: "#61DBFB" },
    { name: "Express", icon: <SiExpress size={50} />, color: "#000000" },
    { name: "Node.js", icon: <SiNodedotjs size={50} />, color: "#8CC84B" },
    { name: "HTML5", icon: <SiHtml5 size={50} />, color: "#E34F26" },
    { name: "CSS3", icon: <SiCss3 size={50} />, color: "#1572B6" },
    { name: "JavaScript", icon: <SiJavascript size={50} />, color: "#F7DF1E" },
    { name: "Bootstrap", icon: <SiBootstrap size={50} />, color: "#563d7c" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(skills.length / itemsToShow));
    }, 3000); // Change skill every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const displayedSkills = skills.slice(currentIndex * itemsToShow, currentIndex * itemsToShow + itemsToShow);

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "20px",
        height: "51vh", // Set body height to 51vh
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "40px 20px",
           // Responsive margin top for mobile and desktop
          justifyContent: "center",
          alignItems: "center", // Centers content horizontally
          height: "100%",
          marginLeft: { xs: 0, md: '290px' }, // Ensures the inner box fills the height
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: 1,
            textAlign: "center",
            color: "#333",
            fontFamily:'times',
            letterSpacing: '3px',
            marginBottom: '30px',
          }}
        >
          Proficiencies
        </Typography>

        <Box
          sx={{
            width: "60px",
            height: "4px",
            backgroundColor: "black",
            margin: "0 auto 20px",
          }}
        />

        <Grid container spacing={2} justifyContent="center">
          {window.innerWidth <= 600 ? (
            <Grid item xs={12}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }} 
              >
                <Card
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "15px",
                    textAlign: "center",
                    padding: "40px", // Increased padding for larger cards
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    marginTop: "50px",
                    height: "200px", // Fixed height for consistency
                  }}
                >
                  <CardContent>
                    <Box sx={{ marginBottom: 1, color: skills[currentIndex].color }}>
                      {skills[currentIndex].icon}
                    </Box>

                    <Typography variant="h5" sx={{ fontWeight: "bold", color: skills[currentIndex].color }}>
                      {skills[currentIndex].name}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ) : (
            displayedSkills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: index * 0.1 }} 
                >
                  <Card
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "15px",
                      textAlign: "center",
                      padding: "40px", // Increased padding for larger cards
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 8px 30px rgba(255, 63, 108, 0.8)",
                      },
                      height: "200px", // Fixed height for consistency
                    }}
                  >
                    <CardContent>
                      <Box sx={{ marginBottom: 1, color: skill.color }}>
                        {skill.icon}
                      </Box>

                      <Typography variant="h5" sx={{ fontWeight: "bold", color: skill.color }}>
                        {skill.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;


