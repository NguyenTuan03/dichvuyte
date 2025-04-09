import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { NAVIGATION } from '../../enum/navigation'
import { useNavigate } from 'react-router'

export default function Header() {
  const HEADER = [
    {
      name: 'Hộp thư',
      img: '/envelop.svg',
      email:'admin@binhminhmedic.com'
    },
    {
      name: 'Đường dây nóng',
      img: '/phone.svg',
      email:'0976 858 115'
    },
  ]
  const nav = useNavigate()
  return (
    <Box width={"100%"}>
        <Stack height={'112px'} flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <img src='/Logo.jpg' width={'120px'} height={'112px'}/>
            <Grid container flex={1}>
                {HEADER.map((item, index) => (
                  <Grid size={4} item xs={12} md={6} lg={6} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Stack key={index} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} sx={{marginLeft:'20px'}}>
                      <img src={item.img} width={'38px'} height={'38px'}/>
                      <Box>
                        <Typography color={'#1964ba'} sx={{marginLeft:'10px', fontSize:'16px', fontWeight:600}}>{item.name}</Typography>
                        <Typography sx={{marginLeft:'10px', fontSize:'16px', fontWeight:400}}>{item.email}</Typography>
                      </Box>
                    </Stack>
                  </Grid>
                ))}                
              <Grid size={4} item xs={12} md={6} lg={6} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <Box>
                    <Button size='medium' sx={{borderRadius:'99px', backgroundColor:'#ff8484', padding:'8px 30px 8px 30px', color:'#fff'}}>Đặt lịch</Button>
                  </Box>
              </Grid>
            </Grid>            
        </Stack> 
        {/* Navigation */}
        <Stack height={'55px'} flexDirection={"row"} alignItems={"center"}>
            {
              NAVIGATION.map((item, index) => {
                return (
                  <Box key={index} sx={{
                    cursor:'pointer',
                    position:'relative',
                    transition:'all 0.3s ease-in-out',
                    "&:hover .submenu": {
                      display: "block",
                      transition:"all ease 0.2s",
                    },
                  }} onClick={() => {
                    if (!item.children && item.to) {
                      nav(item.to);
                    }
                  }}>
                      <Stack flexDirection={'row'} alignItems={'center'} sx={{
                        marginLeft:'20px',
                        cursor:'pointer',
                        position:'relative',
                      display:'line-block',                      
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: "50%",
                        bottom: 0,
                        width: 0,
                        height: "2px",
                        backgroundColor: "#1964ba",
                        color: "yellow",
                        transition: "all 0.3s ease",
                        transform: "translateX(-50%)",
                      },                      
                      "&:hover::after": {
                        width: "100%",
                      },
                      }}>
                        <Typography color={'#002760'} sx={{fontSize:'14px', fontWeight:600,cursor:'pointer'}}>{item.name}</Typography>
                        {item.icon && <item.icon />}
                      </Stack>
                      {
                        item.children && (
                        <Stack
                            className="submenu"
                            sx={{
                              position: "absolute",
                              top: "100%",
                              left: 0,
                              padding:'10px 0',
                              backgroundColor: "#fff",
                              color: "#000",
                              display: "none",
                              minWidth: "200px",
                              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                              zIndex: 10,
                              transition: "all ease 0.2s",
                            }}
                          >
                           {item.children.map((child, idx) => (
                              <Box
                                key={idx}
                                onClick={() => nav(child.to)}
                                sx={{
                                  padding: "20px 10px",
                                  transition: "all ease 0.2s",
                                  color:'#4d494994',
                                  cursor: "pointer",
                                  "&:hover": {
                                    color: "#000",
                                  }
                                }}
                              >
                                {child.name}
                              </Box>
                              ))}

                        </Stack>
                        )
                      }
                  </Box>
                )
              })
            }
        </Stack>
    </Box>
  )
}
