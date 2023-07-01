import { Container, Grid, TextField, MenuItem } from "@mui/material";

import { addressInputProps } from "./../constant/inputs";

const AddressInfoForm = ({ onBlur, value, onChange, error, touched }) => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Grid container spacing={2}>
        {addressInputProps.map((props) => (
          <Grid key={props.name} item xs={12} md={6}>
            <TextField
              name={props.name}
              label={props.label}
              type={props.type}
              InputLabelProps={
                props.InputLabelProps
                  ? props.InputLabelProps
                  : { required: false }
              }
              fullWidth
              select={props.select}
              InputProps={props.InputProps}
              margin="normal"
              required
              value={value[props.name]}
              error={!!error[props.name] && touched[props.name] ? true : false}
              helperText={
                !!error[props.name] && touched[props.name]
                  ? `${error[props.name]}`
                  : null
              }
              onBlur={onBlur}
              onChange={onChange}
            >
              {props.options?.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AddressInfoForm;
