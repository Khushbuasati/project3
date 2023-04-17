import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Button, Box, Paper, Stack, InputBase } from '@mui/material';
import colors from '../constants/colors';

const StyledBox = styled(Box)(() => ({
    background: colors.secondary,
    padding: '10px 0px 5px 20px' 
}));

const ButtonRoot = styled(Grid)(() => ({
    display: 'flex', gap: '8px', marginBottom: '8px'
}));

const StyledButton = styled(Button)(() => ({
    fontSize: '10px',
    fontWeight: 'bold',
    color: colors.white,
    background: colors.lightPurple,
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'transparent',
    '&:hover': {
        backgroundColor: 'transparent'
    },
    width: '100%',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: colors.white,
    fontSize: '22px',
    '& .MuiInputBase-input': {
        textAlign: 'end',
        width: '100%',
    },
}));

function Calculator() {

    // state of entered value and result
    const [val, setVal] = useState<any>(0);

    // No allow to add number after '='
    let status__number = false;
    let last_char = val[val.length - 1];
    try { if (val.toString().includes('=')) status__number = true } catch (err) { }

    // let new_val = val;
    if (last_char === '/' || last_char === '*' || last_char === '-' || last_char === '+' || last_char === '=') {
        last_char = true;

    } else {
        last_char = false;
    }

    // numbers click function
    function ButtonClk(e: any) {
        return (
            val === 0 ? setVal(e.target.innerText) : status__number ? setVal(val.toString().replace(val.slice(val.indexOf('='),), "" + e.target.innerText)) : setVal(val + "" + e.target.innerText)
        )
    }

    // operators click function
    function Operation(e: any) {
        return (
            !last_char ? !status__number ? setVal(val + "" + e.target.innerText) : setVal(val.toString().replace(val.slice(val.indexOf('='),), "" + e.target.innerText)) : setVal(val.slice(0, -1) + e.target.innerText)
        )
    }

    // enter (=) click function
    function Enter(e: any) {
        let result;
        let status = false;
        try { if (val.length) { result = eval(val); status = true } } catch (ex) { }

        return (
            status ? !last_char ? setVal(val + "" + e.target.innerText + result) : setVal(0) : setVal(0)
        )

    }

    /* eslint no-eval: 0 */
    function Clear() {
        setVal(0)
    }

    // backspace function 
    function BackCR() {
        if (val.length > 1) { setVal(val.slice(0, -1)) } else { setVal(0) }
    }

    return (
        <StyledBox component={Paper}>
            <Search>
                <StyledInputBase
                    placeholder="0"
                    value={val}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <ButtonRoot>
                <StyledButton onClick={Clear}>C</StyledButton>
                <StyledButton onClick={BackCR}>←</StyledButton>
                <StyledButton onClick={Operation}>/</StyledButton>
                <StyledButton onClick={Operation}>*</StyledButton>
            </ButtonRoot>
            <ButtonRoot>
                <StyledButton onClick={ButtonClk}>7</StyledButton>
                <StyledButton onClick={ButtonClk}>8</StyledButton>
                <StyledButton onClick={ButtonClk}>9</StyledButton>
                <StyledButton onClick={Operation}>-</StyledButton>
            </ButtonRoot>
            <ButtonRoot>
                <StyledButton onClick={ButtonClk}>4</StyledButton>
                <StyledButton onClick={ButtonClk}>5</StyledButton>
                <StyledButton onClick={ButtonClk}>6</StyledButton>
                <StyledButton onClick={Operation}>+</StyledButton>
            </ButtonRoot>
            <Stack direction="row">
                <Stack>
                    <ButtonRoot>
                        <StyledButton onClick={ButtonClk}>1</StyledButton>
                        <StyledButton onClick={ButtonClk}>2</StyledButton>
                        <StyledButton onClick={ButtonClk}>3</StyledButton>
                    </ButtonRoot>
                    <ButtonRoot>
                        <StyledButton sx={{ width: '8.5rem' }} onClick={ButtonClk}>0</StyledButton>
                        <StyledButton onClick={ButtonClk}>.</StyledButton>
                    </ButtonRoot>
                </Stack>
                <ButtonRoot sx={{ marginLeft: '8px' }}>
                    <StyledButton onClick={Enter} sx={{background: colors.orange2}}>=</StyledButton>
                </ButtonRoot>
            </Stack>
        </StyledBox >
    );
}

export default Calculator;