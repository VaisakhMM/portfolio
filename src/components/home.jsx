import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import image from '../images/happy-3d-cartoon-man-using-laptop-siting-transparent-white-background_973886-51-removebg-transformed.png';

function Home() {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [blink, setBlink] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);
  const introText = "Hi, I am";
  const introText2 = "Vaisakh M M";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= introText.length) {
        setText(introText.substring(0, currentIndex));
        currentIndex++;
      } else if (currentIndex <= introText.length + introText2.length + 1) {
        setText2(introText2.substring(0, currentIndex - introText.length - 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    const blinkInterval = setInterval(() => {
      setBlink(prevBlink => !prevBlink);
    }, 500);

    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(blinkInterval);
      clearTimeout(timer);
    };
  }, []);

  const handleDownload = () => {
    const downloadUrl = '/vaisakh M M (3).pdf';
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'vaisakh_CV.pdf';
    link.click();
  };

  return (
    <Box
      className='mb-5 background'
      sx={{
        width: "90%",
        height: "auto",
        p: { xs: 2, md: 3 },
        borderRadius: '20px',
        margin: '0 auto',
        maxWidth: '1100px',
        marginTop: '30px',
        marginLeft: { xs: 0, md: '290px' },
        color: 'white',
        overflow: 'hidden',
      }}
    >
      <Box className={`container rounded ${contentLoaded ? 'contentLoaded' : ''}`}>
        <Grid container spacing={2} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 600,
                  color: "black",
                  fontFamily: "'Times New Roman', serif",
                  letterSpacing: "2px",
                  textAlign: 'center',
                }}
              >
                {text}
                <span style={{ opacity: blink ? 1 : 0, color: "gray" }}> |</span>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 600,
                  color: "black",
                  fontFamily: "'Times New Roman', serif",
                  letterSpacing: "2px",
                  textAlign: 'center',
                }}
              >
                {text2}
              </Typography>
              <Typography
                sx={{
                  color: "gray",
                  fontSize: { xs: '1.2rem', md: '1.8rem' },
                  mt: 2,
                  fontFamily: "'Times New Roman', serif",
                  textAlign: 'center',
                  fontWeight: '900',
                }}
              >
                Full Stack Developer
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.5rem' },
                  mt: 2,
                  color: "black",
                  textAlign: 'center',
                  px: 2,
                  fontWeight: '300',
                }}
              >
                As a dedicated learner and aspiring MERN Full Stack Developer, I am deeply committed to crafting innovative web solutions that are scalable and user-friendly. I thrive in collaborative environments and continuously seek to enhance my skills.
              </Typography>
            </motion.div>

            {/* Buttons Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                <Button
                  onClick={handleDownload}
                  variant="contained"
                  sx={{
                    padding: "10px 20px",
                    borderRadius: "25px",
                    backgroundColor: "#1b0d0d",
                    color: "#fff",
                    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    fontSize: { xs: '12px', md: '14px' },
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#FF3F6C",
                      letterSpacing: "3px",
                      boxShadow: "0px 0px 20px rgba(255, 63, 108, 0.3)",
                    },
                    "&:active": {
                      transform: "translateY(2px)",
                      transition: "transform 100ms",
                    },
                  }}
                >
                  Download CV
                </Button>
                <a href="mailto:vaisakhmmvx@gmail.com?subject=Hiring%20Inquiry&body=Hi%20Vaisakh,%20I%20am%20interested%20in%20discussing%20a%20job%20opportunity%20with%20you." style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    sx={{
                      padding: "10px 20px",
                      borderRadius: "25px",
                      backgroundColor: "#1b0d0d",
                      color: "#fff",
                      boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      fontSize: { xs: '12px', md: '14px' },
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#FF3F6C",
                        letterSpacing: "3px",
                        boxShadow: "0px 0px 20px rgba(255, 63, 108, 0.3)",
                      },
                      "&:active": {
                        transform: "translateY(2px)",
                        transition: "transform 100ms",
                      },
                    }}
                  >
                    Hire Me
                  </Button>
                </a>
              </Box>
            </motion.div>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={image}
                alt="Cartoon man with laptop"
                style={{ width: "100%", borderRadius: "15px", marginTop: { xs: 2, md: 0 } }} // Margin for mobile
              />
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;




