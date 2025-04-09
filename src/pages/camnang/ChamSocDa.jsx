import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Container,
  Pagination,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CommentIcon from "@mui/icons-material/Comment";

// Dữ liệu bài viết về chăm sóc da
const skinCareArticles = [
  {
    title: "Cách chăm sóc da dầu hiệu quả vào mùa hè",
    excerpt: "Da dầu thường dễ bị mụn và bóng nhờn vào mùa hè. Dưới đây là các bước chăm sóc...",
    image: "https://th.bing.com/th/id/OIP.4xlzCnX8uQkLfcgcSD-OawHaE8?w=282&h=188&c=7&r=0&o=5&pid=1.7",
    date: "Th6",
    comments: 5,
  },
  {
    title: "Top 10 mặt nạ tự nhiên giúp da sáng mịn",
    excerpt: "Sử dụng nguyên liệu tự nhiên như mật ong, sữa chua có thể giúp da bạn sáng mịn...",
    image: "https://th.bing.com/th/id/OIP.PH2YTRfA8eXhMFzXyXrWGQHaFh?w=240&h=180&c=7&r=0&o=5&pid=1.7",
    date: "Th5",
    comments: 12,
  },
  {
    title: "Hướng dẫn chọn kem chống nắng phù hợp với từng loại da",
    excerpt: "Kem chống nắng là bước quan trọng để bảo vệ da khỏi tia UV. Tìm hiểu cách chọn...",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    date: "Th4",
    comments: 8,
  },
  {
    title: "Cách làm sạch da mặt đúng cách tại nhà",
    excerpt: "Làm sạch da đúng cách giúp loại bỏ bụi bẩn và ngăn ngừa mụn hiệu quả...",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    date: "Th3",
    comments: 3,
  },
  {
    title: "Tại sao bạn nên dùng serum dưỡng da hàng ngày?",
    excerpt: "Serum chứa các dưỡng chất cô đặc, giúp cải thiện làn da nhanh chóng...",
    image: "https://th.bing.com/th/id/OIP.bSm2EdvrV-GnEmTxabpvtwHaE8?w=238&h=180&c=7&r=0&o=5&pid=1.7",
    date: "Th2",
    comments: 15,
  },
  {
    title: "Chăm sóc da khô vào mùa đông như thế nào?",
    excerpt: "Da khô dễ bị nứt nẻ vào mùa đông. Đây là những mẹo để giữ da mềm mại...",
    image: "https://th.bing.com/th/id/OIP.eW0FPakh6YnIz2eFRroGDwHaE7?rs=1&pid=ImgDetMain",
    date: "Th1",
    comments: 7,
  },
  {
    title: "Cách trị mụn tại nhà đơn giản và hiệu quả",
    excerpt: "Mụn là vấn đề phổ biến. Thử áp dụng các phương pháp tự nhiên này...",
    image: "https://th.bing.com/th/id/OIP.6uDIYwMKQoRtLIjs2LOQ_QHaFj?w=240&h=183&c=7&r=0&o=5&pid=1.7",
    date: "Th12",
    comments: 20,
  },
  {
    title: "Lợi ích của việc tẩy tế bào chết định kỳ",
    excerpt: "Tẩy tế bào chết giúp da sáng mịn và tăng hiệu quả của các sản phẩm dưỡng da...",
    image: "https://th.bing.com/th/id/OIP.yeloh4nzEE0GcuSLmcVKkwHaET?w=312&h=181&c=7&r=0&o=5&pid=1.7",
    date: "Th11",
    comments: 4,
  },
  {
    title: "Dinh dưỡng và làn da: Ăn gì để da đẹp?",
    excerpt: "Chế độ ăn uống ảnh hưởng lớn đến làn da. Những thực phẩm này sẽ giúp bạn...",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    date: "Th10",
    comments: 9,
  },
  {
    title: "Cách chăm sóc da sau khi đi nắng",
    excerpt: "Da bị tổn thương sau khi tiếp xúc với nắng cần được phục hồi đúng cách...",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    date: "Th9",
    comments: 6,
  },
];

// Dịch vụ nổi bật về chăm sóc da
const featuredSkinCareServices = [
  "Tư vấn chăm sóc da cá nhân",
  "Dịch vụ spa tại nhà",
  "Cung cấp sản phẩm dưỡng da organic",
  "Hướng dẫn làm đẹp tự nhiên",
  "Kiểm tra sức khỏe da định kỳ",
];

// Danh mục
const skinCareCategories = [
  { name: "Chăm sóc da mặt", count: 25 },
  { name: "Sản phẩm dưỡng da", count: 18 },
  { name: "Mẹo làm đẹp", count: 30 },
  { name: "Da và sức khỏe", count: 12 },
];

// Bài viết mới nhất (lấy 5 bài đầu tiên)
const recentSkinCarePosts = skinCareArticles.slice(0, 5);

