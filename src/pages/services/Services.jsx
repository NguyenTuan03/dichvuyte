import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { CalendarIcon, TakeCareIcon, TickIcon } from './../../components/icons/Icons';
import { TAKE_CARE } from '../../enum/takecare';

export default function Services() {
  return (
    <>
      {/* First Background Section */}
      <Box
        width="100%"
        sx={{
          backgroundImage: 'url("/dieuduong.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: { xs: "auto", md: "80vh" }, // Flexible height on mobile
          backgroundAttachment: { xs: "scroll", md: "fixed" }, // Scroll on mobile for performance
          py: { xs: 4, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 4, md: 0 } }}
          >
            <Grid item xs={12} md={4} />
            <Grid item xs={12} md={8}>
              <Box
                bgcolor="#fff"
                padding={{ xs: 3, md: 5 }}
                borderRadius="15px"
                sx={{ boxShadow: { md: "0 4px 12px rgba(0,0,0,0.1)" } }}
              >
                <Stack direction="row" gap={{ xs: 1, md: 2 }} alignItems="center">
                  <TakeCareIcon sx={{ fontSize: { xs: 24, md: 32 } }} />
                  <Typography
                    fontSize={{ xs: 16, md: 20 }}
                    fontWeight={600}
                    color="rgb(0, 39, 96)"
                  >
                    Chăm sóc điều dưỡng chuyên nghiệp
                  </Typography>
                </Stack>
                <Typography
                  fontSize={{ xs: 14, md: 16 }}
                  margin={{ xs: "16px 0", md: "20px 0" }}
                  color="#7a7a7a"
                >
                  Dịch vụ hỗ trợ những người cao tuổi có các vấn đề sức khỏe cụ thể hoặc những người cần sự giám sát y tế chặt chẽ và chăm sóc sức khỏe hàng ngày/ hoặc trong 1 khoảng thời gian nhất định để phục hồi. Bao gồm các hoạt động:
                </Typography>
                {TAKE_CARE.map((item, index) => (
                  <Stack
                    key={index}
                    direction="row"
                    gap={{ xs: 1, md: 2 }}
                    marginBottom={{ xs: 1, md: 1.5 }}
                    alignItems="center"
                  >
                    <TickIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
                    <Typography fontSize={{ xs: 14, md: 16 }} color="#7a7a7a">
                      {item.name}
                    </Typography>
                  </Stack>
                ))}
                <Button
                  href="tel:0964345344"
                  fullWidth={false}
                  size="medium"
                  sx={{
                    width: { xs: "100%", sm: "50%" },
                    borderRadius: "99px",
                    backgroundColor: "#ff8484",
                    padding: { xs: "10px 20px", md: "14px 30px" },
                    color: "#fff",
                    mt: { xs: 2, md: 3 },
                    fontSize: { xs: 14, md: 16 },
                    "&:hover": { bgcolor: "#e57373" },
                  }}
                >
                  Liên hệ tư vấn
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Second Background Section */}
      <Box
        width="100%"
        sx={{
          backgroundImage: 'url("/dieuduong2.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: { xs: "auto", md: "80vh" },
          backgroundAttachment: { xs: "scroll", md: "fixed" },
          py: { xs: 4, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 4, md: 0 } }}
          >
            <Grid item xs={12} md={4} />
            <Grid item xs={12} md={8}>
              <Box
                bgcolor="#fff"
                padding={{ xs: 3, md: 5 }}
                borderRadius="15px"
                sx={{ boxShadow: { md: "0 4px 12px rgba(0,0,0,0.1)" } }}
              >
                <Stack direction="row" gap={{ xs: 1, md: 2 }} alignItems="center">
                  <TakeCareIcon sx={{ fontSize: { xs: 24, md: 32 } }} />
                  <Typography
                    fontSize={{ xs: 16, md: 20 }}
                    fontWeight={600}
                    color="rgb(0, 39, 96)"
                  >
                    Chăm sóc điều dưỡng chuyên nghiệp
                  </Typography>
                </Stack>
                <Typography
                  fontSize={{ xs: 14, md: 16 }}
                  margin={{ xs: "16px 0", md: "20px 0" }}
                  color="#7a7a7a"
                >
                  Dịch vụ hỗ trợ những người cao tuổi có các vấn đề sức khỏe cụ thể hoặc những người cần sự giám sát y tế chặt chẽ và chăm sóc sức khỏe hàng ngày/ hoặc trong 1 khoảng thời gian nhất định để phục hồi. Bao gồm các hoạt động:
                </Typography>
                {TAKE_CARE.map((item, index) => (
                  <Stack
                    key={index}
                    direction="row"
                    gap={{ xs: 1, md: 2 }}
                    marginBottom={{ xs: 1, md: 1.5 }}
                    alignItems="center"
                  >
                    <TickIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
                    <Typography fontSize={{ xs: 14, md: 16 }} color="#7a7a7a">
                      {item.name}
                    </Typography>
                  </Stack>
                ))}
                <Button
                  href="tel:0964345344"
                  fullWidth={false}
                  size="medium"
                  sx={{
                    width: { xs: "100%", sm: "50%" },
                    borderRadius: "99px",
                    backgroundColor: "#ff8484",
                    padding: { xs: "10px 20px", md: "14px 30px" },
                    color: "#fff",
                    mt: { xs: 2, md: 3 },
                    fontSize: { xs: 14, md: 16 },
                    "&:hover": { bgcolor: "#e57373" },
                  }}
                >
                  Liên hệ tư vấn
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Box>
          <Typography
            textAlign="center"
            fontWeight="bold"
            color="#02b88d"
            fontSize={{ xs: 20, md: 28 }}
            marginBottom={{ xs: 1, md: 2 }}
          >
            Giá dịch vụ Chăm sóc
          </Typography>
          <Typography
            textAlign="center"
            color="#7a7a7a"
            fontSize={{ xs: 14, md: 16 }}
            marginBottom={{ xs: 2, md: 3 }}
          >
            (*) Chi tiết giá sẽ phụ thuộc vào nhu cầu của gia đình và người cần chăm sóc, vui lòng liên hệ với chúng tôi để được tư vấn gói dịch vụ phù hợp và tối ưu nhất.
          </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mt: { xs: 2, md: 3 } }}>
            <Grid item xs={12} md={6}>
              <Box
                padding={{ xs: "30px 20px", md: "50px" }}
                borderRadius="25px"
                sx={{ bgcolor: "#fff", boxShadow: { md: "0 4px 12px rgba(0,0,0,0.1)" } }}
              >
                <Typography
                  fontSize={{ xs: 16, md: 20 }}
                  fontWeight="bold"
                  marginBottom={{ xs: 1, md: 1.5 }}
                  color="rgb(0, 39, 96)"
                >
                  Chăm sóc đồng hành
                </Typography>
                <Typography
                  marginBottom={{ xs: 2, md: 3 }}
                  color="#7a7a7a"
                  fontSize={{ xs: 14, md: 16 }}
                >
                  Ngoài việc chăm sóc sinh hoạt cá nhân, mục tiêu là đảm bảo sự thoải mái về tinh thần. Hỗ trợ nhắc nhở uống thuốc, nấu ăn cơ bản, và xây dựng lịch trình chăm sóc chi tiết, linh hoạt để người được chăm sóc cảm thấy thoải mái cả về tinh thần lẫn thể chất.
                </Typography>
                <Typography
                  variant="h4"
                  marginBottom={{ xs: 1.5, md: 2 }}
                  fontWeight={700}
                  color="rgb(2, 184, 141)"
                  fontSize={{ xs: 20, md: 28 }}
                >
                  VNĐ 1,700,000 ngày
                </Typography>
                <Stack direction="row" gap={{ xs: 1, md: 2 }} marginBottom={{ xs: 1, md: 1.5 }}>
                  <TickIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
                  <Typography fontSize={{ xs: 14, md: 16 }} color="#7a7a7a">
                    Bằng cấp chuyên viên, y tế
                  </Typography>
                </Stack>
                <Stack direction="row" gap={{ xs: 1, md: 2 }} marginBottom={{ xs: 1, md: 1.5 }}>
                  <TickIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
                  <Typography fontSize={{ xs: 14, md: 16 }} color="#7a7a7a">
                    Tối thiểu 1 năm kinh nghiệm chăm sóc chuyên nghiệp
                  </Typography>
                </Stack>
                <Stack direction="row" gap={{ xs: 1, md: 2 }} marginBottom={{ xs: 1, md: 1.5 }}>
                  <TickIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
                  <Typography fontSize={{ xs: 14, md: 16 }} color="#7a7a7a">
                    Cam kết theo lộ trình cụ thể
                  </Typography>
                </Stack>
                <Button
                  href="tel:0964345344"
                  fullWidth
                  size="medium"
                  sx={{
                    borderRadius: "99px",
                    backgroundColor: "#446084",
                    padding: { xs: "10px 20px", md: "14px 30px" },
                    color: "#fff",
                    mt: { xs: 2, md: 3 },
                    fontSize: { xs: 14, md: 16 },
                    "&:hover": { bgcolor: "#2f4b6e" },
                  }}
                >
                  Đặt lịch
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                padding={{ xs: "30px 20px", md: "50px" }}
                borderRadius="25px"
                sx={{ bgcolor: "rgb(0, 39, 96)", color: "#fff" }}
              >
                <Typography
                  fontSize={{ xs: 16, md: 20 }}
                  fontWeight="bold"
                  marginBottom={{ xs: 1, md: 1.5 }}
                  color="#02b88d"
                >
                  Điều dưỡng chuyên nghiệp
                </Typography>
                <Typography
                  marginBottom={{ xs: 2, md: 3 }}
                  fontSize={{ xs: 14, md: 16 }}
                >
                  Ngoài việc chăm sóc sinh hoạt cá nhân, mục tiêu là đảm bảo sự thoải mái về tinh thần. Hỗ trợ nhắc nhở uống thuốc, nấu ăn cơ bản, và xây dựng lịch trình chăm sóc chi tiết, linh hoạt để người được chăm sóc cảm thấy thoải mái cả về tinh thần lẫn thể chất.
                </Typography>
                <Typography
                  variant="h4"
                  marginBottom={{ xs: 1.5, md: 2 }}
                  fontWeight={700}
                  color="#02b88d"
                  fontSize={{ xs: 20, md: 28 }}
                >
                  VNĐ 1,700,000 ngày
                </Typography>
                <Stack direction="row" gap={{ xs: 1, md: 2 }} marginBottom={{ xs: 1, md: 1.5 }}>
                  <TickIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
                  <Typography fontSize={{ xs: 14, md: 16 }}>
                    Bằng cấp chuyên viên, y tế
                  </Typography>
                </Stack>
                <Stack direction="row" gap={{ xs: 1, md: 2 }} marginBottom={{ xs: 1, md: 1.5 }}>
                  <TickIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
                  <Typography fontSize={{ xs: 14, md: 16 }}>
                    Tối thiểu 1 năm kinh nghiệm chăm sóc chuyên nghiệp
                  </Typography>
                </Stack>
                <Stack direction="row" gap={{ xs: 1, md: 2 }} marginBottom={{ xs: 1, md: 1.5 }}>
                  <TickIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
                  <Typography fontSize={{ xs: 14, md: 16 }}>
                    Cam kết theo lộ trình cụ thể
                  </Typography>
                </Stack>
                <Button
                  href="tel:0964345344"
                  fullWidth
                  size="medium"
                  sx={{
                    borderRadius: "99px",
                    backgroundColor: "#02b88d",
                    padding: { xs: "10px 20px", md: "14px 30px" },
                    color: "#fff",
                    mt: { xs: 2, md: 3 },
                    fontSize: { xs: 14, md: 16 },
                    "&:hover": { bgcolor: "#019c77" },
                  }}
                >
                  Đặt lịch
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mt: { xs: 2, md: 4 } }}>
          <Grid item xs={12} md={6}>
            <Stack
              direction="row"
              gap={{ xs: 1, md: 2 }}
              alignItems="flex-start"
            >
              <CalendarIcon sx={{ fontSize: { xs: 24, md: 32 } }} />
              <Stack>
                <Typography
                  fontWeight="bold"
                  color="#002760"
                  marginBottom={{ xs: 1, md: 1.5 }}
                  fontSize={{ xs: 16, md: 20 }}
                >
                  Binhminhmedic đồng hành chăm sóc
                </Typography>
                <Typography
                  color="#7a7a7a"
                  fontSize={{ xs: 14, md: 16 }}
                >
                  Đầu tư vào sức khỏe của ông bà, cha mẹ không chỉ là nghĩa vụ mà còn là minh chứng cho tình yêu thương và lòng biết ơn sâu sắc mà bạn dành cho họ.
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <Typography
                fontSize={{ xs: 14, md: 16 }}
                color="#7a7a7a"
                marginBottom={{ xs: 2, md: 3 }}
              >
                Hãy để chúng tôi giúp bạn thực hiện cam kết này. Đó không chỉ là đầu tư vào sức khỏe mà còn là đầu tư vào hạnh phúc và tương lai của cả gia đình bạn. Liên hệ tư vấn 1:1 cùng chuyên viên của chúng tôi
              </Typography>
              <Button
                href="tel:0964345344"
                fullWidth={false}
                size="medium"
                sx={{
                  width: { xs: "100%", sm: "50%" },
                  borderRadius: "99px",
                  backgroundColor: "#ff8484",
                  padding: { xs: "10px 20px", md: "14px 30px" },
                  color: "#fff",
                  mt: { xs: 1, md: 2 },
                  fontSize: { xs: 14, md: 16 },
                  "&:hover": { bgcolor: "#e57373" },
                }}
              >
                Liên hệ tư vấn
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}