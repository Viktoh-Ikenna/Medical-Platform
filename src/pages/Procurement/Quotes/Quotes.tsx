import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import CustomStepper from "./components/Stepper/CustomStepper";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import useStyles from "./style";

const steps = [
     {
          label: "Request Information",
          description: "Provide details about this RFQ",
          path: "/procurement/quotes/response/information",
     },
     {
          label: "Terms and Attachments",
          description: "Payment and delivery terms",
          path: "/procurement/quotes/response/terms",
     },
     {
          label: "Review",
          description: "Confirm all information provided",
          path: "/procurement/quotes/response/review",
     },
];

const Quotes: React.FC = () => {
     const classes = useStyles();
     const navigate = useNavigate();
     const location = useLocation();

     const activeStep = steps.findIndex((step) => step.path === location.pathname.toString());

     const handleNext = () => {
          if (activeStep < steps.length - 1) {
               navigate(steps[activeStep + 1].path);
          }
     };

     const handleBack = () => {
          if (activeStep > 0) {
               navigate(steps[activeStep - 1].path);
          }
     };

     return (
          <Box className={classes.root}>
               <CustomStepper steps={steps} activeStep={activeStep} />
               <Box>
                    <Outlet />
               </Box>

               <Box className={classes.buttonGroup}>
                    <Button variant="outlined" color="info" className={classes.cancelButton}>
                         Cancel
                    </Button>
                    <Button variant="outlined" className={classes.saveButton}>
                         Save as Draft
                    </Button>
                    {activeStep > 0 && (
                         <Button onClick={handleBack} className={classes.backButton}>
                              Back
                         </Button>
                    )}
                    {activeStep < steps.length - 1 && (
                         <Button
                              variant="contained"
                              onClick={handleNext}
                              className={classes.continueButton}
                         >
                              Continue
                         </Button>
                    )}
                    {activeStep === steps.length - 1 && (
                         <Button variant="contained" color="primary">
                              Submit
                         </Button>
                    )}
               </Box>
          </Box>
     );
};

export default Quotes;
