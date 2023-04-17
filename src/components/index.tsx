import React from 'react';
import { Box, Grid, CssBaseline, Toolbar } from '@mui/material';
import AppBarRoot from './appBar';
import DrawerRoot from './drawer';
import Products from './products';
import SwipeableStepper1 from './swipableStepper1';
import SwipeableStepper2 from './swipableStepper2';
import Calculator from './calculator';

const Main = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBarRoot />
            <DrawerRoot />
            <Box component="main" sx={{ flexGrow: 1 }}>
                <Toolbar sx={{ minHeight: '45px !important' }} />
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12}>
                        <Products />
                    </Grid>
                    <Grid item xs={6} md={6} sm={6} lg={4}>
                        <SwipeableStepper1 />
                    </Grid>
                    <Grid item xs={6} md={6} sm={6} lg={4}>
                        <SwipeableStepper2 />
                    </Grid>
                    <Grid item xs={6} md={6} sm={7} lg={4}>
                        <Calculator />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Main;