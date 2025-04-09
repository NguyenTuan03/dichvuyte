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
      py: 8,
      background: 'linear-gradient(to bottom, #f5f7fa 0%, #e4e8ed 100%)'
    }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Paper elevation={4} sx={{ 
          p: 6, 
          mb: 8,
          borderRadius: 4,
          background: 'linear-gradient(135deg, #00796b 0%, #004d40 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            width: '40%',
            height: '100%',
            backgroundImage: 'url(/nurse-hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            [theme.breakpoints.down('md')]: {
              width: '100%',
              opacity: 0.2
            }
          }
        }}>
          <Box sx={{ 
            position: 'relative',
            zIndex: 1,
            maxWidth: isMobile ? '100%' : '55%'
          }}>
            <Typography 
              variant="h3" 
              component="h1" 
              fontWeight={700} 
              sx={{ mb: 3 }}
            >
              TUYỂN DỤNG ĐIỀU DƯỠNG VIÊN
            </Typography>
            <Typography variant="h5" sx={{ mb: 4 }}>
              Dịch Vụ Y Tế Tại Nhà Bình Minh
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '18px', lineHeight: 1.8 }}>
              Cùng chúng tôi mang đến dịch vụ chăm sóc sức khỏe chất lượng cao tại nhà cho bệnh nhân. Môi trường làm việc chuyên nghiệp với nhiều cơ hội phát triển nghề nghiệp.
            </Typography>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large" 
              sx={{ 
                mt: 4,
                px: 6,
                py: 2,
                fontSize: '16px',
                fontWeight: 600,
                animation: `${pulseAnimation} 2s infinite`
              }}
              startIcon={<Send />}
            >
              ỨNG TUYỂN NGAY
            </Button>
          </Box>
        </Paper>

        {/* Main Content */}
        <Grid container spacing={6}>
          {/* Left Column - Job Details */}
          <Grid item xs={12} md={8}>
            {/* Job Description */}
            <Paper elevation={3} sx={{ 
              p: 5, 
              mb: 6,
              borderRadius: 3,
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: theme.shadows[6]
              }
            }}>
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
                <Avatar sx={{ 
                  bgcolor: theme.palette.secondary.main, 
                  width: 60, 
                  height: 60 
                }}>
                  <MedicalServices sx={{ fontSize: 32 }} />
                </Avatar>
                <Typography variant="h4" component="h2" fontWeight={700}>
                  Mô Tả Công Việc
                </Typography>
              </Stack>
              
              <Stack spacing={2}>
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
                      mr: 2 
                    }} />
                    <Typography variant="body1" sx={{ fontSize: '17px' }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Paper>

            {/* Requirements */}
            <Paper elevation={3} sx={{ 
              p: 5, 
              mb: 6,
              borderRadius: 3,
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: theme.shadows[6]
              }
            }}>
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
                <Avatar sx={{ 
                  bgcolor: theme.palette.error.main, 
                  width: 60, 
                  height: 60 
                }}>
                  <School sx={{ fontSize: 32 }} />
                </Avatar>
                <Typography variant="h4" component="h2" fontWeight={700}>
                  Yêu Cầu Ứng Viên
                </Typography>
              </Stack>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
  {/* Bằng cấp */}
  <Box sx={{ flex: '1 1 45%', minWidth: '250px' }}>
    <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
      <Box component="span" sx={{ color: 'primary.main' }}>✓</Box> Bằng cấp
    </Typography>
    <Typography variant="body1" sx={{ fontSize: '17px' }}>
      Tốt nghiệp Trung cấp/Cao đẳng/Đại học chuyên ngành Điều dưỡng
    </Typography>
  </Box>

  {/* Kinh nghiệm */}
  <Box sx={{ flex: '1 1 45%', minWidth: '250px' }}>
    <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
      <Box component="span" sx={{ color: 'primary.main' }}>✓</Box> Kinh nghiệm
    </Typography>
    <Typography variant="body1" sx={{ fontSize: '17px' }}>
      Ưu tiên có kinh nghiệm tại bệnh viện hoặc chăm sóc tại nhà
    </Typography>
  </Box>

  {/* Kỹ năng */}
  <Box sx={{ flex: '1 1 45%', minWidth: '250px' }}>
    <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
      <Box component="span" sx={{ color: 'primary.main' }}>✓</Box> Kỹ năng
    </Typography>
    <Typography variant="body1" sx={{ fontSize: '17px' }}>
      Thành thạo các kỹ thuật điều dưỡng cơ bản
    </Typography>
  </Box>

  {/* Phẩm chất */}
  <Box sx={{ flex: '1 1 45%', minWidth: '250px' }}>
    <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
      <Box component="span" sx={{ color: 'primary.main' }}>✓</Box> Phẩm chất
    </Typography>
    <Typography variant="body1" sx={{ fontSize: '17px' }}>
      Tận tâm, trách nhiệm, yêu nghề
    </Typography>
  </Box>
