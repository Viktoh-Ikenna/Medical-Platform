import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
     container: {
          padding: "20px",
          backgroundColor: "#F9FAFB",
     },
     header: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
     },
     headerTitle: {
          fontWeight: 600,
          fontSize: "20px",
     },
     headerActions: {
          display: "flex",
          gap: "10px",
     },
     actionButton: {
          borderRadius: "8px",
          padding: "8px 16px",
          fontSize: "14px",
          fontWeight: 600,
          textTransform: "capitalize !important" as any,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
     },
     createdDate: {
          marginTop: "10px",
          color: "#98A2B3",
     },
     quoteInformation: {
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          padding: "20px",
          marginBottom: "20px",
          border: "1px solid #E4E7EC",
     },
     sectionTitle: {
          marginBottom: "15px",
          fontWeight: 600,
     },
     infoGrid: {
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "50%",
          "& > div": {
               display: "flex",
               gap: 120,

               "& .title": {
                    minWidth: 200,
                    width: 200,
                    fontWeight: 500,
                    color: "#555E68",
                    fontFamily: "Satoshi",
                    fontSize: 16,
               },
          },
     },
     card: {
          border: "1px solid #E4E7EC",
          padding: 16,
          borderRadius: 8,
          alignItems: "flex-start",
          justifyContent: "flex-start",
          position: "relative",
          fontFamily: "Satoshi",
          width: "80%",
          flexDirection: "column",
     },
     userInfo: {
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          position: "relative",
          fontFamily: "Satoshi",
          marginTop: 10,
     },
     avatar: {
          width: "40px",
          height: "40px",
          marginRight: "10px",
     },
     userName: {
          fontSize: "14px",
          fontWeight: 700,
     },
     userEmail: {
          fontSize: "14px",
          color: "#A0A0A0",
          fontFamily: "Satoshi",
     },
     status: {
          backgroundColor: "#FFECE5",
          color: "#F56630",
          padding: "2px 8px",
          borderRadius: "8px",
     },
     itemsSection: {
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          padding: "20px",
          marginBottom: "20px",
     },
     tableContainer: {
          marginBottom: "15px",
          marginTop: 15,
     },
     table: {
          "& .MuiTableCell-root": {
               borderBottom: "none",
               padding: "12px 8px",
               fontSize: "14px",
               color: "#333",
          },
          "& .MuiTableHead-root": {
               backgroundColor: "#F7F8FC",
          },
     },
     totalAmount: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          paddingTop: "10px",
          borderTop: "1px solid #E5E7EB",
          fontSize: 16,
          color: "#475367",
          fontFamily: "Satoshi",
          gap: 16,
     },
     termsSection: {
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          padding: "20px",
     },
});

export default useStyles;
