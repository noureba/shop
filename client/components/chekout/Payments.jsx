import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import Paypal from './Paypal'

function Payments() {

  const [state, setState] = React.useState(false);

  return (
    <Box>
      <FormControl>
        <FormLabel>Payment methods</FormLabel>
        <RadioGroup defaultValue="COD" onChange={() => setState(!state)}>
          <FormControlLabel value="COD" control={<Radio />} label="COD" />
          <FormControlLabel value="Paypal" control={<Radio />} label="Paypal" />
        </RadioGroup>
      </FormControl>
      {state ? <Paypal/>: ""}
    </Box>
  );
}

export default Payments;