</Box>

            </Paper>
          </Grid>

          {/* Right Column - Benefits & Info */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4, marginBottom :'20px' }}>
  {/* Benefits */}
  <Box sx={{ flex: '1 1 30%', minWidth: '300px', height: '100%' }}>
    <Paper elevation={3} sx={{ 
      p: 4, 
      mb: 4,
      borderRadius: 3,
      background: 'linear-gradient(to bottom, #e3f2fd 0%, #bbdefb 100%)',
      height: '100%'  // Make sure the Paper takes the full height of its container
    }}>
      <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
        <AttachMoney sx={{ 
          fontSize: 40, 
          color: theme.palette.success.dark 
        }} />
        <Typography variant="h4" component="h3" fontWeight={700}>
          Quyền Lợi
        </Typography>
      </Stack>

      <Stack spacing={2}>
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
              width: 24, 
              height: 24, 
              bgcolor: 'success.main', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              mr: 2
            }}>
              <Typography variant="body2" sx={{ color: 'white' }}>
                {index + 1}
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ fontSize: '16px' }}>
              {item}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Paper>
  </Box>

  {/* Work Info */}
  <Box sx={{ flex: '1 1 30%', minWidth: '300px', height: '100%' }}>
    <Paper elevation={3} sx={{ 
      p: 4, 
      mb: 4,
      borderRadius: 3,
      background: 'linear-gradient(to bottom, #fff8e1 0%, #ffecb3 100%)',
      height: '100%'  // Make sure the Paper takes the full height of its container
    }}>
      <Stack spacing={3}>
        {/* Location */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
          <LocationOn sx={{ 
            fontSize: 30, 
            color: theme.palette.error.main,
            mr: 2,
            mt: 0.5
          }} />
          <Box>
            <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
              Địa Điểm Làm Việc
            </Typography>
            <Typography variant="body1">
              Hồ Chí Minh: 104/49 Thành Thái, P.12, Q.10
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Hà Nội: Liên hệ để biết thêm chi tiết
            </Typography>
          </Box>
        </Box>

        {/* Time */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
          <AccessTime sx={{ 
            fontSize: 30, 
            color: theme.palette.info.main,
            mr: 2,
            mt: 0.5
          }} />
          <Box>
            <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
              Thời Gian Làm Việc
            </Typography>
            <Typography variant="body1">
              Linh hoạt 8h/ngày (có ca sáng/chiều)
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Nghỉ 6 ngày/tháng
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Paper>
  </Box>

  {/* Apply Now */}
  <Box sx={{ flex: '1 1 30%', minWidth: '300px', textAlign: 'center', height: '100%' }}>
    <Paper elevation={3} sx={{ 
      p: 4,
      borderRadius: 3,
      background: 'linear-gradient(to bottom, #e8f5e9 0%, #c8e6c9 100%)',
      height: '100%'  // Make sure the Paper takes the full height of its container
    }}>
      <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
        Ứng Tuyển Ngay
      </Typography>

      <Stack spacing={2} sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Phone sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="body1">
            0976 858 115
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Email sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="body1">
            tuyendung@dichvuytebinhminh.com
          </Typography>
        </Box>
      </Stack>

      <Button 
        variant="contained" 
        color="primary" 
        size="large" 
        fullWidth
        sx={{ 
          py: 2,
          fontSize: '16px',
          fontWeight: 600
        }}
        startIcon={<Send />}
      >
        Nộp Hồ Sơ Online
      </Button>
    </Paper>
  </Box>
            </Box>



        </Grid>
      </Container>
    </Box>
  );
};

export default Tuyendung;