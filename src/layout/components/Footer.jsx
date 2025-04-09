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
        px: { xs: 3, md: 10 },
        py: 6,
        fontSize: '16px', // Increased font size
        lineHeight: 2, // Increased line height
      }}
    >
      <Grid container spacing={6}> {/* Increased spacing between columns */}
        {/* Column 1: Logo and Description */}
        <Grid item xs={12} md={3} ml={10}>
          <Stack spacing={3}> {/* Increased spacing */}
            <Box display="flex" justifyContent={{ xs: 'center', md: 'flex-start' }}>
              <img
                src="/asset/img/logo.jpg"
                alt="Logo"
                style={{ height: 240, width: 220 }} // Increased image size
              />
            </Box>
            <Typography fontSize="22px" textAlign={{ xs: 'center', md: 'left' }}> {/* Increased font size */}
              <strong>Dịch Vụ Y Tế Tại Nhà</strong> 
            </Typography>
          </Stack>
        </Grid>

        {/* Column 2: Contact Info */}
        <Grid item xs={12} md={3} ml={40}>
  <Typography
    variant="h6"
    fontWeight={800} // Tăng độ đậm
    sx={{
      mb: 3,
      fontSize: '20px', // Tăng cỡ chữ tiêu đề
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

  <Stack spacing={2}>
    <Box display="flex" alignItems="center">
      <LocationOn sx={{ mr: 1, color: '#00c4b4', fontSize: '32px' }} />
      <Typography fontSize="18px" fontWeight={500}>
        50 Lê Văn Việt, Hiệp Phú, Thủ Đức, TP.HCM
      </Typography>
    </Box>
    <Box display="flex" alignItems="center">
      <Email sx={{ mr: 1, color: '#00c4b4', fontSize: '32px' }} />
      <Link
        href="mailto:taihungqy2@gmail.com"
        color="#fff"
        underline="hover"
        sx={{ fontSize: '18px', fontWeight: 500 }}
      >
        taihungqy2@gmail.com
      </Link>
    </Box>
    <Box display="flex" alignItems="center">
      <AccessTime sx={{ mr: 1, color: '#00c4b4', fontSize: '32px' }} />
      <Typography fontSize="18px" fontWeight={500}>
        Đặt lịch: 24/7
      </Typography>
    </Box>
    <Box display="flex" alignItems="center">
      <Phone sx={{ mr: 1, color: '#00c4b4', fontSize: '32px' }} />
      <Link
        href="tel:0964345344"
        color="#fff"
        underline="hover"
        sx={{ fontSize: '18px', fontWeight: 500 }}
      >
        0964 345 344
      </Link>
    </Box>

    <Stack direction="row" spacing={2} mt={3}>
      <IconButton
        href="https://www.facebook.com/muavui.nguoi.12139862"
        target="_blank"
        sx={{ color: '#fff' }}
      >
        <Facebook sx={{ fontSize: 34 }} />
      </IconButton>
      <IconButton
        href="https://www.youtube.com/@TaiHungNguyen"
        target="_blank"
        sx={{ color: '#fff' }}
      >
        <YouTube sx={{ fontSize: 34 }} />
      </IconButton>
      <IconButton
        href="https://www.tiktok.com/@nguyentaihungqy"
        target="_blank"
        sx={{ color: '#fff' }}
      >
        <TikTok sx={{ fontSize: 34 }} />
      </IconButton>
      <IconButton
        href="https://zalo.me/0964345344"
        target="_blank"
        sx={{ color: '#fff' }}
      >
        <Chat sx={{ fontSize: 34 }} />
      </IconButton>
    </Stack>
  </Stack>
</Grid>

        {/* Column 3: Quick Links */}
      
        <Grid item xs={12} md={3} ml={40}>
  <Typography
    variant="h6"
    fontWeight={800} // Tăng độ đậm
    sx={{
      mb: 3,
      fontSize: '20px', // Tăng cỡ chữ tiêu đề
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

  <Stack spacing={2}>
    {['Về chúng tôi', 'Đào tạo', 'Cẩm nang', 'Liên hệ'].map((text, idx) => (
      <Link
        key={idx}
        href="#"
        color="#fff"
        underline="hover"
        sx={{
          fontSize: '18px', // To hơn
          fontWeight: 500, // Đậm hơn
          transition: 'color 0.2s',
          '&:hover': { color: '#fdd835' },
        }}
      >
        {text}
      </Link>
    ))}
  </Stack>
</Grid>

        {/* Column 4: Policies */}
        <Grid item xs={12} md={3} ml={40}>
  <Typography
    variant="h6"
    fontWeight={800} // Đậm hơn
    sx={{
      mb: 3,
      fontSize: '20px', // Tăng kích thước tiêu đề
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: -5,
        left: 0,
        width: 50, // Tăng độ dài gạch dưới
        height: 3,
        backgroundColor: '#fdd835',
      },
    }}
  >
    CHÍNH SÁCH
  </Typography>

  <Stack spacing={2}> {/* Khoảng cách giữa các dòng */}
    {[
      'Chính sách bảo mật thông tin',
      'Chính sách vận chuyển',
      'Hướng dẫn thanh toán',
    ].map((text, idx) => (
      <Link
        key={idx}
        href="#"
        color="#fff"
        underline="hover"
        sx={{
          fontSize: '18px', // Tăng kích thước font
          fontWeight: 500, // Làm đậm hơn chút
          transition: 'color 0.2s ease-in-out',
          '&:hover': {
            color: '#fdd835',
          },
        }}
      >
        {text}
      </Link>
    ))}
  </Stack>
</Grid>

      </Grid>

      {/* Divider & Map */}
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', my: 5 }} /> {/* Increased divider spacing */}

      <Box mt={2} display="flex" justifyContent="center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.447602614614!2d106.698287614622!3d10.776393692319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38f16aa0f7%3A0x1e3d8b8b8b8b8b8b!2sHo%20Chi%20Minh%20City!5e0!3m2!1sen!2s!4v1696931234567!5m2!1sen!2s"
          width="50%" // Adjusted width
          height="300" // Adjusted height
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>

      {/* Copyright */}
      <Typography textAlign="center" mt={4} fontSize="16px" color="#cfe8e5">
        © 2025 DỊCH VỤ Y TẾ TẠI  NHÀ. Bảo lưu mọi quyền.
      </Typography>
    </Box>
  );
}