export default function ChamSocDa() {
  const [page, setPage] = useState(1); // Trạng thái để theo dõi trang hiện tại
  const articlesPerPage = 9; // Số bài viết mỗi trang

  // Tính toán số trang dựa trên tổng số bài viết
  const totalPages = Math.ceil(skinCareArticles.length / articlesPerPage);

  // Lấy danh sách bài viết cho trang hiện tại
  const startIndex = (page - 1) * articlesPerPage;
  const currentArticles = skinCareArticles.slice(startIndex, startIndex + articlesPerPage);

  // Hàm xử lý khi chuyển trang
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ py: 8, bgcolor: "#f5f7fa" }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 } }}>
        {/* Header */}
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mb: 6, color: "#00796b", textAlign: "center" }}
        >
          Chăm Sóc Da
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
                    width: { xs: "100%", sm: "calc(33.33% - 24px)" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      height: "100%",
                      borderRadius: "16px",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    <Box sx={{ position: "relative", mb: 3 }}>
                      <Box
                        component="img"
                        src={article.image}
                        alt={article.title}
                        sx={{
                          width: "100%",
                          height: 320,
                          objectFit: "cover",
                          borderRadius: "12px",
                        }}
                      />
                      <Typography
                        variant="caption"
                        sx={{
                          position: "absolute",
                          top: 12,
                          left: 12,
                          bgcolor: "#00796b",
                          color: "white",
                          px: 2,
                          py: 0.75,
                          borderRadius: "6px",
                          fontWeight: 500,
                        }}
                      >
                        {article.date}
                      </Typography>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, fontSize: "1.25rem", mb: 1.5 }}
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
                        <CommentIcon sx={{ fontSize: 18, mr: 0.75 }} />
                        {article.comments} Bình luận
                      </Typography>
                    )}
                  </Paper>
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
                      bgcolor: "#00796b",
                      color: "white",
                    },
                  },
                  "& .Mui-selected": {
                    bgcolor: "#00796b",
                    color: "white",
                    "&:hover": {
                      bgcolor: "#004d40",
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
                bgcolor: "#e0f2f1",
                transition: "box-shadow 0.3s",
                "&:hover": { boxShadow: "0 8px 24px rgba(0,0,0,0.1)" },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: "#00796b",
                  borderBottom: "2px solid #00796b",
                  pb: 1,
                }}
              >
                Dịch Vụ Nổi Bật
              </Typography>
              <List disablePadding>
                {featuredSkinCareServices.map((service, i) => (
                  <ListItem key={i} disablePadding sx={{ py: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <StarIcon sx={{ color: "#00796b", fontSize: 24 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={service}
                      primaryTypographyProps={{
                        variant: "body1",
                        sx: {
                          fontWeight: 500,
                          "&:hover": { color: "#004d40" },
                          cursor: "pointer",
                        },
                      }}
                    />
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
                bgcolor: "#fff",
                transition: "box-shadow 0.3s",
                "&:hover": { boxShadow: "0 8px 24px rgba(0,0,0,0.1)" },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: "#00796b",
                  borderBottom: "2px solid #00796b",
                  pb: 1,
                }}
              >
                Danh Mục
              </Typography>
              <List disablePadding>
                {skinCareCategories.map((cat, i) => (
                  <ListItem
                    key={i}
                    disablePadding
                    sx={{
                      py: 1.5,
                      borderBottom: i < skinCareCategories.length - 1 ? "1px solid #eee" : "none",
                    }}
                  >
                    <ListItemText
                      primary={cat.name}
                      primaryTypographyProps={{
                        variant: "body1",
                        sx: {
                          fontWeight: 500,
                          "&:hover": { color: "#004d40" },
                          cursor: "pointer",
                        },
                      }}
                    />
                    <Typography variant="caption" sx={{ color: "text.secondary" }}>
                      ({cat.count})
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Paper>

            {/* Bài viết mới nhất */}
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: "16px",
                bgcolor: "#fff",
                transition: "box-shadow 0.3s",
                "&:hover": { boxShadow: "0 8px 24px rgba(0,0,0,0.1)" },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: "#00796b",
                  borderBottom: "2px solid #00796b",
                  pb: 1,
                }}
              >
                Bài Viết Mới Nhất
              </Typography>
              <Stack spacing={3}>
                {recentSkinCarePosts.map((post, i) => (
                  <Box
                    key={i}
                    display="flex"
                    alignItems="center"
                    sx={{
                      py: 1.5,
                      borderBottom: i < recentSkinCarePosts.length - 1 ? "1px solid #eee" : "none",
                    }}
                  >
                    <Avatar
                      variant="rounded"
                      src={post.image}
                      sx={{ width: 80, height: 60, mr: 2 }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 500,
                        "&:hover": { color: "#004d40" },
                        cursor: "pointer",
                        lineHeight: 1.6,
                      }}
                    >
                      {post.title}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}