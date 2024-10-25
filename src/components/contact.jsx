import React, { useRef, useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import { GitHub, LinkedIn, Twitter, Mail } from "@mui/icons-material";
import image from '../images/1.jpg.png'; 
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

function Contact() {
  const [isName, setIsName] = useState('');
  const [isEmail, setIsEmail] = useState('');
  const [isMessage, setIsMessage] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(isEmail)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    console.log('Sending email with:', { isName, isEmail, isMessage }); // Log form data

    emailjs
      .sendForm('service_3aglvcb', 'template_kcizmti', form.current, 'LAI2KhUpFmpNt8loF')
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          
          // Show success SweetAlert
          Swal.fire({
            title: 'Success!',
            text: 'Your message has been sent successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
          });

          // Reset form fields after submission
          setIsName('');
          setIsEmail('');
          setIsMessage('');
        },
        (error) => {
          console.error('Email sending error:', error.text); // Log error details
          
          // Show error SweetAlert
          Swal.fire({
            title: 'Error!',
            text: 'Failed to send the message. Please try again later.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      ).catch((err) => {
        console.error('Unexpected error:', err); // Log any unexpected errors
        toast.error('An unexpected error occurred.');
      });
  };

  return (
    <Box
      id="contact"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        padding: "60px 20px",
        borderRadius: "25px",
        marginLeft: { xs: 0, md: '290px' },
        maxWidth: "1200px",
        marginRight: "auto",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        style={{ flex: 1 }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: 2,
            textAlign: "center",
            color: "black",
            fontFamily: 'times',
            letterSpacing: '3px',
            marginBottom: '30px',
          }}
        >
          Contact Me
        </Typography>

        <Box
          sx={{
            width: "80px",
            height: "4px",
            backgroundColor: "black",
            margin: "0 auto 40px",
            borderRadius: "5px",
          }}
        />

        <Box
          component="form"
          ref={form}
          onSubmit={sendEmail}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            maxWidth: "500px",
            margin: "0 auto",
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "15px",
            boxShadow: "none", // Removed box shadow
          }}
        >
          <TextField
            name="from_name"
            label="Name"
            value={isName}
            onChange={(e) => setIsName(e.target.value)}
            fullWidth
            variant="outlined"
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px", // Rounded corners
                "& fieldset": {
                  borderColor: "black", // Change border color
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255, 63, 108, 1)", // Hover border color
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(255, 63, 108, 1)", // Focused border color
                },
              },
            }}
          />

          <TextField
            name="from_email"
            label="Email"
            value={isEmail}
            onChange={(e) => setIsEmail(e.target.value)}
            fullWidth
            variant="outlined"
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                "& fieldset": {
                  borderColor: "black",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255, 63, 108, 1)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(255, 63, 108, 1)",
                },
              },
            }}
          />

          <TextField
            name="message"
            label="Message"
            value={isMessage}
            onChange={(e) => setIsMessage(e.target.value)}
            fullWidth
            multiline
            rows={5}
            variant="outlined"
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                "& fieldset": {
                  borderColor: "black",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255, 63, 108, 1)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(255, 63, 108, 1)",
                },
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "25px",
              "&:hover": {
                backgroundColor: "rgba(255, 63, 108, 1)",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <img
          src={image}
          alt="Contact Illustration"
          style={{
            maxWidth: "100%",
            marginTop: '20px',
            borderRadius: "15px",
          }}
        />

        <Box
          sx={{
            textAlign: "center",
            marginTop: "20px",
            color: "#666",
          }}
        >
          <Typography variant="body1" style={{ color: "black" }}>
            Email:{" "}
            <a href="mailto:vaisakhmmvx@gmail.com" style={{ color: "black" }}>
              vaisakhmmvx@gmail.com
            </a>
          </Typography>
          <Typography variant="body1" style={{ color: "black" }}>© 2024 Portfolio. Built with React. | Created by Vaisakh M M</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            marginTop: "20px",
          }}
        >
          <GitHub
            sx={iconStyle}
            onClick={() => window.open("https://github.com/VaisakhMM", "_blank")}
          />
          <LinkedIn
            sx={iconStyle}
            onClick={() => window.open("http://linkedin.com/in/vaisakh-m-m-5567852b5", "_blank")}
          />
          <Mail
            sx={iconStyle}
            onClick={() => window.open("mailto:vaisakhmmvx@gmail.com")}
          />
          <Twitter
            sx={iconStyle}
            onClick={() => window.open("/", "_blank")}
          />
        </Box>
      </motion.div>
    </Box>
  );
};

const iconStyle = {
  fontSize: "40px",
  color: "black",
  cursor: "pointer",
  "&:hover": {
    color: "rgba(255, 63, 108, 1)",
    transform: "scale(1.1)",
    transition: "transform 0.3s ease",
  },
};

export default Contact;




