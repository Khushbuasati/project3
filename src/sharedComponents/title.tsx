import React, { Children } from 'react';
import Typography from '@mui/material/Typography';
import colors from '../constants/colors';

interface Props {
    title: String | any;
    style?: Object;
}

const Title = ({ title, style = {} }: Props) => {
    return (
        <Typography
            sx={{ fontSize: '14px', fontWeight: 'bold', color: colors.black2, ...style }}
        >
            {title}
        </Typography>
    );
};

export default Title;