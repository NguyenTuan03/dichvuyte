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
import FavoriteIcon from "@mui/icons-material/Favorite"; // For heart-related icon
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

const heartHealthArticles = [
    {
      title: "Các phương pháp phòng ngừa bệnh tim mạch hiệu quả",
      excerpt: "Các biện pháp giúp ngăn ngừa các bệnh lý về tim mạch, duy trì sức khỏe tim mạch tốt...",
      image: "https://th.bing.com/th/id/OIP.1F1u6oQ2eCFYKS7hw7hkmgHaFg?w=235&h=180&c=7&r=0&o=5&pid=1.7",
      date: "Th12",
      comments: 12,
    },
    {
      title: "Chế độ ăn uống cho tim khỏe mạnh",
      excerpt: "Các thực phẩm bổ dưỡng giúp bảo vệ sức khỏe tim mạch và giảm nguy cơ bệnh tim...",
      image: "https://th.bing.com/th/id/OIP.MiCqyvj_wf32a9qFY3wrZQHaD4?w=324&h=180&c=7&r=0&o=5&pid=1.7",
      date: "Th11",
      comments: 9,
    },
    {
      title: "Tập thể dục giúp cải thiện sức khỏe tim mạch",
      excerpt: "Các bài tập thể dục giúp tăng cường sự dẻo dai cho tim và sức khỏe tổng thể...",
      image: "https://th.bing.com/th/id/OIP.Vfx0ksig9jDsogLuiOlBiQHaEK?w=315&h=180&c=7&r=0&o=5&pid=1.7",
      date: "Th10",
      comments: 8,
    },
    {
      title: "Dấu hiệu cảnh báo sớm bệnh tim mạch",
      excerpt: "Phát hiện sớm những dấu hiệu cảnh báo bệnh tim có thể cứu sống bạn...",
      image: "https://th.bing.com/th/id/OIP.wemtkY5Hr5wS0VmHZpd0AwHaE8?w=261&h=180&c=7&r=0&o=5&pid=1.7",
      date: "Th9",
      comments: 11,
    },
    {
      title: "Vai trò của giấc ngủ đối với sức khỏe tim",
      excerpt: "Ngủ đủ giấc có ảnh hưởng tích cực đến sức khỏe tim như thế nào?",
      image: "https://th.bing.com/th/id/OIP.4czzGOxTWg1Sk8AdiWDzBgHaFG?w=262&h=180&c=7&r=0&o=5&pid=1.7",
      date: "Th8",
      comments: 6,
    },
    {
      title: "Kiểm soát căng thẳng để bảo vệ tim mạch",
      excerpt: "Tìm hiểu cách stress ảnh hưởng đến tim và cách kiểm soát nó...",
      image: "https://th.bing.com/th/id/OIP.F9BpECs95nR6dJDZdZfyowHaEl?w=266&h=180&c=7&r=0&o=5&pid=1.7",
      date: "Th7",
      comments: 10,
    },
    {
      title: "Tác dụng của omega-3 đối với tim",
      excerpt: "Omega-3 trong cá và thực phẩm bổ sung có giúp giảm nguy cơ bệnh tim?",
      image: "https://th.bing.com/th/id/OIP.A9gsleGNUR7xPOsZPWeBmwHaEo?w=288&h=180&c=7&r=0&o=5&pid=1.7",
      date: "Th6",
      comments: 7,
    },
    {
      title: "Kiểm tra tim mạch định kỳ có cần thiết không?",
      excerpt: "Lý do bạn nên đi khám tim định kỳ, kể cả khi không có triệu chứng rõ ràng.",
      image: "https://th.bing.com/th/id/OIP.JI-TmBEhKcuwtWS6vk-qhgHaE8?w=263&h=180&c=7&r=0&o=5&pid=1.7",
      date: "Th5",
      comments: 5,
    },
    {
      title: "Các yếu tố nguy cơ gây bệnh tim",
      excerpt: "Thuốc lá, rượu, thừa cân, lối sống thiếu vận động - đâu là nguyên nhân chính?",
      image: "https://th.bing.com/th/id/OIP.iDbpQdan50VX6XQl2vtN0QHaE8?w=261&h=180&c=7&r=0&o=5&pid=1.7",
      date: "Th4",
      comments: 13,
    },
  ];
  

  const featuredHeartHealthServices = [
    "Tư vấn sức khỏe tim mạch chuyên sâu",
    "Khám và điều trị tăng huyết áp",
    "Tư vấn chế độ ăn uống cho bệnh nhân tim mạch",
    "Chăm sóc tim mạch cho người cao tuổi",
    "Điều trị bệnh mạch vành",
    "Khám và tư vấn về bệnh đột quỵ",
    "Điện tim và siêu âm tim tổng quát",
    "Theo dõi huyết áp tại nhà",
    "Hướng dẫn phục hồi chức năng sau nhồi máu cơ tim",
    "Đo điện tâm đồ 24 giờ (Holter ECG)",
    "Tư vấn phòng ngừa biến chứng tim mạch ở bệnh tiểu đường",
  ];
  

  const heartHealthCategories = [
    { name: "Bệnh mạch vành", count: 14 },
    { name: "Tăng huyết áp", count: 9 },
    { name: "Chế độ ăn uống cho tim", count: 11 },
    { name: "Phòng ngừa đột quỵ", count: 7 },
    { name: "Tập thể dục cho tim mạch", count: 8 },
    { name: "Dấu hiệu bệnh tim", count: 6 },
    { name: "Kiểm soát stress", count: 5 },
    { name: "Giấc ngủ và tim mạch", count: 4 },
    { name: "Khám định kỳ tim mạch", count: 7 },
    { name: "Phục hồi sau bệnh tim", count: 3 },
  ];
  

export default function SucKhoeTimMach() {
  const [page, setPage] = useState(1); // Trạng thái để theo dõi trang hiện tại
  const articlesPerPage = 6; // Số bài viết mỗi trang

  // Tính toán số trang dựa trên tổng số bài viết
  const totalPages = Math.ceil(heartHealthArticles.length / articlesPerPage);

  // Lấy danh sách bài viết cho trang hiện tại
  const startIndex = (page - 1) * articlesPerPage;
  const currentArticles = heartHealthArticles.slice(startIndex, startIndex + articlesPerPage);

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
          sx={{ fontWeight: 700, mb: 6, color: "#d32f2f", textAlign: "center" }}
        >
          Chăm Sóc Sức Khỏe Tim Mạch
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
                      bgcolor: "#d32f2f",
                      color: "white",
                    },
                  },
                  "& .Mui-selected": {
                    bgcolor: "#d32f2f",
                    color: "white",
                    "&:hover": {
                      bgcolor: "#c2185b",
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
                bgcolor: "#f8bbd0",
                transition: "box-shadow 0.3s",
                "&:hover": { boxShadow: "0 8px 24px rgba(0,0,0,0.1)" },
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#d32f2f", mb: 3 }}
              >
                Dịch Vụ Nổi Bật
              </Typography>
              <List>
                {featuredHeartHealthServices.map((service, index) => (
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
                bgcolor: "#f8bbd0",
                transition: "box-shadow 0.3s",
                "&:hover": { boxShadow: "0 8px 24px rgba(0,0,0,0.1)" },
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#d32f2f", mb: 3 }}
              >
                Danh Mục
              </Typography>
              <List>
                {heartHealthCategories.map((category, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <Avatar sx={{ bgcolor: "#d32f2f", fontSize: "1rem" }}>
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
