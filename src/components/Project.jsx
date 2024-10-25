import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";

// Sample project images
import projectImage1 from '../images/images1.png';
import projectImage2 from '../images/image2.png';
import projectImage3 from '../images/image3.png';
import projectImage4 from '../images/2.1.png';
import projectImage5 from '../images/2.2.png';
import projectImage6 from '../images/2.3.png';
import projectImage7 from '../images/3.11.png';
import projectImage8 from '../images/3.11.png';
import projectImage9 from '../images/3.11.png';

const Projects = () => {
  const projects = [
    {
      title: "Petsify",
      images: [projectImage1, projectImage2, projectImage3],
      points: [
        "Using REACT, Framer Motion, meterial ui - ",
        "Responsive Design -",
        "Backend Using Nodejs,mongodb,razorpay -",
      ],
      liveLink: "https://petsify-khaki.vercel.app/"
    },
    {
      title: "Gold Jewllery",
      images: [projectImage4, projectImage5, projectImage6],
      points: [
        "Using HTML, CSS, JS -",
        "using Chart JS -",
        " Backend Was Use In Shopify -",
      ],
      liveLink: "https://ttdevassyjewellers.com/pages/ttdmigold#"
    },
    {
      title: "Country Details",
      images: [projectImage7, projectImage8, projectImage9],
      points: [
        "Using HTML, CSS, JS -",
        "Using API Call-",
        "-",
      ],
      liveLink: "https://vaisakhmm.github.io/country/"
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "40px 20px",
         // 350px for mobile, 50px for desktop
        marginLeft: { xs: 0, md: '310px' },
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: 1,
            textAlign: "center",
            color: "#333",
            position: "relative",
            fontFamily:'times',
            letterSpacing: '3px',
            marginBottom: '30px',
          }}
        >
          Projects
        </Typography>

        {/* Underline with black color */}
        <Box
          sx={{
            width: "60px",
            height: "4px",
            backgroundColor: "black", // Black underline
            margin: "0 auto 20px",
            borderRadius: "5px",
          }}
        />

        <Grid container spacing={3} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered entrance
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)", // Subtle shadow
                  transition: { duration: 0.3 },
                }}
              >
                <Card
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "15px",
                    textAlign: "center",
                    padding: "20px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    overflow: 'hidden',
                  }}
                >
                  <Slideshow images={project.images} />

                  <CardContent>
                  <Typography
                       variant="h6"
                      sx={{
                     fontWeight: "bold",
                     marginBottom: "10px",
                  fontFamily: "Times New Roman, Times, serif", // Set font family
                    }}
                      >
                   {project.title}
                     </Typography>

                    {project.points.map((point, pointIndex) => (
                      <Typography variant="body2" color="#666" key={pointIndex}>
                        - {point}
                      </Typography>
                    ))}

                    {/* Button with black color and hover effect */}
                    <Button
                      variant="contained"
                      sx={{
                        marginTop: 2,
                        backgroundColor: 'black', // Black button
                        color: 'white',
                        "&:hover": {
                          backgroundColor: "#FF3F6C", // Hover to pink
                        },
                      }}
                      onClick={() => window.open(project.liveLink, "_blank")}
                    >
                      Check Live
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

// Slideshow Component
const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={images[currentIndex]}
        alt={`Project image ${currentIndex + 1}`}
        style={{
          width: "100%",
          height: "200px",
          borderRadius: "10px",
          objectFit: "cover",
          transition: "opacity 0.5s",
        }}
      />
    </motion.div>
  );
};

export default Projects;











