import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Avatar,
  Container,
  Pagination,
} from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
const boneJointArticles = [
    {
      title: "Khám bệnh tại nhà – Nhận dịch vụ VIP tại gia",
      excerpt: "Khám bệnh tại nhà TPHCM không hẳn là trào lưu hay dịch vụ riêng của giới..",
      image: "https://binhminhmedic.com/wp-content/uploads/2025/02/kham-chua-benh-tai-nha-02.jpg",
      date: "Th6",      
    },
    {
      title: "Dịch vụ bác sĩ tại nhà – Có bác sĩ riêng chưa bao giờ dễ dàng như vậy",
      excerpt: "Dịch vụ bác sĩ tại nhà là giải pháp chăm lo sức khỏe hiệu quả cho..",
      image: "https://binhminhmedic.com/wp-content/uploads/2025/02/20190620_Bacsigiadinh-medlatec_1.png",
      date: "Th5",      
    },
    {
      title: "Dịch vụ chăm sóc người bệnh tại nhà TPHCM & các lưu ý khi chọn dùng",
      excerpt: "Dịch vụ chăm sóc người bệnh tại nhà TPHCM thì bệnh nhân có được cam..",
      image: "https://binhminhmedic.com/wp-content/uploads/2025/02/cham-soc-benh-nhan-tai-nha.jpeg",
      date: "Th4",      
    },
    {
      title: "Các dấu hiệu cảnh báo thoái hóa khớp",
      excerpt: "Đau mỏi, sưng tấy khớp có thể là biểu hiện của thoái hóa. Đừng bỏ qua các dấu hiệu này...",
      image: "https://th.bing.com/th/id/OIP.ZQJY8O_jBKYVXqd7ElXrswHaE8?w=270&h=180&c=7&r=0&o=5&pid=1.7",
      date: "Th3",      
    },
    {
      title: "Massage giúp giảm đau lưng hiệu quả",
      excerpt: "Massage nhẹ nhàng vùng lưng có thể giúp thư giãn cơ và giảm cảm giác đau mỏi...",
      image: "https://th.bing.com/th/id/OIP.9EQGjh4tY-Y1LnAxoBP6AwHaE7?w=259&h=180&c=7&r=0&o=5&pid=1.7",
      date: "Th2",      
    }, {
      title: "Tư thế ngồi đúng giúp bảo vệ cột sống",
      excerpt: "Ngồi sai tư thế là nguyên nhân phổ biến gây đau lưng và cong vẹo cột sống, đặc biệt ở dân văn phòng...",
      image: "https://th.bing.com/th/id/OIP.AQfRJHp820EaHAECApxtEQHaEW?w=316&h=185&c=7&r=0&o=5&pid=1.7",
      date: "Th1",      
    },
    {
      title: "Tác hại của việc bẻ khớp tay thường xuyên",
      excerpt: "Thói quen bẻ khớp tay có thể gây tổn thương sụn và làm tăng nguy cơ viêm khớp...",
      image: "https://th.bing.com/th/id/OIP.Y437EaYdHrrWqL_F3gaZ3QHaE8?w=253&h=180&c=7&r=0&o=5&pid=1.7",
      date: "Th12",      
    },
    {
      title: "Yoga hỗ trợ điều trị đau cổ và vai gáy",
      excerpt: "Một số tư thế yoga đơn giản giúp tăng cường linh hoạt và giảm đau vùng cổ - vai gáy hiệu quả...",
      image: "https://th.bing.com/th/id/OIP.V1NSGmigkRLzdqfVKdM77AHaE8?w=246&h=180&c=7&r=0&o=5&pid=1.7",
      date: "Th11",      
    },
    {
      title: "Lựa chọn giày dép phù hợp giúp bảo vệ khớp chân",
      excerpt: "Giày dép không phù hợp dễ gây ảnh hưởng đến khớp gối và bàn chân. Cùng tìm hiểu cách chọn đúng...",
      image: "https://th.bing.com/th/id/OIP.JkTPYks3AjPmHmmkWIO8FQHaEh?w=307&h=187&c=7&r=0&o=5&pid=1.7",
      date: "Th10",      
    },
    {
      title: "Tắm nắng đúng cách để hấp thụ vitamin D tự nhiên",
      excerpt: "Vitamin D giúp tăng hấp thu canxi, rất quan trọng cho hệ xương chắc khỏe. Nên tắm nắng lúc nào?",
      image: "https://th.bing.com/th/id/OIP.3Y9SRzggzPL2NCCcQGPVYwHaE8?w=237&h=180&c=7&r=0&o=5&pid=1.7",
      date: "Th9",      
    }
  ];

const recentBoneJointPosts = boneJointArticles.slice(0, 3);
export default function ChamBenh() {
    const [page, setPage] = useState(1);
      const articlesPerPage = 6;
      const totalPages = Math.ceil(boneJointArticles.length / articlesPerPage);
      const startIndex = (page - 1) * articlesPerPage;
      const currentArticles = boneJointArticles.slice(startIndex, startIndex + articlesPerPage);    
  return (
    <Box sx={{ py: 8, bgcolor: "#f5f7fa" }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 } }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mb: 6, color: "#6a1b9a", textAlign: "center" }}
        >
          Dịch vụ chăm bệnh
        </Typography>

        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={6}>
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
                          bgcolor: "#6a1b9a",
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
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5 }}>
                      {article.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
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

            <Stack direction="row" justifyContent="center" sx={{ mt: 6 }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={(e, value) => setPage(value)}
                color="secondary"
                size="large"
              />
            </Stack>
          </Box>

          <Box flex={1} minWidth={{ xs: "100%", md: "360px" }} display="flex" flexDirection="column" gap={6}>                   
            {/* Bài viết mới nhất */}
            <Paper elevation={3} sx={{ p: 4, borderRadius: "16px", bgcolor: "#fff" }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: "#6a1b9a" }}>
                Bài Viết Mới Nhất
              </Typography>
              <Stack spacing={3}>
                {recentBoneJointPosts.map((post, i) => (
                  <Box
                    key={i}
                    display="flex"
                    alignItems="center"
                    sx={{ py: 1.5, borderBottom: i < recentBoneJointPosts.length - 1 ? "1px solid #eee" : "none" }}
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
                        "&:hover": { color: "#4a148c" },
                        cursor: "pointer",
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
  )
}
