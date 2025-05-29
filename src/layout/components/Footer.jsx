import { Box, Grid, Link, Stack, Typography, IconButton, Divider } from '@mui/material';
import {
  Facebook,
  YouTube,
  Phone,
  Email,
  Chat,
  MusicNote as TikTok,
  LocationOn,
  AccessTime,
} from '@mui/icons-material';
import React from 'react';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#005662',
        color: '#fff',
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 3, md: 4 },
        fontSize: { xs: '14px', md: '16px' },
        lineHeight: 1.8,
      }}
    >
      <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
        {/* Column 1: Logo and Description */}
        <Grid item xs={12} sm={6} md={3}>
          <Stack spacing={{ xs: 2, md: 3 }} alignItems={{ xs: 'center', md: 'flex-start' }}>
            <Box>
              <img
                src="/asset/img/logo.jpg"
                alt="Logo"
                style={{
                  width: 'clamp(120px, 25vw, 160px)',
                  height: 'auto',
                  maxHeight: '180px',
                }}
              />
            </Box>
            <Typography
              fontSize={{ xs: '18px', md: '22px' }}
              fontWeight={700}
              textAlign={{ xs: 'center', md: 'left' }}
            >
              <strong>Dịch Vụ Y Tế Tại Nhà</strong>
            </Typography>
          </Stack>
        </Grid>

        {/* Column 2: Contact Info */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            fontWeight={800}
            sx={{
              mb: 2,
              fontSize: { xs: '18px', md: '20px' },
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -5,
                left: 0,
                width: 50,
                height: 3,
                backgroundColor: '#fdd835',
              },
            }}
          >
            LIÊN HỆ
          </Typography>

          <Stack spacing={1.5}>
            <Box display="flex" alignItems="center">
              <LocationOn sx={{ mr: 1, color: '#00c4b4', fontSize: { xs: '24px', md: '32px' } }} />
              <Typography fontSize={{ xs: '14px', md: '18px' }} fontWeight={500}>
                50 Lê Văn Việt, Hiệp Phú, Thủ Đức, TP.HCM
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Email sx={{ mr: 1, color: '#00c4b4', fontSize: { xs: '24px', md: '32px' } }} />
              <Link
                href="mailto:taihungqy2@gmail.com"
                color="#fff"
                underline="hover"
                sx={{ fontSize: { xs: '14px', md: '18px' }, fontWeight: 500 }}
              >
                taihungqy2@gmail.com
              </Link>
            </Box>
            <Box display="flex" alignItems="center">
              <AccessTime sx={{ mr: 1, color: '#00c4b4', fontSize: { xs: '24px', md: '32px' } }} />
              <Typography fontSize={{ xs: '14px', md: '18px' }} fontWeight={500}>
                Đặt lịch: 24/7
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Phone sx={{ mr: 1, color: '#00c4b4', fontSize: { xs: '24px', md: '32px' } }} />
              <Link
                href="tel:0964345344"
                color="#fff"
                underline="hover"
                sx={{ fontSize: { xs: '14px', md: '18px' }, fontWeight: 500 }}
              >
                0964 345 344
              </Link>
            </Box>

            <Stack direction="row" spacing={1} mt={2}>
              <IconButton
                href="https://www.facebook.com/muavui.nguoi.12139862"
                target="_blank"
                sx={{ color: '#fff', p: 0.5 }}
              >
                <Facebook sx={{ fontSize: { xs: '28px', md: '34px' } }} />
              </IconButton>
              <IconButton
                href="https://www.youtube.com/@TaiHungNguyen"
                target="_blank"
                sx={{ color: '#fff', p: 0.5 }}
              >
                <YouTube sx={{ fontSize: { xs: '28px', md: '34px' } }} />
              </IconButton>
              <IconButton
                href="https://www.tiktok.com/@nguyentaihungqy"
                target="_blank"
                sx={{ color: '#fff', p: 0.5 }}
              >
                <TikTok sx={{ fontSize: { xs: '28px', md: '34px' } }} />
              </IconButton>
              <IconButton
                href="https://zalo.me/0964345344"
                target="_blank"
                sx={{ color: '#fff', p: 0.5 }}
              >
                <Chat sx={{ fontSize: { xs: '28px', md: '34px' } }} />
              </IconButton>
            </Stack>
          </Stack>
        </Grid>

        {/* Column 3: Quick Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            fontWeight={800}
            sx={{
              mb: 2,
              fontSize: { xs: '18px', md: '20px' },
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -5,
                left: 0,
                width: 50,
                height: 3,
                backgroundColor: '#fdd835',
              },
            }}
          >
            LIÊN KẾT NHANH
          </Typography>

          <Stack spacing={1}>
            {['Về chúng tôi', 'Đào tạo', 'Cẩm nang', 'Liên hệ'].map((text, idx) => (
              <Link
                key={idx}
                href="#"
                color="#fff"
                underline="hover"
                sx={{
                  fontSize: { xs: '14px', md: '18px' },
                  fontWeight: 500,
                  transition: 'color 0.2s',
                  '&:hover': { color: '#fdd835' },
                  display: 'block',
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                {text}
              </Link>
            ))}
          </Stack>
        </Grid>

        {/* Column 4: Policies */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            fontWeight={800}
            sx={{
              mb: 2,
              fontSize: { xs: '18px', md: '20px' },
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -5,
                left: 0,
                width: 50,
                height: 3,
                backgroundColor: '#fdd835',
              },
            }}
          >
            CHÍNH SÁCH
          </Typography>

          <Stack spacing={1}>
            {['Chính sách bảo mật thông tin', 'Chính sách vận chuyển', 'Hướng dẫn thanh toán'].map((text, idx) => (
              <Link
                key={idx}
                href="#"
                color="#fff"
                underline="hover"
                sx={{
                  fontSize: { xs: '14px', md: '18px' },
                  fontWeight: 500,
                  transition: 'color 0.2s ease-in-out',
                  '&:hover': {
                    color: '#fdd835',
                  },
                  display: 'block',
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                {text}
              </Link>
            ))}
          </Stack>
        </Grid>
      </Grid>

      {/* Divider for Mobile */}
      <Divider
        sx={{
          my: { xs: 3, md: 0 },
          bgcolor: '#fff',
          display: { xs: 'block', md: 'none' },
        }}
      />
    </Box>
  );
}