import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Button, 
  Paper, 
  Stack, 
  Avatar,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  MedicalServices,
  Work,
  School,
  AttachMoney,
  LocationOn,
  AccessTime,
  Email,
  Phone,
  Send
} from '@mui/icons-material';
import { keyframes } from '@emotion/react';

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const Tuyendung = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ 
      py: { xs: 4, md: 8 },
      background: 'linear-gradient(to bottom, #f5f7fa 0%, #e4e8ed 100%)'
    }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Paper elevation={4} sx={{ 
          p: { xs: 3, sm: 4, md: 6 },
          mb: { xs: 4, md: 8 },
          borderRadius: 3,
          background: 'linear-gradient(135deg, #00796b 0%, #004d40 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            width: { xs: '100%', md: '40%' },
            height: '100%',
            backgroundImage: 'url(/nurse-hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: { xs: 0.2, md: 1 },
          }
        }}>
          <Box sx={{ 
            position: 'relative',
            zIndex: 1,
            maxWidth: { xs: '100%', md: '55%' }
          }}>
            <Typography 
              variant="h3" 
              component="h1" 
              fontWeight={700} 
              sx={{ 
                mb: 2,
                fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }
              }}
            >
              TUYỂN DỤNG ĐIỀU DƯỠNG VIÊN
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 3,
                fontSize: { xs: '1.25rem', md: '1.5rem' }
              }}
            >
              Dịch Vụ Y Tế Tại Nhà Bình Minh
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: { xs: '16px', md: '18px' },
                lineHeight: 1.8 
              }}
            >
              Cùng chúng tôi mang đến dịch vụ chăm sóc sức khỏe chất lượng cao tại nhà cho bệnh nhân. Môi trường làm việc chuyên nghiệp với nhiều cơ hội phát triển nghề nghiệp.
            </Typography>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large" 
              href="mailto:tuyendung@dichvuytebinhminh.com"
              sx={{ 
                mt: 3,
                px: { xs: 4, md: 6 },
                py: { xs: 1, md: 2 },
                fontSize: { xs: '14px', md: '16px' },
                fontWeight: 600,
                animation: { xs: 'none', md: `${pulseAnimation} 2s infinite` }, // Disable animation on mobile
                '&:hover': { bgcolor: theme.palette.secondary.dark }
              }}
              startIcon={<Send />}
            >
              ỨNG TUYỂN NGAY
            </Button>
          </Box>
        </Paper>

        {/* Main Content */}
        <Grid container spacing={{ xs: 3, md: 6 }}>
          {/* Left Column - Job Details */}
          <Grid item xs={12} md={8}>
            {/* Job Description */}
            <Paper elevation={3} sx={{ 
              p: { xs: 3, md: 5 },
              mb: { xs: 3, md: 6 },
              borderRadius: 2,
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: { xs: 'none', md: 'translateY(-5px)' }, // Disable transform on mobile
                boxShadow: { md: theme.shadows[6] }
              }
            }}>
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: { xs: 2, md: 4 } }}>
                <Avatar sx={{ 
                  bgcolor: theme.palette.secondary.main, 
                  width: { xs: 48, md: 60 }, 
                  height: { xs: 48, md: 60 }
                }}>
                  <MedicalServices sx={{ fontSize: { xs: 24, md: 32 } }} />
                </Avatar>
                <Typography 
                  variant="h4" 
                  component="h2" 
                  fontWeight={700}
                  sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
                >
                  Mô Tả Công Việc
                </Typography>
              </Stack>
              
              <Stack spacing={1.5}>
                {[
                  "Chăm sóc bệnh nhân tại nhà: tiêm truyền, thay băng, hỗ trợ thở, hút đờm",
                  "Thực hiện các y lệnh điều trị từ bác sĩ",
                  "Theo dõi và ghi chép tình trạng bệnh nhân",
                  "Hướng dẫn người nhà cách chăm sóc bệnh nhân",
                  "Tuân thủ quy định về y đức và quy trình kỹ thuật"
                ].map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Box sx={{ 
                      width: 8, 
                      height: 8, 
                      bgcolor: 'primary.main', 
                      borderRadius: '50%', 
                      mt: 1, 
                      mr: 1.5 
                    }} />
                    <Typography 
                      variant="body1" 
                      sx={{ fontSize: { xs: '15px', md: '17px' } }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Paper>

            {/* Requirements */}
            <Paper elevation={3} sx={{ 
              p: { xs: 3, md: 5 },
              mb: { xs: 3, md: 6 },
              borderRadius: 2,
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: { xs: 'none', md: 'translateY(-5px)' },
                boxShadow: { md: theme.shadows[6] }
              }
            }}>
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: { xs: 2, md: 4 } }}>
                <Avatar sx={{ 
                  bgcolor: theme.palette.error.main, 
                  width: { xs: 48, md: 60 }, 
                  height: { xs: 48, md: 60 }
                }}>
                  <School sx={{ fontSize: { xs: 24, md: 32 } }} />
                </Avatar>
                <Typography 
                  variant="h4" 
                  component="h2" 
                  fontWeight={700}
                  sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
                >
                  Yêu Cầu Ứng Viên
                </Typography>
              </Stack>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 2, md: 3 } }}>
                {[
                  { title: "Bằng cấp", text: "Tốt nghiệp Trung cấp/Cao đẳng/Đại học chuyên ngành Điều dưỡng" },
                  { title: "Kinh nghiệm", text: "Ưu tiên có kinh nghiệm tại bệnh viện hoặc chăm sóc tại nhà" },
                  { title: "Kỹ năng", text: "Thành thạo các kỹ thuật điều dưỡng cơ bản" },
                  { title: "Phẩm chất", text: "Tận tâm, trách nhiệm, yêu nghề" }
                ].map((item, index) => (
                  <Box key={index} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%' }, minWidth: '200px' }}>
                    <Typography 
                      variant="h6" 
                      fontWeight={600} 
                      sx={{ 
                        mb: 1,
                        fontSize: { xs: '1rem', md: '1.25rem' }
                      }}
                    >
                      <Box component="span" sx={{ color: 'primary.main' }}>✓</Box> {item.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ fontSize: { xs: '15px', md: '17px' } }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>

          {/* Right Column - Benefits & Info */}
          <Grid item xs={12} md={4}>
            <Stack spacing={{ xs: 3, md: 4 }}>
              {/* Benefits */}
              <Paper elevation={3} sx={{ 
                p: { xs: 3, md: 4 },
                borderRadius: 2,
                background: 'linear-gradient(to bottom, #e3f2fd 0%, #bbdefb 100%)'
              }}>
                <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: { xs: 2, md: 3 } }}>
                  <AttachMoney sx={{ 
                    fontSize: { xs: 32, md: 40 }, 
                    color: theme.palette.success.dark 
                  }} />
                  <Typography 
                    variant="h4" 
                    component="h3" 
                    fontWeight={700}
                    sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
                  >
                    Quyền Lợi
                  </Typography>
                </Stack>
                <Stack spacing={1.5}>
                  {[
                    "Lương từ 8-20 triệu (thỏa thuận theo năng lực)",
                    "Thưởng theo hiệu suất và thâm niên",
                    "Bảo hiểm đầy đủ theo luật lao động",
                    "Đào tạo nâng cao nghiệp vụ",
                    "Môi trường làm việc chuyên nghiệp",
                    "Cơ hội thăng tiến rõ ràng"
                  ].map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ 
                        width: { xs: 20, md: 24 }, 
                        height: { xs: 20, md: 24 }, 
                        bgcolor: 'success.main', 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        mr: 1.5
                      }}>
                        <Typography 
                          variant="body2" 
                          sx={{ color: 'white', fontSize: { xs: '12px', md: '14px' } }}
                        >
                          {index + 1}
                        </Typography>
                      </Box>
                      <Typography 
                        variant="body1" 
                        sx={{ fontSize: { xs: '14px', md: '16px' } }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Paper>

              {/* Work Info */}
              <Paper elevation={3} sx={{ 
                p: { xs: 3, md: 4 },
                borderRadius: 2,
                background: 'linear-gradient(to bottom, #fff8e1 0%, #ffecb3 100%)'
              }}>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <LocationOn sx={{ 
                      fontSize: { xs: 24, md: 30 }, 
                      color: theme.palette.error.main,
                      mr: 1.5,
                      mt: 0.5
                    }} />
                    <Box>
                      <Typography 
                        variant="h6" 
                        fontWeight={600} 
                        sx={{ 
                          mb: 1,
                          fontSize: { xs: '1rem', md: '1.25rem' }
                        }}
                      >
                        Địa Điểm Làm Việc
                      </Typography>
                      <Typography 
                        variant="body1"
                        sx={{ fontSize: { xs: '14px', md: '16px' } }}
                      >
                        Hồ Chí Minh: 104/49 Thành Thái, P.12, Q.10
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          mt: 1,
                          fontSize: { xs: '14px', md: '16px' }
                        }}
                      >
                        Hà Nội: Liên hệ để biết thêm chi tiết
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <AccessTime sx={{ 
                      fontSize: { xs: 24, md: 30 }, 
                      color: theme.palette.info.main,
                      mr: 1.5,
                      mt: 0.5
                    }} />
                    <Box>
                      <Typography 
                        variant="h6" 
                        fontWeight={600} 
                        sx={{ 
                          mb: 1,
                          fontSize: { xs: '1rem', md: '1.25rem' }
                        }}
                      >
                        Thời Gian Làm Việc
                      </Typography>
                      <Typography 
                        variant="body1"
                        sx={{ fontSize: { xs: '14px', md: '16px' } }}
                      >
                        Linh hoạt 8h/ngày (có ca sáng/chiều)
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          mt: 1,
                          fontSize: { xs: '14px', md: '16px' }
                        }}
                      >
                        Nghỉ 6 ngày/tháng
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Paper>

              {/* Apply Now */}
              <Paper elevation={3} sx={{ 
                p: { xs: 3, md: 4 },
                borderRadius: 2,
                background: 'linear-gradient(to bottom, #e8f5e9 0%, #c8e6c9 100%)'
              }}>
                <Typography 
                  variant="h5" 
                  fontWeight={700} 
                  sx={{ 
                    mb: 2,
                    textAlign: 'center',
                    fontSize: { xs: '1.25rem', md: '1.5rem' }
                  }}
                >
                  Ứng Tuyển Ngay
                </Typography>
                <Stack spacing={1.5} sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Phone sx={{ mr: 1, color: 'primary.main', fontSize: { xs: 20, md: 24 } }} />
                    <Typography 
                      variant="body1"
                      sx={{ fontSize: { xs: '14px', md: '16px' } }}
                    >
                      0976 858 115
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Email sx={{ mr: 1, fontSize: { xs: 20, md: 24 } }} />
                    <Typography 
                      variant="body1"
                      sx={{ fontSize: { xs: '14px', md: '16px' } }}
                    >
                      tuyendung@dichvuytebinhminh.com
                    </Typography>
                  </Box>
                </Stack>
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large" 
                  fullWidth
                  href="mailto:tuyendung@dichvuytebinhminh.com"
                  sx={{ 
                    py: { xs: 1, md: 2 },
                    fontSize: { xs: '14px', md: '16px' },
                    fontWeight: 600,
                    '&:hover': { bgcolor: theme.palette.primary.dark }
                  }}
                  startIcon={<Send />}
                >
                  Nộp Hồ Sơ Online
                </Button>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Tuyendung;