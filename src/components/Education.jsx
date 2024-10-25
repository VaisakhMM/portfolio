import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
  CircularProgress,
} from '@mui/material';
import { motion } from 'framer-motion';

const SkillCards = () => {
  const skillsData = [
    { title: 'Front-End Developer', skill: 'React, JavaScript, CSS , Material UI , Framer Motion', date: 'Dec 2023 - August 2024', percentage: 90 },
    { title: 'Back-End Developer', skill: 'Node.js, Express js, MongoDB', date: 'Dec 2023 - August 2024', percentage: 80 },
  ];

  const [progressValues, setProgressValues] = useState([0, 0]); // Initial progress for both skills is 0

  useEffect(() => {
    // Function to animate the percentage
    skillsData.forEach((skill, index) => {
      const interval = setInterval(() => {
        setProgressValues((prevValues) => {
          const newValues = [...prevValues];
          if (newValues[index] < skill.percentage) {
            newValues[index] += 1; // Increment the progress value
          } else {
            clearInterval(interval); // Stop incrementing once the target percentage is reached
          }
          return newValues;
        });
      }, 30); // Speed of the animation (adjust as needed)
    });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        color: 'black',
        padding: { xs: '20px', md: '40px' },
        borderRadius: '25px',
        maxWidth: '1200px',
        margin: '0 auto',
        marginTop:'120px',
        marginLeft: { xs: 0, md: '290px' },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          color: 'black',
          fontWeight: 'bold',
          fontFamily: 'Times New Roman',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          marginBottom: '30px',
        }}
      >
        Conversant Techs & Tools
      </Typography>

      <Box
        sx={{
          width: '60px',
          height: '4px',
          backgroundColor: 'black',
          margin: '0 auto 50px',
        }}
      />

      <Grid container spacing={4} justifyContent="center">
        {skillsData.map((skill, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '15px',
                  padding: '30px',
                  gap: '10px',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 30px rgba(255, 63, 108, 0.8)',
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  {/* Circular Progress for Skill Percentage */}
                  <Box sx={{ position: 'relative', display: 'inline-flex', marginBottom: '20px' }}>
                    <CircularProgress
                      variant="determinate"
                      value={progressValues[index]} // Use animated value
                      size={80}
                      thickness={5}
                      sx={{
                        color: '#FF3F6C',
                      }}
                    />
                    <Box
                      sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography
                        variant="caption"
                        component="div"
                        color="black"
                        sx={{ fontSize: '18px', fontWeight: 'bold' }}
                      >
                        {`${progressValues[index]}%`}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold', fontFamily: 'Times New Roman', marginBottom: '10px' }}>
                    {skill.title}
                  </Typography>
                  <Divider sx={{ backgroundColor: '#FF3F6C', marginBottom: '15px' }} />
                  <Typography variant="body1" color="#333" sx={{ marginBottom: '10px' }}>
                    {skill.skill}
                  </Typography>
                  <Typography variant="body2" color="#666">
                    {skill.date}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillCards;

  