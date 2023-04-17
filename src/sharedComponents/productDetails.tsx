import React from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Title from './title';
import colors from '../constants/colors';

interface Props {
    img: string; name: string; nameSub: string;
}

const ProductDetails = ({ img, name, nameSub }: Props) => {
    return (
        <ListItem sx={{ padding: 0 }}>
            <ListItemAvatar sx={{ minWidth: '34px' }}>
                <Avatar variant="square" sx={{ width: '75px', height: '70px', borderRadius: '4px', mr: 2 }}>
                    <img src={img} alt={name} width="100%" />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={<Title title={nameSub} style={{ fontWeight: 'normal', fontSize: '12px' }} />}
                secondary={<>
                    <Title title="Administrator" style={{ color: colors.black3 }} />
                    <Title
                        title={<><ArrowDownwardIcon sx={{ fontSize: '12px', color: colors.secondary, margin: '5px 2px -2px 0px' }} />INVOICE_{nameSub}</>}
                        style={{ fontWeight: 'normal', color: colors.secondary, fontSize: '11px' }}
                    />
                </>}
            />
        </ListItem>
    );
};
export default ProductDetails;