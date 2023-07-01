import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";
import { Form } from "./components";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    // margin: theme.spacing(2),
    // textAlign: "center",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Container
      sx={{ backgroundColor: "#FFFFFF", padding: 4, minHeight: "100vh" }}
      className={classes.container}
      maxWidth="lg"
    >
      <Form />
    </Container>
  );
};

export default App;
