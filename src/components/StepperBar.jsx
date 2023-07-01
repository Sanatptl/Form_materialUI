import { Step, StepLabel, Stepper } from "@mui/material";
const StepperBar = (props) => {
  return (
    <Stepper activeStep={props.activeStep} alternativeLabel>
      {props.steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default StepperBar;
