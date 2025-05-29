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
import { keyframes } from "@emotion/react";

// Hiệu ứng pulse cho nút hoặc phần tử nổi bật
const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Dữ liệu bài viết (giữ nguyên)
const articles = [
  {
    title: "Chế độ dinh dưỡng cho người hạ huyết áp tư thế đứng",
    excerpt: "Hạ huyết áp tư thế đứng (hay còn gọi là hạ huyết áp tư thế)...",
    image: "https://dichvuytetainha24h.com/wp-content/uploads/2020/11/giaruavetthuong-300x169.png",
    date: "Th3",
    comments: 0,
  },
  {
    title: "Dịch Vụ Truyền Nước Biển Tại Nhà TPHCM 24/24 Uy Tín",
    excerpt: "Bạn đang ở Thành Phố Hồ Chí Minh, bạn bị sốt, bị mệt mỏi, suy...",
    image: "https://dichvuytetainha24h.com/wp-content/uploads/2020/04/dich-vu-rua-vet-thuong-thay-bang-cat-chi-tai-nha-o-tphcm-300x200.jpg",
    date: "Th1",
    comments: 41,
  },
  {
    title: "Dịch Vụ Truyền Nước Tại Nhà TPHCM Ở Đâu An Toàn, Giá Bao Nhiêu",
    excerpt: "Dịch vụ truyền nước tại nhà tại TPHCM đang ngày càng được ưa chuộng nhờ...",
    image: "https://dichvuytetainha24h.com/wp-content/uploads/2018/04/chaitruyen-300x196.jpg",
    date: "Th12",
    comments: 0,
  },
  {
    title: "Truyền Nước Biển Tại Nhà Quận 1 Dịch Vụ Y Tế Tại Nhà Q1 TPHCM",
    excerpt: "Với lối sống hiện đại và nhịp độ công việc cao, nhiều người lựa chọn...",
    image: "https://dichvuytetainha24h.com/wp-content/uploads/2023/09/viemhong-300x200.jpg",
    date: "Th10",
    comments: 0,
  },
  {
    title: "Tìm Phòng Khám Truyền Nước Biển Gần Đây - An Toàn và Chất Lượng",
    excerpt: "Với nhu cầu ngày càng tăng về dịch vụ y tế chất lượng, việc tìm...",
    image: "https://dichvuytetainha24h.com/wp-content/uploads/2023/04/chaidam-300x205.jpg",
    date: "Th8",
    comments: 0,
  },
  {
    title: "Bị Cảm Sốt Có Nên Truyền Nước Không? Khi Nào Nên Truyền Nước Khi Bị Cảm Sốt?",
    excerpt: "Cảm sốt là một trong những triệu chứng phổ biến mà hầu hết mọi người...",
    image: "https://dichvuytetainha24h.com/wp-content/uploads/2023/05/suynhuoccothe-01-300x198.jpg",
    date: "Th9",
    comments: 0,
  },
  {
    title: "Dịch vụ tiêm kích trứng IVF, Tiêm dưỡng thai tại nhà cẩn thận nhẹ nhàng",
    excerpt: "Dịch vụ tiêm kích trứng IVF, Tiêm dưỡng thai tại nhà cẩn thận nhẹ nhàng...",
    image: "https://dichvuytetainha24h.com/wp-content/uploads/2023/08/tieuduong-300x197.jpg",
    date: "Th7",
    comments: 0,
  },
  {
    title: "Phòng ngừa với bệnh tiêu chảy ở trẻ em mùa nắng nóng",
    excerpt: "Thời tiết nóng khiến thực phẩm dễ bị ô nhiễm, nếu không bảo...",
    image: "https://dichvuytetainha24h.com/wp-content/uploads/2023/10/truyennuocq1-300x169.png",
    date: "Th5",
    comments: 0,
  },
  {
    title: "Dấu hiệu sốc nhiệt nắng nóng và cách để phòng sốc nhiệt nhanh nhất",
    excerpt: "Hiện tượng cơ thể bị sốc nhiệt thường hay gặp vào những ngày nắng nóng...",
    image: "https://dichvuytetainha24h.com/wp-content/uploads/2025/03/dinhduongcaohuyetap-300x169.png",
    date: "Th6",
    comments: 0,
  },
  {
    title: "Chăm sóc sức khỏe mùa lạnh - Những điều bạn cần biết",
    excerpt: "Khi mùa lạnh đến gần, việc chăm sóc sức khỏe là rất quan trọng...",
    image: "https://dichvuytetainha24h.com/wp-content/uploads/2024/07/tiem-ivf-300x169.png",
    date: "Th4",
    comments: 12,
  },
  {
    title: "Các phương pháp giảm căng thẳng hiệu quả tại nhà",
    excerpt: "Căng thẳng là một vấn đề phổ biến trong xã hội hiện đại. Hãy cùng khám phá...",
    image: "https://dichvuytetainha24h.com/wp-content/uploads/2024/05/tretieuchay-300x169.png",
    date: "Th2",
    comments: 8,
  },
  {
    title: "Tại sao bạn nên chú ý đến sức khỏe tim mạch từ sớm?",
    excerpt: "Sức khỏe tim mạch đóng vai trò quan trọng trong việc duy trì chất lượng cuộc sống...",
    image: "https://dichvuytetainha24h.com/wp-content/uploads/2019/06/xuyentet-300x169.jpg",
    date: "Th1",
    comments: 25,
  },
  {
    title: "Lợi ích của việc tập thể dục đều đặn đối với sức khỏe",
    excerpt: "Tập thể dục không chỉ giúp cơ thể khỏe mạnh mà còn giúp giảm nguy cơ mắc các bệnh...",
    image: "https://dichvuytetainha24h.com/wp-content/uploads/2018/11/tyyyy-300x181.jpg",
    date: "Th2",
    comments: 5,
  },
  {
    title: "Cách phòng ngừa bệnh viêm khớp hiệu quả",
    excerpt: "Viêm khớp là một bệnh lý thường gặp ở người lớn tuổi. Dưới đây là những cách phòng ngừa...",
    image: "https://dichvuytetainha24h.com/wp-content/uploads/2018/09/tanbinh-300x200.jpg",
    date: "Th11",
    comments: 3,
  },
];

