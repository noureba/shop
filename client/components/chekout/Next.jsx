import React from "react";
import {Button} from '@mui/material'

function Next(props) {
  return (
    <Button
      disabled={props.activeNext}
      onClick={props.handleNext} 
      variant="contained" 
      color="info" >
      {props.activeStep === props.steps.length - 1 ? "Order" : "Next"}
    </Button>
  );
}

export default Next;
