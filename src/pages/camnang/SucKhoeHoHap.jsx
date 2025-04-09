import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Container,
  Pagination,
  Card,
  CardContent,
  CardMedia,
  Divider,
  ListItemIcon,
} from "@mui/material";
import AirIcon from "@mui/icons-material/Air";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

// Dữ liệu bài viết về sức khỏe hô hấp
const respiratoryHealthArticles = [
    {
      title: "Các cách phòng tránh bệnh về hô hấp trong mùa lạnh",
      excerpt: "Hướng dẫn về các biện pháp đơn giản để bảo vệ hệ hô hấp trong mùa đông...",
      image: "https://th.bing.com/th/id/OIP.4ij5j2vJ2ryeAD-vAesPjQHaEK?w=312&h=180&c=7&r=0&o=5&pid=1.7",
      date: "Th12",
      comments: 10,
    },
    {
      title: "Chế độ ăn uống giúp tăng cường sức khỏe phổi",
      excerpt: "Các thực phẩm bổ dưỡng giúp cải thiện chức năng phổi và hô hấp...",
      image: "https://th.bing.com/th/id/OIP.hLTyyUkyaDoAuGb60aMpHAHaE8?w=262&h=180&c=7&r=0&o=5&pid=1.7",
      date: "Th11",
      comments: 7,
    },
    {
      title: "Tập thể dục đúng cách để bảo vệ hệ hô hấp",
      excerpt: "Tìm hiểu các bài tập và phương pháp thể dục tốt cho phổi và sức khỏe hô hấp...",
      image: "https://th.bing.com/th/id/OIP.VvAgVIriUDmUEmKyOEcCvgHaEK?w=313&h=180&c=7&r=0&o=5&pid=1.7",
      date: "Th10",
      comments: 5,
    },
    {
      title: "Cách điều trị hen suyễn hiệu quả",
      excerpt: "Hen suyễn có thể được kiểm soát hiệu quả nhờ các phương pháp điều trị hiện đại...",
      image: "https://th.bing.com/th/id/OIP.LSUmaSty3JLe_Ai_bV2EUQHaEP?w=278&h=180&c=7&r=0&o=5&pid=1.7",
      date: "Th9",
      comments: 15,
    },
    {
      title: "Biện pháp phòng ngừa bệnh phổi tắc nghẽn mãn tính",
      excerpt: "Bệnh phổi tắc nghẽn mãn tính (COPD) là bệnh phổ biến, nhưng có thể phòng ngừa được...",
      image: "https://th.bing.com/th/id/OIP.L8fZaArSzs3ek3scSLEryAHaFj?w=245&h=184&c=7&r=0&o=5&pid=1.7",
      date: "Th8",
      comments: 3,
    },
    {
      title: "Tác động của ô nhiễm không khí đến hệ hô hấp",
      excerpt: "Tìm hiểu các tác động tiêu cực của ô nhiễm không khí đối với sức khỏe hô hấp...",
      image: "https://th.bing.com/th/id/OIP.S2wxKU2rkMkLdHZykghXJQHaEK?w=329&h=185&c=7&r=0&o=5&pid=1.7",
      date: "Th7",
      comments: 20,
    },
    {
      title: "Cách nhận diện và điều trị viêm phổi",
      excerpt: "Các dấu hiệu và phương pháp điều trị viêm phổi hiệu quả, bảo vệ sức khỏe hô hấp...",
      image: "https://th.bing.com/th/id/OIP.CQPRdUA1I2W3v6FhSU4MDwHaEo?w=267&h=180&c=7&r=0&o=5&pid=1.7",
      date: "Th6",
      comments: 12,
    },
    {
      title: "Vai trò của yoga đối với sức khỏe hô hấp",
      excerpt: "Khám phá những bài tập yoga đơn giản giúp cải thiện sức khỏe hệ hô hấp...",
      image: "https://th.bing.com/th/id/OIP.dWOd4gPS2MgI-bNkx8KXHAHaEK?w=283&h=180&c=7&r=0&o=5&pid=1.7",
      date: "Th5",
      comments: 8,
    },
    {
      title: "Chế độ sinh hoạt lành mạnh để bảo vệ phổi",
      excerpt: "Lựa chọn chế độ sinh hoạt phù hợp để duy trì sức khỏe hô hấp dài lâu...",
      image: "https://th.bing.com/th/id/OIP.RyrwSp6TnqJpHyTh6dpJJgHaEc?w=288&h=180&c=7&r=0&o=5&pid=1.7",
      date: "Th4",
      comments: 25,
    },
    {
      title: "Những dấu hiệu của bệnh phổi tắc nghẽn mãn tính (COPD)",
      excerpt: "Cách nhận diện bệnh phổi tắc nghẽn mãn tính và những điều cần biết để phòng tránh...",
      image: "https://th.bing.com/th/id/OIP.k1w6xLHrl2L8mVcswXSuYwHaEs?w=264&h=180&c=7&r=0&o=5&pid=1.7",
      date: "Th3",
      comments: 5,
    },
    {
      title: "Cách phòng ngừa và điều trị viêm phế quản mãn tính",
      excerpt: "Các phương pháp phòng ngừa và điều trị viêm phế quản mãn tính hiệu quả...",
      image: "https://th.bing.com/th/id/OIP.1AXI7QBYGGwEYlC95-RrYwHaE8?w=261&h=180&c=7&r=0&o=5&pid=1.7",
      date: "Th2",
      comments: 18,
    },
    {
      title: "Hướng dẫn phòng tránh dị ứng hô hấp mùa xuân",
      excerpt: "Biện pháp phòng tránh dị ứng hô hấp trong mùa xuân khi tiếp xúc với phấn hoa...",
      image: "https://th.bing.com/th/id/OIP.DGr0sbSEF3MgVzyNMJK3EQHaEK?w=324&h=182&c=7&r=0&o=5&pid=1.7",
      date: "Th1",
      comments: 14,
    },
  ];
  