// Dịch vụ nổi bật
const featuredServices = [
  "Thay băng rửa vết thương tại nhà",
  "Truyền nước biển tại nhà TPHCM",
  "Dịch vụ tiêm thuốc tại nhà",
  "Hút đờm cho người già, trẻ em",
  "Lấy máu xét nghiệm tại nhà",
];

// Danh mục
const categories = [
  { name: "Dịch vụ y tế tại nhà TPHCM", count: 37 },
  { name: "Thông tin sức khỏe", count: 41 },
  { name: "Tin tức", count: 21 },
  { name: "Tư vấn", count: 14 },
];

// Bài viết mới nhất (lấy 5 bài đầu tiên)
const recentPosts = articles.slice(0, 5);

export default function TinTucYTe() {
  const [page, setPage] = useState(1); // Trạng thái để theo dõi trang hiện tại
  const articlesPerPage = 9; // Số bài viết mỗi trang

  // Tính toán số trang dựa trên tổng số bài viết
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  // Lấy danh sách bài viết cho trang hiện tại
  const startIndex = (page - 1) * articlesPerPage;
  const currentArticles = articles.slice(startIndex, startIndex + articlesPerPage);

  // Hàm xử lý khi chuyển trang
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ py: 8, bgcolor: "#f5f7fa" }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 } }}>
        {/* Header với hiệu ứng pulse */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 6,
            color: "#00796b",
            textAlign: "center",
            animation: `${pulseAnimation} 2s infinite`, // Áp dụng hiệu ứng pulse
          }}
        >
          Tin Tức Y Tế
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
                          height: 220,
                          objectFit: "cover",
                          borderRadius: "12px",
                        }}
                      />
    
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
                {featuredServices.map((service, i) => (
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
                {categories.map((cat, i) => (
                  <ListItem
                    key={i}
                    disablePadding
                    sx={{
                      py: 1.5,
                      borderBottom: i < categories.length - 1 ? "1px solid #eee" : "none",
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
                {recentPosts.map((post, i) => (
                  <Box
                    key={i}
                    display="flex"
                    alignItems="center"
                    sx={{
                      py: 1.5,
                      borderBottom: i < recentPosts.length - 1 ? "1px solid #eee" : "none",
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