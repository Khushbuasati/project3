import * as React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import { Box, MobileStepper, Button, Grid } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { stepper2 } from '../data/stepperDetails';
import colors from '../constants/colors';

const StyledButton = styled(Button)(({ theme }) => ({
  fontSize: '10px',
  fontWeight: 'bold',
  color: colors.black2
}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const SwipeableStepper2 = () => {
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
        {stepper2.map((step: string, index: number) => (
          <Grid key={step}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 238,
                  width: '100%',
                  borderTopLeftRadius: '3px',
                  borderTopRightRadius: '3px'
                }}
                src={step}
                alt="img"
              />
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
          <StyledButton
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            <KeyboardArrowRight />
          </StyledButton>
        }
        backButton={
          <StyledButton
            onClick={handleBack} disabled={activeStep === 0}
          >
            <KeyboardArrowLeft />
            Back
          </StyledButton>
        }
      />
    </Box>
  );
}

export default SwipeableStepper2;
