import * as React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import { Box, IconButton, Grid, MobileStepper, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MoodIcon from '@mui/icons-material/Mood';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { stepper2 } from '../data/stepperDetails';
import colors from '../constants/colors';
import Title from '../sharedComponents/title';

const StyledButton = styled(Button)(({ theme }) => ({
  fontSize: '10px',
  color: colors.white2,
  borderColor: `${colors.white2} !important`,
}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const SwipeableStepper1 = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = stepper2.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {[0, 1, 2, 3, 4].map((step: any, index: number) => (
          <Grid key={step}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                sx={{
                  height: 250,
                  background: colors.green2,
                  borderRadius: '12px',
                  padding: '2rem 1rem 1rem'
                }}
              >
                <MoodIcon sx={{ color: colors.white }} />
                <Title title='Aliquam nec ex aliquet, aliquam neque non, gravida est.' style={{ color: colors.white2, mb: 3 }} />
                <Title title='Published in Campaign' style={{ color: colors.white2, fontWeight: 'normal', fontSize: '12px', mb: 0.6 }} />
                <StyledButton variant="outlined" size="small">Read mora</StyledButton>
                <Grid item xs={12} sx={{ textAlign: 'end' }}>
                  <MoodIcon sx={{ color: '#9cc671', fontSize: '4rem' }} />
                </Grid>
              </Box>
            ) : null}
          </Grid>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          background: colors.white,
          padding: 0,
        }}
        nextButton={
          <IconButton onClick={handleNext}
            disabled={activeStep === maxSteps - 1}>
            <ArrowForwardIcon sx={{ fontSize: '14px' }} />
          </IconButton>
        }
        backButton={
          <IconButton onClick={handleBack} disabled={activeStep === 0}>
            <ArrowBackIcon sx={{ fontSize: '14px' }} />
          </IconButton>
        }
      />
    </Box>
  );
}

export default SwipeableStepper1;
