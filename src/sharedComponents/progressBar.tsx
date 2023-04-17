import React from 'react';
import { Stack, Typography } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import colors from '../constants/colors';

const BorderLinearProgress = styled(LinearProgress)<any>(({ theme, status }) => ({
    height: 3,
    marginBottom: '0.5rem',
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: colors.lightPurple2,
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: status === 'Canceled' ? colors.peach : 
        status === 'Sent' ? colors.green : status === 'Pending' ? colors.orange : colors.blue,
    },
}));

interface Props {
    details: any;
    status: string;
}

const StockDetails = ({ details, status }: Props) => {
    const {StockIcon, stockValue} = details;
    return (
        <Stack>
            <Stack direction="row" alignItems="center">
                <StockIcon sx={{color: colors.primary}} fontSize="small" />
                <Typography sx={{fontSize: '12px', color: colors.black2, marginLeft: '9px' }}>{`${stockValue[0]} / ${stockValue[1]}`}</Typography>
            </Stack>
            <BorderLinearProgress variant="determinate" status={status} value={details.stockProgress} />
        </Stack>
    );
}

export default StockDetails;