import React from 'react';
import {
  Paper,
  Typography,
  Box,
  Stack,
  Button,
  Link,
  Avatar,
  Container,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Phone, Email, LocalHospital, DirectionsCar, AccessTime } from '@mui/icons-material';
import { keyframes } from '@emotion/react';

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const ChoThueXeCapCuu = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ background: 'linear-gradient(to bottom, #f5f5f5 0%, #e0e0e0 100%)', py: 6 }}>
      <Container maxWidth="lg">
        {/* Hero Section with Image */}
        <Paper
          elevation={6}
          sx={{
            p: { xs: 3, md: 6 },
            mb: 8,
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #e53935 0%, #d32f2f 100%)',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              right: 0,
              width: '50%',
              height: '100%',
              backgroundImage: 'url(/ambulance-hero.jpg)', // Giả định hình ảnh xe cấp cứu
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.9,
              [theme.breakpoints.down('md')]: {
                width: '100%',
                opacity: 0.3,
              },
            },
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 1, maxWidth: isMobile ? '100%' : '50%' }}>
            <Typography variant="h3" fontWeight={700} sx={{ mb: 3 }}>
              Dịch Vụ Cho Thuê Xe Cấp Cứu
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '18px', lineHeight: 1.6, mb: 4 }}>
              Hỗ trợ vận chuyển bệnh nhân khẩn cấp 24/7 với đội ngũ y tế chuyên nghiệp và xe được trang bị hiện đại.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                px: 6,
                py: 1.5,
                backgroundColor: '#fff',
                color: '#d32f2f',
                fontWeight: 600,
                borderRadius: '8px',
                '&:hover': { backgroundColor: '#f5f5f5' },
                animation: `${pulseAnimation} 2s infinite`,
              }}
            >
              Đặt Xe Ngay
            </Button>
          </Box>
        </Paper>

        {/* Main Content */}
        <Grid container spacing={4}>
          {/* Left Column - Service Details & Benefits */}
          <Grid item xs={12} md={8}>
            {/* Service Details */}
            <Paper
              elevation={4}
              sx={{
                p: 4,
                mb: 4,
                width  :'1050px',
                borderRadius: '12px',
                borderLeft: '6px solid #d32f2f',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': { transform: 'translateY(-5px)', boxShadow: theme.shadows[8] },
              }}
            >
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                <Avatar sx={{ bgcolor: '#d32f2f', width: 50, height: 50 }}>
                  <LocalHospital sx={{ fontSize: 28 }} />
                </Avatar>
                <Typography variant="h5" fontWeight={700} color="#d32f2f">
                  Mô Tả Dịch Vụ
                </Typography>
              </Stack>
              <Stack spacing={2}>
                <Typography variant="body1" sx={{ fontSize: '16px', lineHeight: 1.8 }}>
                  - Xe cấp cứu được trang bị máy thở, máy điện tim, bình oxy và các thiết bị y tế cần thiết.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '16px', lineHeight: 1.8 }}>
                  - Đội ngũ y tế chuyên nghiệp luôn sẵn sàng hỗ trợ trong mọi tình huống.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '16px', lineHeight: 1.8 }}>
                  - Dịch vụ 24/7 với thời gian đáp ứng nhanh chóng, đảm bảo an toàn tối đa.
                </Typography>
              </Stack>
            </Paper>

            {/* Benefits */}
            <Paper
              elevation={4}
              sx={{
                p: 4,
                mb: 4,
                borderRadius: '12px',
                background: 'linear-gradient(to bottom, #fff 0%, #ffebee 100%)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': { transform: 'translateY(-5px)', boxShadow: theme.shadows[8] },
              }}
            >
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                <Avatar sx={{ bgcolor: '#d32f2f', width: 50, height: 50 }}>
                  <DirectionsCar sx={{ fontSize: 28 }} />
                </Avatar>
                <Typography variant="h5" fontWeight={700} color="#d32f2f">
                  Lợi Ích Khi Sử Dụng Dịch Vụ
                </Typography>
              </Stack>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ bgcolor: '#e53935', width: 40, height: 40 }}>1</Avatar>
                    <Typography variant="body1" sx={{ fontSize: '16px', lineHeight: 1.8 }}>
                      Xe di chuyển nhanh chóng trong các tình huống khẩn cấp.
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ bgcolor: '#e53935', width: 40, height: 40 }}>2</Avatar>
                    <Typography variant="body1" sx={{ fontSize: '16px', lineHeight: 1.8 }}>
                      Đội ngũ y tế tận tâm, hỗ trợ suốt hành trình.
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* Right Column - Booking Process & Contact */}
          <Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' }, // dọc trên mobile, ngang trên desktop
    gap: 3, // khoảng cách giữa 2 khối
    mt: 4,
  }}
