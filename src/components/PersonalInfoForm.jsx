import {
  Container,
  Grid,
  MenuItem,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import { personalInputProps } from "./../constant/inputs";

const PersonalInfoForm = ({ onBlur, value, onChange, error, touched }) => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Grid container spacing={2}>
        {personalInputProps.map((props) => (
          <Grid key={props.name} item xs={12} md={6}>
            {props.radioOptions ? (
              <FormControl
                component="fieldset"
                fullWidth
                error={
                  !!error[props.name] && touched[props.name] ? true : false
                }
              >
                <FormLabel component="legend">{props.label}</FormLabel>
                <RadioGroup name={props.name} row>
                  {props.radioOptions?.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio inputProps={{ "aria-label": option }} />}
                      label={option}
                      checked={value[props.name] === option}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                  ))}
                </RadioGroup>
                {!error[props.name] && (
                  <FormHelperText>{error[props.name]}</FormHelperText>
                )}
              </FormControl>
            ) : (
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
                error={
                  !!error[props.name] && touched[props.name] ? true : false
                }
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
            )}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PersonalInfoForm;
