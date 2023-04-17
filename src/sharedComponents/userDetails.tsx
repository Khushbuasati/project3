import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Title from './title';
import colors from '../constants/colors';

interface Props {
    img: string; title: string; subTitle: string;
}

const UserDetails = ({img, title, subTitle}: Props) => {
    return (
        <ListItem sx={{ padding: 0 }}>
            <ListItemAvatar sx={{minWidth: '34px'}}>
                <Avatar sx={{width: '25px', height: '25px'}}>
                    <img src={img} alt={title} width="100%" />
                </Avatar>
            </ListItemAvatar>
            <ListItemText 
            primary={<Title title={title} style={{color: colors.black3}} />} 
            secondary={<Title title={`Purchased Date: ${subTitle}`} style={{fontWeight: 'normal', fontSize: '12px'}} />} 
            />
        </ListItem>
    );
};
export default UserDetails;