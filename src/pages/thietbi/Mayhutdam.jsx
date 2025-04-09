import { Avatar, Box, Container, Pagination, Paper, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
const TEST = [
    {
      image:'https://binhminhmedic.com/wp-content/uploads/2025/02/images-2-1.jpg',
      title:'Dịch vụ cho thuê máy thở, máy oxy, trợ tim, hút đàm',
      excerpt: 'Thở bình oxy tại nhà trong một số trường hợp là yêu cầu bắt buộc...'
    },
  ]
const recentBoneJointPosts = TEST.slice(0, 3);
export default function Mayhutdam() {
    const [page, setPage] = useState(1);
            const articlesPerPage = 6;
            const totalPages = Math.ceil(TEST.length / articlesPerPage);
            const startIndex = (page - 1) * articlesPerPage;
            const currentArticles = TEST.slice(startIndex, startIndex + articlesPerPage);    
  return (
    <Box sx={{ py: 8, bgcolor: "#f5f7fa" }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 } }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mb: 6, color: "#6a1b9a", textAlign: "center" }}
        >
          Cho thuê máy hút đàm
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
