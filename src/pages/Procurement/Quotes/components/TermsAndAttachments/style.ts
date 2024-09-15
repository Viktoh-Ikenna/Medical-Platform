import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
     root: {
          padding: "40px",
          backgroundColor: "#FFFFFF",
          borderRadius: "10px",
     },
     title: {
          fontWeight: 600,
          marginBottom: "10px",
     },
     subTitle: {
          color: "#A0A0A0",
          marginBottom: "30px",
     },
     formSection: {
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginBottom: "30px",
     },
     formGroup: {
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
     },
     formControl: {
          flex: 1,
     },
     fileUpload: {
          textAlign: "center",
          marginBottom: "30px",
          padding: "20px",
          border: "1px dashed #C4C4C4",
          borderRadius: "8px",
          backgroundColor: "#F9F9F9",
     },
     uploadText: {
          color: "#9E9E9E",
          marginBottom: "5px",
     },

     uploadSubtext: {
          color: "#C4C4C4",
     },
     uploadBox: {
          padding: "40px 20px",
          borderRadius: "8px",
          marginBottom: "30px",
          cursor: "pointer",
     },
     fileInput: {
          display: "none",
     },
     browseButton: {
          color: "#0061F2",
     },
     buttonGroup: {
          display: "flex",
          justifyContent: "flex-end",
          gap: "20px",
     },
     cancelButton: {
          color: "#C4C4C4",
     },
});

export default useStyles;
