import React from 'react';
import { styled } from '@mui/material/styles';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Chip } from '@mui/material';

import { products } from '../data/products';
import ProductDetails from '../sharedComponents/productDetails';
import UserDetails from '../sharedComponents/userDetails';
import Title from '../sharedComponents/title';
import StockDetails from '../sharedComponents/progressBar';

import colors from '../constants/colors';

const StyledTableHeader = styled(TableCell)(({ theme }) => ({
    fontSize: '12px',
    fontWeight: 'bold',
    color: colors.black2
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: colors.white2,
    },
    '&:last-child td, &:last-child th': {
        //   border: 1,
    },
}));

const StyledChip = styled(Chip)<any>(({ theme, label }) => ({
    fontSize: '10px',
    color: colors.white,
    background: label === 'Canceled' ? colors.peach :
        label === 'Sent' ? colors.green : label === 'Pending' ? colors.orange : colors.blue
}));

export default function Products() {
    return (
        <Paper sx={{ padding: '1rem' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableHeader>Products</StyledTableHeader>
                        <StyledTableHeader>Buyer</StyledTableHeader>
                        <StyledTableHeader align="right">Total</StyledTableHeader>
                        <StyledTableHeader>Status</StyledTableHeader>
                        <StyledTableHeader>Stock</StyledTableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((row: any) => (
                        <StyledTableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                            <ProductDetails
                                img={row.productDetails.img}
                                name={row.productDetails.name}
                                nameSub={row.productDetails.nameSub}
                            />
                            </TableCell>
                            <TableCell>
                                <UserDetails
                                    img={row.buyerDetails.img}
                                    title={row.buyerDetails.name}
                                    subTitle={row.buyerDetails.date}
                                />
                            </TableCell>
                            <TableCell align="right">
                                <Title title={row.total} style={{ fontWeight: 'normal', color: colors.black }} />
                            </TableCell>
                            <TableCell><StyledChip label={row.status} size="small" /></TableCell>
                            <TableCell><StockDetails details={row.stockDetails} status={row.status} /></TableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}
