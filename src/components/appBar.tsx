import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Toolbar, Avatar, Typography, IconButton, Badge, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import CropFreeIcon from '@mui/icons-material/CropFree';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import NotificationsIcon from '@mui/icons-material/Notifications';
import logo from '../assests/images/logo.jpg';
import profile from '../assests/images/conversation_1.jpg';
import colors from '../constants/colors';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    fontSize: '10px',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Line = styled(Typography)(({ theme }) => ({
    color: alpha(theme.palette.common.white, 0.15)
}));

const AppBarRoot = () => {

    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: colors.primary }}>
            <Toolbar sx={{ minHeight: '45px !important' }}>
                <Avatar sx={{ width: '25px', height: '25px', mr: 2 }}><img src={logo} alt="" width="100%" /></Avatar>
                <Typography noWrap component="div">
                    Boss Ultimate
                </Typography>
                <IconButton sx={{ ml: 3.5 }}>
                    <MenuIcon sx={{ color: colors.white }} />
                </IconButton>
                <Stack direction="row" alignItems="center" spacing={2} sx={{ml: 'auto'}}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon sx={{ fontSize: '13px' }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search UI"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Line>|</Line>
                    <CropFreeIcon fontSize='small' sx={{ color: colors.white }} />
                    <InvertColorsIcon fontSize='small' sx={{ color: colors.white }} />
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon fontSize='small' sx={{ color: colors.white }} />
                    </Badge>
                    <IconButton sx={{ p: 0 }}>
                        <Avatar sx={{ width: '30px', height: '30px' }} alt="Remy Sharp" src={profile} />
                    </IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
export default AppBarRoot;