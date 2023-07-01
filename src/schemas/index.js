import * as yup from "yup";

export const schemaPersonalInfo = yup.object({
  FirstName: yup
    .string()
    .required("First Name is a required field")
    .min(2, "Must be greater than two characters")
    .max(12, "Must be less than 12 characters"),
  MiddleName: yup
    .string()
    .required("Middle Name is a required field")
    .min(2, "Must be greater than two characters")
    .max(12, "Must be less than 12 characters"),
  LastName: yup
    .string()
    .required("Last Name is a required field")
    .min(2, "Must be greater than two characters")
    .max(12, "Must be less than 12 characters"),
  MobileNo: yup
    .number()
    .min(1000000000, "Mobile Number must be a 10-digit number")
    .max(9999999999, "Mobile Number must be a 10-digit number")
    .required("Mobile No is a required field"),
  Age: yup
    .number()
    .required("Age is a required field")
    .min(18, "You must be at least 18 years old")
    .max(60, "You must be at most 60 years old"),
  Height: yup.number().required("Height is a required field"),
  Weight: yup.number().required("Weight is a required field"),
  Email: yup
    .string()
    .email("Invalid email address")
    .required("Email is a required field"),
  BloodGroup: yup.string().required("Blood Group is a required field"),
  Gender: yup.string().required("Please select your Gender"),
  MaritalStatus: yup.string().required("Please select Marital Status"),
  Birthdate: yup.date().required("Birthdate is a required field"),
});

//

//

//

//

//

export const schemaAddressInfo = yup.object({
  AddressLine1: yup.string().required("Address Line1 is a required field"),
  AddressLine2: yup.string().required("Address Line2 is a required field"),
  City: yup.string().required("City is a required field"),
  State: yup.string().required("State is a required field"),
  Country: yup.string().required("Country is a required field"),
  PinCode: yup
    .number()
    .min(100000, "Pin Code must be a 6-digit number")
    .max(999999, "Pin Code must be a 6-digit number")
    .required("Pin Code is a required field"),
});
