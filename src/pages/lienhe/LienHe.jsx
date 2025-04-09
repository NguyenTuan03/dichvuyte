import React from 'react';
import { Box, Typography, Stack, Link, IconButton, Divider, TextField, Button, Paper, Container, Select, InputLabel, FormControl, MenuItem } from '@mui/material';
import { Facebook, YouTube, Phone, Email, Chat, LocationOn, AccessTime, MedicalServices } from '@mui/icons-material';

const services = [
  {
    title: 'KHÁM BỆNH TẠI NHÀ',
    description: 'Đội ngũ bác sĩ chuyên khoa đến tận nhà thăm khám, chẩn đoán và tư vấn điều trị',
    icon: <MedicalServices sx={{ color: '#2c6f4b', fontSize: '40px' }} />,
  },
  {
    title: 'TRUYỀN DỊCH',
    description: 'Thực hiện truyền dịch, tiêm thuốc theo chỉ định của bác sĩ tại nhà',
    icon: <MedicalServices sx={{ color: '#2c6f4b', fontSize: '40px' }} />,
  },
  {
    title: 'XÉT NGHIỆM',
    description: 'Lấy mẫu xét nghiệm tại nhà, trả kết quả nhanh chóng qua email/zalo',
    icon: <MedicalServices sx={{ color: '#2c6f4b', fontSize: '40px' }} />,
  },
  {
    title: 'CHĂM SÓC ĐẶC BIỆT',
    description: 'Chăm sóc bệnh nhân sau mổ, người già, bệnh nhân cần theo dõi đặc biệt',
    icon: <MedicalServices sx={{ color: '#2c6f4b', fontSize: '40px' }} />,
  },
];

const reasons = [
  { 
    title: "Tiết Kiệm Thời Gian", 
    description: "Không cần phải ra ngoài, bác sĩ sẽ đến tận nhà bạn, giúp bạn tiết kiệm thời gian và công sức." 
  },
  { 
    title: "Tiện Lợi", 
    description: "Dịch vụ tại nhà mang đến sự tiện lợi tối đa, bạn có thể chăm sóc sức khỏe ngay tại nơi ở của mình." 
  },
  { 
    title: "Chất Lượng Chăm Sóc Cao", 
    description: "Các bác sĩ và nhân viên y tế đều có trình độ chuyên môn cao, đảm bảo chất lượng chăm sóc tốt nhất." 
  },
  { 
    title: "Linh Hoạt Trong Việc Đặt Lịch", 
    description: "Dịch vụ sẵn sàng 24/7, bạn có thể chủ động đặt lịch khám theo thời gian mình muốn." 
  },
];

