import React from "react";
import {Box, Stepper, Step, StepLabel, Typography} from "@mui/material";
import Info from "../components/chekout/Info";
import Payment from "../components/chekout/Payments";
import Order from "../components/chekout/Order";
import Next from "../components/chekout/Next";
import Back from "../components/chekout/Back";
import Layout from "../components/Layout";
import {InfoSchema} from '../components/validations/InfoSchema'


function Chekout() {
  const steps = ["Info", "Payment", "Order"];
  const [activeStep, setActiveStep] = React.useState(0);
  const [data, setData] = React.useState({
    FirstName:"",
    LastName:"",
    City:"",
    Address:"",
    Telephone:"",
    Email:"",
  })

  const onChange = (e)=>{
    const {name, value} = e.target
    setData({
      ...data,
      [name]: value,
    })
  }

  const handleNext = async() => {
    const isValid = await InfoSchema.isValid(data)
    console.log(isValid)
    if(isValid){
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Layout title="Chekout">
      <Box sx={{
        maxWidth:'1300px',
        margin:"100px auto",
        padding:'20px'
      }}>
        <Stepper activeStep={activeStep}>
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <Box>
            <Typography sx={{ mt: 2, mb: 1 }}>Your Order has been registed</Typography>
          </Box>
        ) : activeStep === 0 ? (
          <Box sx={{maxWidth:"600px", margin:"50px auto"}}>
            <Info data={data} onChange={onChange}/>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Back activeStep={activeStep} handleBack={handleBack} />
              <Box sx={{ flex: "1 1 auto" }} />
              <Next
                handleNext={handleNext}
                activeStep={activeStep}
                steps={steps}
                activeNext={false}
              />
            </Box>
          </Box>
        ) : activeStep === 1 ? (
          <Box  sx={{maxWidth:"600px", margin:"50px auto"}}>
            <Payment />
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Back activeStep={activeStep} handleBack={handleBack} />
              <Box sx={{ flex: "1 1 auto" }} />
              <Next
                handleNext={handleNext}
                activeStep={activeStep}
                steps={steps}
              />
            </Box>
          </Box>
        ) : activeStep === 2 ? (
          <Box  sx={{maxWidth:"600px", margin:"50px auto"}}>
            <Order />
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Back activeStep={activeStep} handleBack={handleBack} />
              <Box sx={{ flex: "1 1 auto" }} />
              <Next
                handleNext={handleNext}
                activeStep={activeStep}
                steps={steps}
              />
            </Box>
          </Box>
        ) : (
          <Box>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Back activeStep={activeStep} handleBack={handleBack} />
              <Box sx={{ flex: "1 1 auto" }} />
              <Next
                handleNext={handleNext}
                activeStep={activeStep}
                steps={steps}
              />
            </Box>
          </Box>
        )}
      </Box>
    </Layout>
  );
}


export default Chekout