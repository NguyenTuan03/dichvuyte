import React from 'react'
import ScrollToTop from 'react-scroll-to-top'
import { Container, Grid } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';

export default function MainLayout({ children }) {
    return (
        <>
            <Grid
            >
                <Grid item>
                    <Header />
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
