import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
     root: {
          padding: "40px",
          backgroundColor: "#FFFFFF",
          borderRadius: "10px",
     },
     section: {
          marginBottom: "30px",
     },
     sectionTitle: {
          fontWeight: 600,
          marginBottom: "15px",
     },
     infoContainer: {
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#F9F9F9",
     },
     infoRow: {
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
     },
     infoLabel: {
          color: "#A0A0A0",
          fontWeight: 500,
     },
     infoValue: {
          fontWeight: 500,
     },
     requestorBox: {
          display: "flex",
          alignItems: "center",
     },
     requestorAvatar: {
          backgroundColor: "#FFA933",
          color: "#FFFFFF",
          width: "30px",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          marginRight: "10px",
          fontWeight: 600,
     },
     totalsContainer: {
          marginTop: "20px",
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
          gap: "10px",
     },
     totalRow: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
     },
     totalLabel: {
          fontWeight: 500,
     },
     totalValue: {
          fontWeight: 600,
     },
     termsText: {
          color: "#A0A0A0",
          fontSize: "14px",
     },
});

export default useStyles;
