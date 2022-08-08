import React from "react";
import {Button} from '@mui/material'

function Back(props) {
  return (
    <Button
      disabled={props.activeStep === 0}
      onClick={props.handleBack}
      sx={{ mr: 1 }}
      variant="contained" 
      color="info"
    >
      Back
    </Button>
  );
}

export default Back;
