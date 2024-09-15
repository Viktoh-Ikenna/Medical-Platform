import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
     navbar: {
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundColor: "#FFFFFF !important",
          padding: "4px 20px",
          boxShadow: "none",
          borderBottom: "1px solid #E0E0E0",
          gap: 16,
          position: "sticky",
          top: 0,
          zIndex: 10,
     },
     search: {
          display: "flex",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          padding: "6px 12px",
          width: "40%",
          border: "1px solid #E0E0E0",
     },
     searchIcon: {
          color: "#9E9E9E",
     },
     inputRoot: {
          width: "100%",
     },
     inputInput: {
          padding: "8px",
          width: "100%",
     },
     icons: {
          display: "flex",
          alignItems: "center",
     },
     icon: {
          color: "#9E9E9E",
          marginRight: "20px",
     },
     profile: {
          display: "flex",
          alignItems: "center",
     },
     avatar: {
          width: "40px",
          height: "40px",
     },
     dropdownIcon: {
          color: "#9E9E9E",
          marginLeft: "10px",
     },
});

export default useStyles;
