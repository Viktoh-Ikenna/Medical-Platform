import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
     container: {
          padding: 20,
          border: "1px solid #E4E7EC",
          borderRadius: 8,
          marginTop: 40,
     },
     title: {
          fontWeight: 600,
          marginBottom: "10px",
     },
     subTitle: {
          color: "#A0A0A0",
          marginBottom: "20px",
     },
     formSection: {
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginBottom: "40px",
          marginTop: 40,
     },
     formGroup: {
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
     },
     tableContainer: {
          marginTop: 20,
          marginBottom: "20px",
          boxShadow: "none",
     },
     tableHeader: {
          fontWeight: "bolder important",
          fontSize: "14px !important",
          backgroundColor: "#F7F8FC",
          borderBottom: "none !important",
          padding: "4px 16px !important",
          color: "#667185 !important",
          fontFamily: "Satoshi !important",
     },
     tableCell: {
          padding: "10px 8px",
          fontSize: "14px",
          borderBottom: "none !important",
     },
     textInputTable: {
          "& .MuiInputBase-input": {
               fontSize: "14px",
               padding: "8px",
          },
     },
     addItemButton: {
          marginBottom: "20px",
          textAlign: "right",
     },
     subTotal: {
          textAlign: "right",
          marginTop: "10px",
          marginBottom: "20px",
          color: "#475367",
          fontFamily: "Satoshi !important",
     },

     noteField: {
          marginTop: "20px",
     },
     deleteIcon: {
          color: "#FF0000",
     },
     textInput: {
          height: 40,
          "& .MuiInputBase-input": {
               color: "#98A2B3",
               height: 4,
               background: "#F0F2F5",
          },
     },
});

export default useStyles;