>
  {/* Booking Process */}
  <Paper
    elevation={4}
    sx={{
      flex: 1,
      p: 4,
      borderRadius: '12px',
      background: 'linear-gradient(to bottom, #ffebee 0%, #ffcdd2 100%)',
    }}
  >
    <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
      <Avatar sx={{ bgcolor: '#d32f2f', width: 50, height: 50 }}>
        <AccessTime sx={{ fontSize: 28 }} />
      </Avatar>
      <Typography variant="h5" fontWeight={700} color="#d32f2f">
        Quy Trình Đặt Xe
      </Typography>
    </Stack>
    <Stack spacing={2}>
      {[
        '1. Liên hệ qua số điện thoại hoặc email.',
        '2. Cung cấp thông tin tình huống khẩn cấp.',
        '3. Xe cấp cứu đến ngay trong thời gian ngắn nhất.',
        '4. Đội ngũ y tế hỗ trợ đến bệnh viện.',
      ].map((step, index) => (
        <Typography key={index} variant="body1" sx={{ fontSize: '16px', lineHeight: 1.8 }}>
          {step}
        </Typography>
      ))}
    </Stack>
  </Paper>

  {/* Contact Information */}
  <Paper
    elevation={4}
    sx={{
      flex: 1,
      p: 4,
      borderRadius: '12px',
      background: 'linear-gradient(to bottom, #d32f2f 0%, #b71c1c 100%)',
      color: '#fff',
    }}
  >
    <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
      Liên Hệ Với Chúng Tôi
    </Typography>
    <Stack spacing={2}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Phone sx={{ color: '#fff' }} />
        <Typography variant="body1" sx={{ fontSize: '16px' }}>
          <strong>Hotline:</strong> 0901 234 567
        </Typography>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <Email sx={{ color: '#fff' }} />
        <Typography variant="body1" sx={{ fontSize: '16px' }}>
          <strong>Email:</strong>{' '}
          <Link href="mailto:xe.cap.cuu@dichvuytebinhminh.com" sx={{ color: '#fff', textDecoration: 'underline' }}>
            xe.cap.cuu@dichvuytebinhminh.com
          </Link>
        </Typography>
      </Stack>
    </Stack>
    <Button
      variant="contained"
      sx={{
        mt: 4,
        backgroundColor: '#fff',
        color: '#d32f2f',
        fontWeight: 600,
        borderRadius: '8px',
        '&:hover': { backgroundColor: '#f5f5f5' },
        width: '100%',
        py: 1.5,
      }}
    >
      Gọi Ngay
    </Button>
  </Paper>
</Box>

        </Grid>

        {/* Image Gallery (Optional) */}
              <Box sx={{ mt: 6 }}>
        <Typography
          variant="h5"
          fontWeight={700}
          color="#d32f2f"
          sx={{ mb: 3, textAlign: 'center' }}
        >
          Hình Ảnh Xe Cấp Cứu
        </Typography>

        <Grid container spacing={2}>
          {[
            "https://binhminhmedic.com/wp-content/uploads/2025/02/z2782385020619_00255e2e322da35e7dfe570749e58ace-768x432-1.jpg",
            "https://binhminhmedic.com/wp-content/uploads/2025/02/z5482378862210_c8a7e8659250aca80e1fcebc644f7a90-768x740-1.jpg",
            "https://hyundaidongnam.com.vn/uploads/shops/solati/hyundai_solati_cuu_thuong_1_hyundai-dong-nam.jpg" 
          ].map((src, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                component="img"
                src={src}
                alt={`Xe cấp cứu ${index + 1}`}
                sx={{
                  width: '350',
                  height: { xs: 180, md: 240 },
                  objectFit: 'cover',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          ))}
        </Grid>
             </Box>
      </Container>
    </Box>
  );
};

export default ChoThueXeCapCuu;