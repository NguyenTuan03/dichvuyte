import { Box, Button, Container, Grid, Stack, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NAVIGATION } from '../../enum/navigation';
import { useNavigate } from 'react-router';

export default function Header() {
  const HEADER = [
    {
      name: 'Hộp thư',
      img: '/envelop.svg',
      email: 'taihungqy2@gmail.com',
    },
    {
      name: 'Đường dây nóng',
      img: '/phone.svg',
      email: '0964345344',
    },
  ];
  const nav = useNavigate();
  const [openSubmenu, setOpenSubmenu] = useState(null); // Track which submenu is open

  const handleToggleSubmenu = (index) => {
    // Toggle submenu: open if closed, close if open
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <Box width="100%" sx={{ bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          sx={{ py: { xs: 2, md: 0 }, minHeight: { xs: 'auto', md: '112px' } }}
        >
          {/* Logo */}
          <Box sx={{ mb: { xs: 2, md: 0 } }}>
            <img
              src="/Logo.jpg"
              alt="Logo"
              style={{
                width: 'clamp(100px, 20vw, 120px)',
                height: 'auto',
                maxHeight: '112px',
              }}
            />
          </Box>

          {/* Header Items */}
          <Grid container spacing={2} flex={1} alignItems="center">
            {HEADER.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{ width: '100%', justifyContent: { xs: 'center', md: 'flex-start' } }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ width: 'clamp(30px, 5vw, 38px)', height: 'auto' }}
                  />
                  <Box>
                    <Typography
                      color="#1964ba"
                      sx={{
                        fontSize: { xs: '14px', md: '16px' },
                        fontWeight: 600,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: '14px', md: '16px' },
                        fontWeight: 400,
                      }}
                    >
                      {item.email}
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            ))}
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <Button
                size="medium"
                sx={{
                  borderRadius: '99px',
                  backgroundColor: '#ff8484',
                  color: '#fff',
                  px: { xs: 3, md: 4 },
                  py: 1,
                  fontSize: { xs: '14px', md: '16px' },
                  '&:hover': { bgcolor: '#e57373' },
                }}
              >
                Đặt lịch
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Container>

      {/* Navigation Section */}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="center"
        sx={{
          bgcolor: '#f5f5f5',
          py: 1,
          px: { xs: 2, md: 0 },
          minHeight: { xs: 'auto', md: '55px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 1, md: 3 },
            flexWrap: 'wrap',
          }}
        >
          {NAVIGATION.map((item, index) => (
            <Box
              key={index}
              sx={{
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.3s ease-in-out',
                '&:hover .submenu': {
                  display: { xs: 'none', md: 'block' }, // Hover only for desktop
                  transition: 'all ease 0.2s',
                },
              }}
              onClick={() => {
                if (!item.children && item.to) {
                  nav(item.to); // Navigate if no children
                } else if (item.children) {
                  handleToggleSubmenu(index); // Toggle submenu on click
                }
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                sx={{
                  px: 2,
                  py: 1,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: '50%',
                    bottom: 0,
                    width: 0,
                    height: '2px',
                    bgcolor: '#1964ba',
                    transition: 'all 0.3s ease',
                    transform: 'translateX(-50%)',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
              >
                <Typography
                  color="#002760"
                  sx={{
                    fontSize: { xs: '12px', md: '14px' },
                    fontWeight: 600,
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  {item.name}
                </Typography>
                {item.icon && <item.icon sx={{ ml: 1, fontSize: { xs: '16px', md: '20px' } }} />}
              </Stack>
              {item.children && (
                <Stack
                  className="submenu"
                  sx={{
                    position: { xs: 'static', md: 'absolute' },
                    top: { md: '100%' },
                    left: 0,
                    padding: '10px 0',
                    bgcolor: '#fff',
                    color: '#000',
                    display: { xs: openSubmenu === index ? 'block' : 'none', md: 'none' }, // Toggle on click for mobile
                    minWidth: { xs: '100%', md: '200px' },
                    boxShadow: { md: '0 4px 8px rgba(0,0,0,0.2)' },
                    zIndex: 10,
                    transition: 'all ease 0.2s',
                  }}
                >
                  {item.children.map((child, idx) => (
                    <Box
                      key={idx}
                      onClick={() => {
                        nav(child.to);
                        setOpenSubmenu(null); // Close submenu after selection
                      }}
                      sx={{
                        padding: '10px 20px',
                        transition: 'all ease 0.2s',
                        color: '#4d494994',
                        cursor: 'pointer',
                        '&:hover': {
                          color: '#000',
                          bgcolor: '#f0f0f0',
                        },
                      }}
                    >
                      {child.name}
                    </Box>
                  ))}
                </Stack>
              )}
            </Box>
          ))}
        </Box>

        {/* Social Media Icons */}
        <Stack
          direction="row"
          spacing={1}
          sx={{ mt: { xs: 2, md: 0 }, justifyContent: 'center' }}
        >
          <Tooltip title="Follow on Facebook" placement="top">
            <Typography
              component="a"
              href="https://www.facebook.com/muavui.nguoi.12139862"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: { xs: '24px', md: '30px' },
                height: { xs: '24px', md: '30px' },
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src="/fb.png" alt="Facebook" style={{ width: '100%', height: '100%' }} />
            </Typography>
          </Tooltip>

          <Tooltip title="Follow on TikTok" placement="top">
            <Typography
              component="a"
              href="https://www.tiktok.com/@nguyentaihungqy"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: { xs: '24px', md: '30px' },
                height: { xs: '24px', md: '30px' },
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src="/tiktok.svg" alt="TikTok" style={{ width: '100%', height: '100%' }} />
            </Typography>
          </Tooltip>

          <Tooltip title="Follow on YouTube" placement="top">
            <Typography
              component="a"
              href="https://www.youtube.com/@TaiHungNguyen"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: { xs: '24px', md: '30px' },
                height: { xs: '24px', md: '30px' },
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src="/youtube.svg" alt="YouTube" style={{ width: '100%', height: '100%' }} />
            </Typography>
          </Tooltip>
        </Stack>
      </Stack>
    </Box>
  );
}