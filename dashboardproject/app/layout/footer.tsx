'use client';

import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import { GitHub, Twitter, LinkedIn, Email } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2" sx={{ mb: { xs: 2, md: 0 } }}>
            سیستم مدیریت. تمام حقوق محفوظ است.
          </Typography>

          <Box sx={{ display: 'flex', gap: 3, mb: { xs: 2, md: 0 } }}>
            <Link href="/about" color="inherit" underline="hover">
              درباره ما
            </Link>
            <Link href="/contact" color="inherit" underline="hover">
              تماس با ما
            </Link>
            <Link href="/privacy" color="inherit" underline="hover">
              حریم خصوصی
            </Link>
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton color="inherit" size="small">
              <GitHub />
            </IconButton>
            <IconButton color="inherit" size="small">
              <Twitter />
            </IconButton>
            <IconButton color="inherit" size="small">
              <LinkedIn />
            </IconButton>
            <IconButton color="inherit" size="small">
              <Email />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;