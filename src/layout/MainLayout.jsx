import React from 'react'
import ScrollToTop from 'react-scroll-to-top'
import {Container, Grid} from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';

export default function MainLayout({children}) {
  return (
    <>
        <Grid
            width={'100%'}
            container
            direction="column"
            sx={{
                height: '100%',
                 minHeight: '100vh',
                 overflow:'visible'
            }} 
        >
            <Grid item>
                <Container>
                    <Header />
                </Container>
            </Grid>
            
            <Grid item >
                {children}
            </Grid>

            <Grid item>
                <Footer />
            </Grid>
            <ScrollToTop smooth />
        </Grid>
    </>
  )
}
