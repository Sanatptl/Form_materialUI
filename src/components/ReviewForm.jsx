import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Container,
} from "@mui/material";

const fieldNames = [
  "FirstName",
  "MiddleName",
  "LastName",
  "MobileNo",
  "Email",
  "Birthdate",
  "Age",
  "BloodGroup",
  "Height",
  "Weight",
  "Gender",
  "MaritalStatus",
  "AddressLine1",
  "AddressLine2",
  "City",
  "State",
  "Country",
  "PinCode",
];

const ReviewForm = ({ formData }) => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography
        variant="h3"
        sx={{
          fontSize: {
            xs: "2rem",
            sm: "3rem",
          },
        }}
        color={"secondary"}
        gutterBottom
      >
        Data added successfully
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fieldNames.map((fieldName) => (
              <TableRow>
                <TableCell align="left">{fieldName}</TableCell>
                <TableCell align="Left">{formData[fieldName]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ReviewForm;
