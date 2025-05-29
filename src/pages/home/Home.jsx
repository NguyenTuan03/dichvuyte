import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Home() {
  return (
    <Box bgcolor={'rgba(232, 240, 241, 1)'} width="100%">
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems="center"
          spacing={4}
          py={4}
        >
          <Stack flex={1} spacing={2}>
            <Typography fontWeight="bold" fontSize={{ xs: '36px', md: '64px' }}>
              Dịch vụ Y Tế Bình Minh
            </Typography>
            <Typography color="#808080">
              là đơn vị chuyên dịch vụ chăm sóc sức khỏe tiên phong tập trung vào việc cải thiện chất lượng cuộc sống cho người bệnh thông qua các giải pháp chăm sóc tại nhà, cơ sở y tế
            </Typography>
            <Typography color="#808080">
              cung cấp các thiết bị cần thiết và vận chuyển phục vụ bệnh nhân. Với phương châm: ”Tận tình chu đáo như người thân” chúng tôi mong muốn sẽ đem đến sự an tâm tin tưởng cho mọi khách hàng!
            </Typography>
            <Button
              href="tel:0964345344"
              size="medium"
              sx={{
                width: { xs: '100%', sm: '50%' },
                borderRadius: '99px',
                backgroundColor: '#ff8484',
                padding: '14px 30px',
                color: '#fff',
                mt: 2,
                '&:hover': {
                  backgroundColor: '#ff6b6b',
                },
              }}
            >
              Đặt lịch
            </Button>
          </Stack>
          <Box flex={1} maxWidth={{ xs: '100%', md: '700px' }}>
            <img
              src="/doctor.png"
              alt="Doctor illustration"
              width="100%"
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
