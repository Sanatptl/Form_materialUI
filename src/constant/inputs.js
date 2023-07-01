export const personalInputProps = [
  {
    name: "FirstName",
    label: "First Name",
  },
  {
    name: "MiddleName",
    label: "Middle Name",
  },
  {
    name: "LastName",
    label: "Last Name",
  },
  {
    name: "MobileNo",
    label: "Mobile No",
    type: "number",

    // inputProps: { inputMode: "numeric", pattern: "[0-9]*" },
    InputProps: {
      inputProps: {
        step: 1,
        min: 0,
      },
      inputMode: "numeric",
      pattern: "[0-9]*",
      style: {
        MozAppearance: "textfield",
      },
    },
    inputProps: {
      style: {
        WebkitAppearance: "none",
        MozAppearance: "textfield",
      },
    },
  },
  {
    name: "Email",
    label: "Email",
    type: "email",
  },
  {
    name: "Birthdate",
    label: "Birthdate",
    type: "date",
    InputLabelProps: {
      shrink: true,
      required: false,
    },
  },
  {
    name: "Age",
    label: "Age",
    type: "number",
  },
  {
    name: "BloodGroup",
    label: "Blood Group",
    select: true,
    options: [
      { value: "AB", label: "AB" },
      { value: "A+", label: "A+" },
      { value: "A-", label: "A-" },
      { value: "B-", label: "B-" },
      { value: "O-", label: "O-" },
      { value: "O+", label: "O+" },
    ],
  },
  {
    name: "Height",
    label: "Height",
    type: "number",
  },
  {
    name: "Weight",
    label: "Weight",
    type: "number",
  },
  {
    name: "Gender",
    label: "Gender",
    radioOptions: ["Male", "Female"],
  },
  {
    name: "MaritalStatus",
    label: "Marital Status",
    radioOptions: ["Single", "Married", "Divorsed", "Widowed"],
  },
];

//

//

//

//

//

//

export const addressInputProps = [
  {
    name: "AddressLine1",
    label: "Address Line 1",
  },
  {
    name: "AddressLine2",
    label: "Address Line 2",
  },
  {
    name: "City",
    label: "City",
    select: true,
    options: [
      { value: "Surat", label: "Surat" },
      { value: "Ahmedabad", label: "Ahmedabad" },
      { value: "Navsari", label: "Navsari" },
      { value: "Vadodara", label: "Vadodara" },
      { value: "Rajkot", label: "Rajkot" },
      { value: "Mumbai", label: "Mumbai" },
      { value: "Indore", label: "Indore" },
      { value: "Noida", label: "Noida" },
    ],
  },
  {
    name: "State",
    label: "State",
    select: true,
    options: [
      { value: "Gujarat", label: "Gujarat" },
      { value: "Maharashtra", label: "Maharashtra" },
      { value: "Madhya Pradesh", label: "Madhya Pradesh" },
      { value: "Uttar Pradesh", label: "Uttar Pradesh" },
      { value: "Rajasthaan", label: "Rajasthaan" },
    ],
  },
  {
    name: "Country",
    label: "Country",
    select: true,
    options: [
      { value: "India", label: "India" },
      { value: "USA", label: "USA" },
    ],
  },
  {
    name: "PinCode",
    label: "Pin Code",
    type: "number",
  },
];
