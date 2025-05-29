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
    <Box sx={{ background: 'linear-gradient(to bottom, #f5f5f5 0%, #e0e0e0 100%)', py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        {/* Hero Section with Image */}
        <Paper
          elevation={6}
          sx={{
            p: { xs: 2, sm: 4, md: 6 },
            mb: { xs: 4, md: 8 },
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #00796b 0%, #004d40 100%)',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              right: 0,
              width: { xs: '100%', md: '50%' },
              height: '100%',
              backgroundImage: 'url(/ambulance-hero.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: { xs: 0.3, md: 0.9 },
            },
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 1, maxWidth: { xs: '100%', md: '50%' } }}>
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{
                mb: 3,
                fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
              }}
            >
              Dịch Vụ Cho Thuê Xe Cấp Cứu
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '16px', md: '18px' },
                lineHeight: 1.6,
                mb: 3,
              }}
            >
              Hỗ trợ vận chuyển bệnh nhân khẩn cấp 24/7 với đội ngũ y tế chuyên nghiệp và xe được trang bị hiện đại.
            </Typography>
            <Button
              variant="contained"
              href="tel:0901234567"
              sx={{
                mt: 2,
                px: { xs: 4, md: 6 },
                py: { xs: 1, md: 1.5 },
                backgroundColor: '#fff',
                color: 'black',
                fontWeight: 600,
                borderRadius: '8px',
                fontSize: { xs: '14px', md: '16px' },
                '&:hover': { backgroundColor: '#f5f5f5' },
                animation: { xs: 'none', md: `${pulseAnimation} 2s infinite` }, // Disable animation on mobile
              }}
            >
              Đặt Xe Ngay
            </Button>
          </Box>
        </Paper>

        {/* Main Content */}
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {/* Left Column - Service Details & Benefits */}
          <Grid item xs={12} md={8}>
            {/* Service Details */}
            <Paper
              elevation={4}
              sx={{
                p: { xs: 3, md: 4 },
                mb: 4,
                width: '100%', // Fix hardcoded width
                borderRadius: '12px',
                borderLeft: '6px solid #00796b',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: { xs: 'none', md: 'translateY(-5px)' }, // Disable transform on mobile
                  boxShadow: { md: theme.shadows[8] },
                },
              }}
            >
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                <Avatar sx={{ bgcolor: '#00796b', width: { xs: 40, md: 50 }, height: { xs: 40, md: 50 } }}>
                  <LocalHospital sx={{ fontSize: { xs: 24, md: 28 } }} />
                </Avatar>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  color="black"
                  sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}
                >
                  Mô Tả Dịch Vụ
                </Typography>
              </Stack>
              <Stack spacing={1.5}>
                <Typography variant="body1" sx={{ fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.8 }}>
                  - Xe cấp cứu được trang bị máy thở, máy điện tim, bình oxy và các thiết bị y tế cần thiết.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.8 }}>
                  - Đội ngũ y tế chuyên nghiệp luôn sẵn sàng hỗ trợ trong mọi tình huống.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.8 }}>
                  - Dịch vụ 24/7 với thời gian đáp ứng nhanh chóng, đảm bảo an toàn tối đa.
                </Typography>
              </Stack>
            </Paper>

            {/* Benefits */}
            <Paper
              elevation={4}
              sx={{
                p: { xs: 3, md: 4 },
                mb: 4,
                borderRadius: '12px',
                background: 'linear-gradient(to bottom, #fff 0%, #ffebee 100%)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: { xs: 'none', md: 'translateY(-5px)' },
                  boxShadow: { md: theme.shadows[8] },
                },
              }}
            >
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                <Avatar sx={{ bgcolor: '#00796b', width: { xs: 40, md: 50 }, height: { xs: 40, md: 50 } }}>
                  <DirectionsCar sx={{ fontSize: { xs: 24, md: 28 } }} />
                </Avatar>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  color="#00796b"
                  sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}
                >
                  Lợi Ích Khi Sử Dụng Dịch Vụ
                </Typography>
              </Stack>
              <Grid container spacing={{ xs: 2, md: 3 }}>
                <Grid item xs={12} sm={6}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Avatar sx={{ bgcolor: '#00796b', width: { xs: 32, md: 40 }, height: { xs: 32, md: 40 } }}>
                      1
                    </Avatar>
                    <Typography variant="body1" sx={{ fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.8 }}>
                      Xe di chuyển nhanh chóng trong các tình huống khẩn cấp.
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Avatar sx={{ bgcolor: '#00796b', width: { xs: 32, md: 40 }, height: { xs: 32, md: 40 } }}>
                      2
                    </Avatar>
                    <Typography variant="body1" sx={{ fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.8 }}>
                      Đội ngũ y tế tận tâm, hỗ trợ suốt hành trình.
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* Right Column - Booking Process & Contact */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { md: "row", xs: "column" },
                gap: { xs: 3, md: 4 },
              }}
            >
              {/* Booking Process */}
              <Paper
                elevation={4}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: '12px',
                  background: 'linear-gradient(to bottom, #ffebee 0%, #00796b 100%)',
                }}
              >
                <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                  <Avatar sx={{ bgcolor: '#00796b', width: { xs: 40, md: 50 }, height: { xs: 40, md: 50 } }}>
                    <AccessTime sx={{ fontSize: { xs: 24, md: 28 } }} />
                  </Avatar>
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    color="#00796b"
                    sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}
                  >
                    Quy Trình Đặt Xe
                  </Typography>
                </Stack>
                <Stack spacing={1.5}>
                  {[
                    '1. Liên hệ qua số điện thoại hoặc email.',
                    '2. Cung cấp thông tin tình huống khẩn cấp.',
                    '3. Xe cấp cứu đến ngay trong thời gian ngắn nhất.',
                    '4. Đội ngũ y tế hỗ trợ đến bệnh viện.',
                  ].map((step, index) => (
                    <Typography
                      key={index}
                      variant="body1"
                      sx={{ fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.8 }}
                    >
                      {step}
                    </Typography>
                  ))}
                </Stack>
              </Paper>

              {/* Contact Information */}
              <Paper
                elevation={4}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: '12px',
                  background: 'linear-gradient(to bottom, #26c4b2 0%, #515858 100%)',
                  color: '#fff',
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight={700}
                  sx={{ mb: 2, fontSize: { xs: '1.25rem', md: '1.5rem' } }}
                >
                  Liên Hệ Với Chúng Tôi
                </Typography>
                <Stack spacing={1.5}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Phone sx={{ color: '#fff', fontSize: { xs: 20, md: 24 } }} />
                    <Typography variant="body1" sx={{ fontSize: { xs: '14px', md: '16px' } }}>
                      <strong>Hotline:</strong> 0901 234 567
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Email sx={{ color: '#fff', fontSize: { xs: 20, md: 24 } }} />
                    <Typography variant="body1" sx={{ fontSize: { xs: '14px', md: '16px' } }}>
                      <strong>Email:</strong>{' '}
                      <Link
                        href="mailto:xe.cap.cuu@dichvuytebinhminh.com"
                        sx={{ color: '#fff', textDecoration: 'underline', fontSize: { xs: '14px', md: '16px' } }}
                      >
                        xe.cap.cuu@dichvuytebinhminh.com
                      </Link>
                    </Typography>
                  </Stack>
                </Stack>
                <Button
                  variant="contained"
                  href="tel:0901234567"
                  sx={{
                    mt: 3,
                    backgroundColor: '#fff',
                    color: '#00796b',
                    fontWeight: 600,
                    borderRadius: '8px',
                    width: '100%',
                    py: { xs: 1, md: 1.5 },
                    fontSize: { xs: '14px', md: '16px' },
                    '&:hover': { backgroundColor: '#f5f5f5' },
                  }}
                >
                  Gọi Ngay
                </Button>
              </Paper>
            </Box>
          </Grid>
        </Grid>

        {/* Image Gallery */}
        <Box sx={{ mt: { xs: 4, md: 6 } }}>
          <Typography
            variant="h5"
            fontWeight={700}
            color="#00796b"
            sx={{ mb: 3, textAlign: 'center', fontSize: { xs: '1.25rem', md: '1.5rem' } }}
          >
            Hình Ảnh Xe Cấp Cứu
          </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
            {[
              "https://binhminhmedic.com/wp-content/uploads/2025/02/z2782385020619_00255e2e322da35e7dfe570749e58ace-768x432-1.jpg",
              "https://binhminhmedic.com/wp-content/uploads/2025/02/z5482378862210_c8a7e8659250aca80e1fcebc644f7a90-768x740-1.jpg",
              "https://hyundaidongnam.com.vn/uploads/shops/solati/hyundai_solati_cuu_thuong_1_hyundai-dong-nam.jpg",
            ].map((src, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  component="img"
                  src={src}
                  alt={`Xe cấp cứu ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: { xs: '180px', md: '240px' },
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