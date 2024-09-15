import React from "react";
import useStyles from "./style";

interface Step {
     label: string;
     description: string;
}

interface CustomStepperProps {
     steps: Step[];
     activeStep: number;
}

const CustomStepper: React.FC<CustomStepperProps> = ({ steps, activeStep }) => {
     const classes = useStyles();

     return (
          <div className={classes.stepperContainer}>
               {steps.map((step, index) => {
                    let stepClass = "";
                    if (activeStep > index) {
                         stepClass = classes.completedStep;
                    } else if (activeStep === index) {
                         stepClass = classes.activeStep;
                    } else {
                         stepClass = classes.inactiveStep;
                    }

                    return (
                         <div key={index} className={`${classes.step} ${stepClass}`}>
                              <div className={classes.stepCircle}>
                                   {activeStep > index ? (
                                        <span className={classes.completedCheck}>{index + 1}</span>
                                   ) : (
                                        <span className={classes.stepNumber}>{index + 1}</span>
                                   )}
                              </div>
                              <div className={classes.stepContent}>
                                   <div className={classes.stepLabel}>{step.label}</div>
                                   <div className={classes.stepDescription}>{step.description}</div>
                              </div>
                         </div>
                    );
               })}
          </div>
     );
};

export default CustomStepper;
