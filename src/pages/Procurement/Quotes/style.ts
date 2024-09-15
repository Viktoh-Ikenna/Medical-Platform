import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
     root: {
          padding: "40px",
          backgroundColor: "#FFFFFF",
          borderRadius: "10px",
     },
     buttonGroup: {
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "20px",
          gap: "10px",
     },
     continueButton: {
          backgroundColor: "#0061F2",
          color: "#FFFFFF",
     },
     backButton: {
          color: "#0061F2",
     },
     cancelButton: {
          color: "#475367 !important",
          borderColor: "#E4E7EC !important",
          outline: "#E4E7EC !important",
     },
     saveButton: {
          color: "#0061F2",
          borderColor: "#0061F2",
     },
});

export default useStyles;
