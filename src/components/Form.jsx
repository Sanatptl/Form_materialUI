import { useState } from "react";
import { Box, Button } from "@mui/material";
import { useFormik } from "formik";
import { schemaPersonalInfo, schemaAddressInfo } from "./../schemas";
import {
  PersonalInfoForm,
  AddressInfoForm,
  ReviewForm,
  StepperBar,
} from "./index";

const steps = ["USER INFORMATION", "ADDRESS DETAILS", "Thank You"];

const Form = () => {
  const [formData, setFormData] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const formikPersonalInfo = useFormik({
    initialValues: {
      FirstName: "",
      MiddleName: "",
      LastName: "",
      MobileNo: "",
      Email: "",
      Birthdate: "",
      Age: "",
      BloodGroup: "",
      Height: "",
      Weight: "",
      Gender: "",
      MaritalStatus: "",
    },
    validationSchema: schemaPersonalInfo,
    validateOnMount: false,
    onSubmit: (val) => {
      setFormData((prev) => {
        return { ...prev, ...val };
      });
      handleNext();
    },
  });

  const formikAddressInfo = useFormik({
    initialValues: {
      AddressLine1: "",
      AddressLine2: "",
      City: "",
      State: "",
      Country: "",
      PinCode: "",
    },
    validationSchema: schemaAddressInfo,
    validateOnMount: false,
    onSubmit: (val) => {
      setFormData((prev) => {
        return { ...prev, ...val };
      });
      handleNext();
    },
  });

  const handleNext = () => {
    setActiveStep((prev) => steps.length - 1 !== prev && prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };
  return (
    <form
      onSubmit={
        activeStep === 0
          ? formikPersonalInfo.handleSubmit
          : activeStep === 1
          ? formikAddressInfo.handleSubmit
          : undefined
      }
    >
      <StepperBar activeStep={activeStep} steps={steps} />
      {activeStep === 0 && (
        <PersonalInfoForm
          error={formikPersonalInfo.errors}
          onChange={formikPersonalInfo.handleChange}
          value={formikPersonalInfo.values}
          onBlur={formikPersonalInfo.handleBlur}
          touched={formikPersonalInfo.touched}
        />
      )}
      {activeStep === 1 && (
        <AddressInfoForm
          error={formikAddressInfo.errors}
          onChange={formikAddressInfo.handleChange}
          value={formikAddressInfo.values}
          onBlur={formikAddressInfo.handleBlur}
          touched={formikAddressInfo.touched}
        />
      )}
      {activeStep === 2 && <ReviewForm formData={formData}></ReviewForm>}
      <Box sx={{ margin: 2 }}>
        {activeStep !== steps.length - 1 && (
          <Button
            variant="contained"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ marginRight: 2 }}
          >
            Back
          </Button>
        )}

        {activeStep === 0 && (
          <Button
            variant="contained"
            type="submit"
            disabled={activeStep === 0 && !formikPersonalInfo.isValid}
          >
            Next
          </Button>
        )}
        {activeStep === steps.length - 2 && (
          <Button
            variant="contained"
            disabled={activeStep === 1 && !formikAddressInfo.isValid}
            type="submit"
          >
            Submit
          </Button>
        )}
      </Box>
    </form>
  );
};

export default Form;
