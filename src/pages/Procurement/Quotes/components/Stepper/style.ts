import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
     stepperContainer: {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "8px",
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          border: "1px solid #E4E7EC",
     },
     step: {
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flex: 1,
          position: "relative",
          gap: 16,
          padding: 16,
     },
     stepCircle: {
          width: "32px",
          height: "32px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          marginBottom: "10px",
     },
     stepNumber: {
          fontWeight: 600,
     },
     completedCheck: {
          color: "#0F973D",
          fontWeight: 600,
     },
     stepContent: {
          textAlign: "left",
     },
     stepLabel: {
          fontWeight: 600,
          marginBottom: "5px",
     },
     stepDescription: {
          fontSize: "12px",
          color: "#98A2B3",
     },
     completedStep: {
          "& $stepCircle": {
               backgroundColor: "#E7F6EC",
               color: "#0F973D",
          },
          "& $stepLabel": {
               color: "#0F973D",
          },
     },
     activeStep: {
          "& $stepCircle": {
               backgroundColor: "#175CFF",
               color: "#FFFFFF",
          },
          "& $stepLabel": {
               color: "#175CFF",
          },
     },
     inactiveStep: {
          "& $stepCircle": {
               backgroundColor: "#FFFFFF",
               border: "1px solid #98A2B3",
               color: "#98A2B3",
          },
          "& $stepLabel": {
               color: "#98A2B3",
          },
     },
});

export default useStyles;