export default function LienHe() {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', py: 8 }}>
      <Container maxWidth="lg">
        {/* Title Section */}
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: '#2c6f4b',
            textAlign: 'center',
            mb: 10,
            '&::after': {
              content: '""',
              display: 'block',
              width: '100px',
              height: '4px',
              backgroundColor: '#ffb236',
              margin: '16px auto 0',
            },
          }}
        >
          DỊCH VỤ Y TẾ TẠI NHÀ - LIÊN HỆ VỚI CHÚNG TÔI
        </Typography>

        {/* Reasons to Choose Us Section */}
        <Box sx={{ mb: 15 }}>
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{
              textAlign: 'center',
              mb: 3,
              color: '#005662',
            }}
          >
            TẠI SAO CHỌN DỊCH VỤ Y TẾ TẠI NHÀ CỦA CHÚNG TÔI?
          </Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="center">
            {reasons.map((reason, index) => (
              <Box key={index} sx={{ textAlign: 'center' }}>
                <Paper elevation={2} sx={{ p: 3, height: '100%', borderTop: '4px solid #2c6f4b' }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                    {reason.title}
                  </Typography>
                  <Typography sx={{ fontSize: '16px' }}>
                    {reason.description}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Contact Information Section */}
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
  {/* Contact Information */}
  <Box flex={1} sx={{ minHeight: '400px' }}>
    <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
    <Typography variant="h4" fontWeight={700} sx={{ mb: 3, color: '#00796b' }}>
  Chào mừng đến với dịch vụ của chúng tôi
</Typography>
<Typography variant="body1" sx={{ mb: 3, fontSize: '18px', lineHeight: '1.6' }}>
  Chúng tôi cung cấp các dịch vụ y tế chuyên nghiệp tại nhà, nhằm mang đến sự chăm sóc tận tình cho từng bệnh nhân.
</Typography>
<Typography variant="h6" fontWeight={600} sx={{ mb: 3, color: '#004d40' }}>
  Thông tin chi tiết
</Typography>
<Typography variant="body2" sx={{ mb: 3, fontSize: '14px', color: '#333', lineHeight: '1.5' }}>
  Chúng tôi cam kết cung cấp dịch vụ chất lượng với đội ngũ bác sĩ và nhân viên y tế có kinh nghiệm, tận tâm phục vụ.
</Typography>
<Typography variant="h6" fontWeight={600} sx={{ mb: 3, color: '#004d40'}}>
  Liên hệ với chúng tôi để được tư vấn
</Typography>
<Typography variant="body1" sx={{ mb: 3, fontSize: '16px', lineHeight: '1.8', textAlign: 'center', color: '#333' }}>
  Chúng tôi luôn sẵn sàng giải đáp mọi thắc mắc và cung cấp thông tin chi tiết về các dịch vụ y tế mà chúng tôi cung cấp. Hãy liên hệ ngay để được hỗ trợ.
</Typography>


      <Stack spacing={2}>
        <Box display="flex" alignItems="center">
          <LocationOn sx={{ mr: 2, color: '#00c4b4', fontSize: '30px' }} />
          <Typography sx={{ fontSize: '16px' }}>50 Lê Văn Việt, Hiệp Phú, Thủ Đức, TP.HCM</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Email sx={{ mr: 2, color: '#00c4b4', fontSize: '30px' }} />
          <Link href="mailto:taihungqy2@gmail.com" color="#000" underline="hover" sx={{ fontSize: '16px' }}>
            taihungqy2@gmail.com
          </Link>
        </Box>
        <Box display="flex" alignItems="center">
          <Phone sx={{ mr: 2, color: '#00c4b4', fontSize: '30px' }} />
          <Link href="tel:0964345344" color="#000" underline="hover" sx={{ fontSize: '16px' }}>
            0964 345 344
          </Link>
        </Box>
        <Box display="flex" alignItems="center">
          <AccessTime sx={{ mr: 2, color: '#00c4b4', fontSize: '30px' }} />
          <Typography sx={{ fontSize: '16px' }}>Đặt lịch: 24/7</Typography>
        </Box>
      </Stack>

      <Stack direction="row" spacing={2} mt={4}>
        <IconButton href="https://www.facebook.com/muavui.nguoi.12139862" target="_blank" sx={{ color: '#000', fontSize: '30px' }}>
          <Facebook />
        </IconButton>
        <IconButton href="https://www.youtube.com/@TaiHungNguyen" target="_blank" sx={{ color: '#000', fontSize: '30px' }}>
          <YouTube />
        </IconButton>
        <IconButton href="https://www.tiktok.com/@nguyentaihungqy" target="_blank" sx={{ color: '#000', fontSize: '30px' }}>
          <Chat />
        </IconButton>
      </Stack>
    </Paper>
  </Box>

  {/* Contact Form */}
  <Box flex={1} sx={{ minHeight: '400px' }}>
    <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
      <Typography variant="h5" fontWeight={700} sx={{ mb: 3, color: '#005662' }}>
        Đặt Lịch Khám
      </Typography>
      <form>
      <Stack spacing={3}>
      {/* Name Field */}
      <TextField label="Họ và tên" variant="outlined" fullWidth required sx={{ backgroundColor: '#fff' }} />

      {/* Phone Number Field */}
      <TextField label="Số điện thoại" variant="outlined" fullWidth required sx={{ backgroundColor: '#fff' }} />

      {/* Email Field */}
      <TextField label="Email" variant="outlined" fullWidth required sx={{ backgroundColor: '#fff' }} />

      {/* Request Field */}
      <TextField label="Yêu cầu" variant="outlined" fullWidth multiline rows={4} required sx={{ backgroundColor: '#fff' }} />

      {/* Date Field */}
      <TextField
        label="Chọn ngày"
        type="date"
        variant="outlined"
        fullWidth
        required
        sx={{ backgroundColor: '#fff' }}
        InputLabelProps={{
          shrink: true,
        }}
      />

      {/* Time Selection Field */}
      <FormControl fullWidth required>
        <InputLabel>Chọn giờ</InputLabel>
        <Select label="Chọn giờ" defaultValue="" sx={{ backgroundColor: '#fff' }}>
          <MenuItem value={1}>8:00 AM</MenuItem>
          <MenuItem value={2}>9:00 AM</MenuItem>
          <MenuItem value={3}>10:00 AM</MenuItem>
          <MenuItem value={4}>11:00 AM</MenuItem>
          <MenuItem value={5}>1:00 PM</MenuItem>
          <MenuItem value={6}>2:00 PM</MenuItem>
          <MenuItem value={7}>3:00 PM</MenuItem>
        </Select>
      </FormControl>

      {/* Location Selection Field */}
      <FormControl fullWidth required>
        <InputLabel>Chọn địa điểm</InputLabel>
        <Select label="Chọn địa điểm" defaultValue="" sx={{ backgroundColor: '#fff' }}>
          <MenuItem value={1}>50 Lê Văn Việt, Hiệp Phú, Thủ Đức, TP.HCM</MenuItem>
          <MenuItem value={2}>123 Nguyễn Văn Cừ, Quận 5, TP.HCM</MenuItem>
          <MenuItem value={3}>45 Phan Đình Phùng, Quận 3, TP.HCM</MenuItem>
          <MenuItem value={4}>78 Lý Tự Trọng, Quận 1, TP.HCM</MenuItem>
        </Select>
      </FormControl>

      {/* Submit Button */}
      <Button variant="contained" color="primary" type="submit" sx={{ padding: '12px 25px', fontSize: '16px' }}>
        Gửi
      </Button>
    </Stack>
      </form>
    </Paper>
  </Box>
</Stack>


        <Divider sx={{ my: 4, mt:15 }} />

        {/* Service Information Section */}
        <Typography variant="h5" align="center" fontWeight={700} sx={{ mb: 3, color: '#005662' }}>
          Dịch Vụ Y Tế Tại Nhà
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ fontSize: '16px', lineHeight: '1.8' }}>
          Dịch vụ y tế tại nhà của chúng tôi cung cấp các dịch vụ chăm sóc sức khỏe chất lượng, tiện lợi và an toàn ngay tại ngôi nhà của bạn.
          Các dịch vụ bao gồm:
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Box key={index} sx={{ flex: 1, textAlign: 'center' }}>
              <Paper elevation={2} sx={{ p: 3, height: '100%', borderTop: '4px solid #2c6f4b' }}>
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                  <Box
                    sx={{
                      backgroundColor: '#e8f5e9',
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto',
                    }}
                  >
                    {service.icon}
                  </Box>
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                  {service.title}
                </Typography>
                <Typography>{service.description}</Typography>
              </Paper>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
