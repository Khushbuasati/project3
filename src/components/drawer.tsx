import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
    Box, Drawer, Toolbar, List, Divider, ListItem, ListItemButton,
    ListItemIcon, ListItemText, ListItemAvatar, Avatar, Chip
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import profile from '../assests/images/conversation_1.jpg';
import Title from '../sharedComponents/title';
import { menuList } from '../data/drawerMenu';
import colors from '../constants/colors';

const drawerWidth = 200;

const StyledChip = styled(Chip)<any>(() => ({
    fontSize: '10px',
    color: colors.white,
    background: colors.primary,
    height: '17px',
    '& .MuiChip-label': {
        paddingLeft: '8px',
        paddingRight: '8px'
    }
}));

export default function DrawerRoot() {

    const [menuOpenIndex, setMenuOpenIndex] = useState<number>(0);
    const [selectedMenuItemDetails, setSelectedMenuItemDetails] = useState<any>({ parentMenuIndex: 0, subMenuIndex: 1, childMenuIndex: 1 });

    const handleMenuChange = (index: number) => {
        setMenuOpenIndex((prev: number) => prev === index ? -1 : index);
    };

    const handleMenuItemChange = (parentIndex: number, subMenuItemIndex: number, childIndex: number) => {
        setSelectedMenuItemDetails({
            parentMenuIndex: parentIndex, subMenuIndex: subMenuItemIndex, childMenuIndex: childIndex
        });
    };

    const isSelected = (index: number, subItemIndex: number, subItemIndex1: number) => {
        return index === selectedMenuItemDetails.parentMenuIndex && subItemIndex === selectedMenuItemDetails.subMenuIndex && subItemIndex1 === selectedMenuItemDetails.childMenuIndex;
    }

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar sx={{ minHeight: '45px !important' }} />
            <Box sx={{ overflow: 'auto' }}>
                <ListItem sx={{ background: colors.secondary }}>
                    <ListItemAvatar sx={{ minWidth: '34px' }}>
                        <Avatar sx={{ width: '60px', height: '60px', marginRight: '0.7rem' }}>
                            <img src={profile} alt="J" width="100%" />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={<Title title="John Doe" style={{ color: colors.white, fontSize: '16px' }} />}
                        secondary={<>
                            <Title title="Administrator" style={{ fontWeight: 'normal', fontSize: '9px', color: colors.white3 }} />
                            <Title
                                title={<><FiberManualRecordIcon sx={{ fontSize: '12px', color: colors.green2, margin: '5px 2px -2px 0px' }} />Online</>}
                                style={{ fontWeight: 'normal', color: colors.white3, fontSize: '11px' }}
                            />
                        </>}
                    />
                </ListItem>
                <List sx={{ overflow: 'auto', height: '78vh' }}>
                    {menuList.map((item: any, index: number) => (
                        <>
                            <ListItem key={item.id} disablePadding>
                                <ListItemButton onClick={() => handleMenuChange(index)}>
                                    <ListItemIcon sx={{ minWidth: '29px' }}>
                                        <item.Icon fontSize="small" sx={{ color: index === menuOpenIndex || index === selectedMenuItemDetails.parentMenuIndex ? colors.secondary : colors.grey }} />
                                    </ListItemIcon>
                                    <ListItemText 
                                    primary={
                                    <Title title={item.name} 
                                    style={{ color: index === menuOpenIndex || index === selectedMenuItemDetails.parentMenuIndex ? colors.secondary : colors.grey, fontWeight: index === menuOpenIndex ? 'normal' : 'bold' }} />} />
                                    {menuOpenIndex > -1 && menuOpenIndex === index ? <ExpandLessIcon fontSize='small' /> : <ExpandMoreIcon fontSize='small' />}
                                </ListItemButton>
                            </ListItem>
                            {
                                menuOpenIndex > -1 && menuOpenIndex === index && item.list1.map((listItem: any, subItemIndex: number) => (
                                    <>
                                        <ListItem key={item.id} sx={{marginBottom: '-18px'}}>
                                            <ListItemButton onClick={() => handleMenuItemChange(index, subItemIndex, 0)}>
                                                <ListItemText primary={<Title title={listItem.name} style={{ color: colors.pink, fontSize: '10px', textTransform: 'uppercase' }} />} />
                                            </ListItemButton>
                                        </ListItem>
                                        {listItem.list2.map((data: string, subItemIndex1: number) => (
                                            <ListItem key={item.id} disablePadding>
                                                <ListItemButton
                                                    sx={{
                                                        background: isSelected(index, subItemIndex, subItemIndex1) ? colors.lightPurple3 : 'transparent',
                                                        borderRadius: '4px',
                                                        margin: '0rem 1rem',
                                                        padding: '7px 16px'
                                                    }}
                                                    onClick={() => handleMenuItemChange(index, subItemIndex, subItemIndex1)}>
                                                    <ListItemText primary={
                                                        <Title title={data}
                                                            style={{
                                                                fontSize: '12px',
                                                                color: isSelected(index, subItemIndex, subItemIndex1) ? colors.secondary : colors.black2, fontWeight: 'normal'
                                                            }}
                                                        />}
                                                    />
                                                    {subItemIndex === 0 && subItemIndex1 === 0 && <StyledChip label="Hot" />}
                                                </ListItemButton>
                                            </ListItem>
                                        ))}
                                    </>
                                ))
                            }
                        </>
                    ))}
                </List>
                <Divider />
            </Box>
        </Drawer >
    );
}
