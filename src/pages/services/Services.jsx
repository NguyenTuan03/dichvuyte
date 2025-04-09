import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { CalendarIcon, TakeCareIcon, TickIcon } from './../../components/icons/Icons';
import { TAKE_CARE } from '../../enum/takecare';

export default function Services() {
  return (
    <>
      <Box
        width={"100%"}
        sx={{
          backgroundImage: 'url("/dieuduong.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <Container>
          <Grid container spacing={2} margin={"60px 0"} paddingTop={"60px"}>
            <Grid size={4}></Grid>
            <Grid size={8}>
              <Box bgcolor={"#fff"} padding={"50px"} borderRadius={"15px"}>
                  <Stack flexDirection={'row'} gap={"14px"}>
                    <TakeCareIcon/>
                    <Typography fontSize={20} color='rgb(0, 39, 96)'>Chăm sóc điều dưỡng chuyên nghiệp</Typography>
                  </Stack>
                  <Typography fontSize={"16px"} margin={"20px 0"}>Dịch vụ hỗ trợ những người cao tuổi có các vấn đề sức khỏe cụ thể hoặc những người cần sự giám sát y tế chặt chẽ và chăm sóc sức khỏe hàng ngày/ hoặc trong 1 khoảng thời gian nhất định để phục hồi. Bao gồm các hoạt động:</Typography>
                  {
                    TAKE_CARE.map((item, index) => {
                      return (
                        <Stack key={index} flexDirection={'row'} gap={"14px"} marginBottom={'10px'}>
                          <TickIcon/>
                          <Typography fontSize={"16px"}>{item.name}</Typography>
                        </Stack>
                      )
                    })
                  }
                  <Button href='tel:0964345344' fullWidth={false} size='medium' sx={{width:'50%',borderRadius:'99px', backgroundColor:'#ff8484', padding:'14px 30px 14px 30px', color:'#fff', marginTop:'20px'}}>Liên hệ tư vấn</Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        width={"100%"}
        sx={{
          backgroundImage: 'url("/dieuduong2.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <Container>
        <Grid container spacing={2}  paddingTop={"60px"}>
            <Grid size={4}></Grid>
            <Grid size={8}>
              <Box bgcolor={"#fff"} padding={"50px"} borderRadius={"15px"}>
                  <Stack flexDirection={'row'} gap={"14px"}>
                    <TakeCareIcon/>
                    <Typography fontSize={20} color='rgb(0, 39, 96)'>Chăm sóc điều dưỡng chuyên nghiệp</Typography>
                  </Stack>
                  <Typography fontSize={"16px"} margin={"20px 0"}>Dịch vụ hỗ trợ những người cao tuổi có các vấn đề sức khỏe cụ thể hoặc những người cần sự giám sát y tế chặt chẽ và chăm sóc sức khỏe hàng ngày/ hoặc trong 1 khoảng thời gian nhất định để phục hồi. Bao gồm các hoạt động:</Typography>
                  {
                    TAKE_CARE.map((item, index) => {
                      return (
                        <Stack key={index} flexDirection={'row'} gap={"14px"} marginBottom={'10px'}>
                          <TickIcon/>
                          <Typography fontSize={"16px"}>{item.name}</Typography>
                        </Stack>
                      )
                    })
                  }
                  <Button href='tel:0964345344' fullWidth={false} size='medium' sx={{width:'50%',borderRadius:'99px', backgroundColor:'#ff8484', padding:'14px 30px 14px 30px', color:'#fff', marginTop:'20px'}}>Liên hệ tư vấn</Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Box marginTop={'50px'}>
          <Typography textAlign={'center'} fontWeight={'bold'} color='#02b88d' fontSize={"28px"} marginBottom={"12px"}>Giá dịch vụ Chăm sóc</Typography>
          <Typography textAlign={"center"} color='#7a7a7a' fontSize={"16px"} marginBottom={"12px"}>(*) Chi tiết giá sẽ phụ thuộc vào nhu cầu của gia đình và người cần chăm sóc, vui lòng liên hệ với chúng tôi để được tư vấn gói dịch vụ phù hợp và tối ưu nhất.</Typography>
          <Grid container spacing={2} marginTop={'20px'}>
              <Grid size={6}>
                  <Box padding={"75px 50px 75px 50px"} borderRadius={"25px"}>
                    <Typography fontSize={'20px'} fontWeight={'bold'} marginBottom={'12px'} color='rgb(0, 39, 96)'>Chăm sóc đồng hành</Typography>
                    <Typography marginBottom={"20px"} color='#7a7a7a'>Ngoài việc chăm sóc sinh hoạt cá nhân, mục tiêu là đảm bảo sự thoải mái về tinh thần. Hỗ trợ nhắc nhở uống thuốc, nấu ăn cơ bản, và xây dựng lịch trình chăm sóc chi tiết, linh hoạt để người được chăm sóc cảm thấy thoải mái cả về tinh thần lẫn thể chất.</Typography>
                    <Typography variant='h4' marginBottom={"18px"} fontWeight={700} color='rgb(2, 184, 141)'>VNĐ 1,700,000 ngày</Typography>
                    <Stack flexDirection={'row'} gap={"14px"} marginBottom={'10px'}>
                      <TickIcon/>
                      <Typography fontSize={"16px"}>Bằng cấp chuyên viên, y tế</Typography>
                    </Stack>
                    <Stack flexDirection={'row'} gap={"14px"} marginBottom={'10px'}>
                      <TickIcon/>                    
                      <Typography fontSize={"16px"}>Tối thiểu 1 năm kinh nghiệm chăm sóc chuyên nghiệp</Typography>
                    </Stack>
                    <Stack flexDirection={'row'} gap={"14px"} marginBottom={'10px'}>
                      <TickIcon/>                                        
                      <Typography fontSize={"16px"}>Cam kết theo lộ trình cụ thể</Typography>
                    </Stack>
                      <Button href='tel:0964345344' fullWidth size='medium' sx={{borderRadius:'99px', backgroundColor:'#446084', padding:'', color:'#fff', marginTop:'20px'}}>Đặt lịch</Button>
                  </Box>
              </Grid>
              <Grid size={6}>
              <Box padding={"75px 50px 75px 50px"} borderRadius={"25px"} bgcolor={'rgb(0, 39, 96)'}>
                    <Typography color='#02b88d'>Điều dưỡng chuyên nghiệp</Typography>
                    <Typography marginBottom={"20px"} color='#fff'>Ngoài việc chăm sóc sinh hoạt cá nhân, mục tiêu là đảm bảo sự thoải mái về tinh thần. Hỗ trợ nhắc nhở uống thuốc, nấu ăn cơ bản, và xây dựng lịch trình chăm sóc chi tiết, linh hoạt để người được chăm sóc cảm thấy thoải mái cả về tinh thần lẫn thể chất.</Typography>
                    <Typography variant='h4' marginBottom={"18px"} fontWeight={700} color='#02b88d'>VNĐ 1,700,000 ngày</Typography>
                    <Stack flexDirection={'row'} gap={"14px"} marginBottom={'10px'}>
                      <TickIcon/>
                      <Typography fontSize={"16px"} color='#fff'>Bằng cấp chuyên viên, y tế</Typography>
                    </Stack>
                    <Stack flexDirection={'row'} gap={"14px"} marginBottom={'10px'}>
                      <TickIcon/>                    
                      <Typography fontSize={"16px"} color='#fff'>Tối thiểu 1 năm kinh nghiệm chăm sóc chuyên nghiệp</Typography>
                    </Stack>
                    <Stack flexDirection={'row'} gap={"14px"} marginBottom={'10px'}>
                      <TickIcon/>                                        
                      <Typography fontSize={"16px"} color='#fff'>Cam kết theo lộ trình cụ thể</Typography>
                    </Stack>
                      <Button href='tel:0964345344' fullWidth size='medium' sx={{borderRadius:'99px', backgroundColor:'#02b88d', padding:'', color:'#fff', marginTop:'20px'}}>Đặt lịch</Button>
                  </Box>
              </Grid>
          </Grid>
        </Box>
      </Container>
      <Container sx={{padding:'80px 0'}}>
        <Grid container spacing={2} marginTop={'50px'}>
            <Grid size={6}>
                <Stack flexDirection={'row'} gap={'10px'} alignItems={'flex-start'}>
                  <CalendarIcon/>
                  <Stack>
                    <Typography fontWeight={'bold'} color='#002760' marginBottom={'10px'} fontSize={'20px'}>Binhminhmedic đồng hành chăm sóc</Typography>
                    <Typography color='#7a7a7a' fontSize={'16px'}>Đầu tư vào sức khỏe của ông bà, cha mẹ không chỉ là nghĩa vụ mà còn là minh chứng cho tình yêu thương và lòng biết ơn sâu sắc mà bạn dành cho họ.</Typography>
                  </Stack>
                </Stack>
            </Grid>
            <Grid size={6}>
                <Stack>                  
                  <Typography>Hãy để chúng tôi giúp bạn thực hiện cam kết này. Đó không chỉ là đầu tư vào sức khỏe mà còn là đầu tư vào hạnh phúc và tương lai của cả gia đình bạn. Liên hệ tư vấn 1:1 cùng chuyên viên của chúng tôi</Typography>
                  <Stack flexDirection={'row'} alignItems={'center'} justifyContent={"space-between"}>
                    <Button href='tel:0964345344' fullWidth={false} size='medium' sx={{width:'50%',borderRadius:'99px', backgroundColor:'#ff8484', color:'#fff', marginTop:'20px'}}>Liên hệ tư vấn</Button>                    
                  </Stack>
                </Stack>
            </Grid>
        </Grid>
      </Container>
    </>
  )
}