// Dịch vụ nổi bật về chăm sóc sức khỏe hô hấp
const featuredRespiratoryServices = [
    "Tư vấn sức khỏe hô hấp chuyên sâu",
    "Chăm sóc phổi cho người cao tuổi",
    "Phương pháp kiểm soát hen suyễn tại nhà",
    "Tư vấn dinh dưỡng cho người có vấn đề về hô hấp",
    "Điều trị bệnh phổi tắc nghẽn mãn tính (COPD)",
    // Thêm dịch vụ mới
    "Tư vấn phòng chống bệnh hô hấp cho trẻ em",
    "Khám và điều trị viêm phổi",
    "Hướng dẫn tập thở giúp cải thiện sức khỏe hô hấp",
  ];
  

// Danh mục
const respiratoryHealthCategories = [
    { name: "Hen suyễn", count: 12 },
    { name: "Chế độ ăn uống và hô hấp", count: 8 },
    { name: "Tập thể dục cho hệ hô hấp", count: 10 },
    { name: "Điều trị bệnh phổi", count: 15 },
    // Thêm danh mục mới
    { name: "Viêm phổi", count: 6 },
    { name: "Phòng chống ô nhiễm không khí", count: 4 },
    { name: "Khám và tư vấn sức khỏe hô hấp", count: 9 },
  ];
  


export default function SucKhoeHoHap() {
  const [page, setPage] = useState(1); // Trạng thái để theo dõi trang hiện tại
  const articlesPerPage = 9; // Số bài viết mỗi trang

  // Tính toán số trang dựa trên tổng số bài viết
  const totalPages = Math.ceil(respiratoryHealthArticles.length / articlesPerPage);

  // Lấy danh sách bài viết cho trang hiện tại
  const startIndex = (page - 1) * articlesPerPage;
  const currentArticles = respiratoryHealthArticles.slice(startIndex, startIndex + articlesPerPage);

  // Hàm xử lý khi chuyển trang
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ py: 8, bgcolor: "#f3f4f6" }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 } }}>
        {/* Header */}
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mb: 6, color: "#0288d1", textAlign: "center" }}
        >
          Chăm Sóc Sức Khỏe Hô Hấp
        </Typography>

        {/* Flex layout chia 2 bên */}
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={6}>
          {/* Bên trái: danh sách bài viết */}
          <Box flex={3}>
            <Box display="flex" flexWrap="wrap" gap={4}>
              {currentArticles.map((article, index) => (
                <Box
                  key={index}
                  sx={{
                    width: { xs: "100%", sm: "calc(50% - 24px)", md: "calc(33.33% - 24px)" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Card
                    sx={{
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={article.image}
                      alt={article.title}
                      sx={{
                        height: 320,
                        objectFit: "cover",
                        borderRadius: "8px 8px 0 0",
                      }}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, fontSize: "1.25rem", mb: 1 }}
                      >
                        {article.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2, lineHeight: 1.6 }}
                      >
                        {article.excerpt}
                      </Typography>
                      {article.comments > 0 && (
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <MedicalServicesIcon sx={{ fontSize: 18, mr: 0.75 }} />
                          {article.comments} Bình luận
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>

            {/* Phân trang */}
            <Stack direction="row" justifyContent="center" sx={{ mt: 6 }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                color="primary"
                size="large"
                sx={{
                  "& .MuiPaginationItem-root": {
                    fontSize: "1.1rem",
                    "&:hover": {
                      bgcolor: "#0288d1",
                      color: "white",
                    },
                  },
                  "& .Mui-selected": {
                    bgcolor: "#0288d1",
                    color: "white",
                    "&:hover": {
                      bgcolor: "#01579b",
                    },
                  },
                }}
              />
            </Stack>
          </Box>

          {/* Bên phải: Sidebar */}
          <Box
            flex={1}
            minWidth={{ xs: "100%", md: "360px" }}
            display="flex"
            flexDirection="column"
            gap={6}
          >
            {/* Dịch vụ nổi bật */}
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: "16px",
                bgcolor: "#e1f5fe",
                transition: "box-shadow 0.3s",
                "&:hover": { boxShadow: "0 8px 24px rgba(0,0,0,0.1)" },
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#0288d1", mb: 3 }}
              >
                Dịch Vụ Nổi Bật
              </Typography>
              <List>
                {featuredRespiratoryServices.map((service, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={service} />
                  </ListItem>
                ))}
              </List>
            </Paper>

            {/* Danh mục */}
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: "16px",
                bgcolor: "#e1f5fe",
                transition: "box-shadow 0.3s",
                "&:hover": { boxShadow: "0 8px 24px rgba(0,0,0,0.1)" },
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#0288d1", mb: 3 }}
              >
                Danh Mục
              </Typography>
              <List>
                {respiratoryHealthCategories.map((category, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <Avatar sx={{ bgcolor: "#0288d1", fontSize: "1rem" }}>
                        {category.name[0]}
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={category.name}
                      secondary={`${category.count} bài viết`}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
