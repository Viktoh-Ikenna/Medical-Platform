import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
     sidebar: {
          minWidth: "272px",
          height: "100vh",
          backgroundColor: "#F8F9FC",
          padding: "16px 10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
     },
     logo: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          //   marginBottom: "10px",
     },
     logoImage: {
          width: "110%",
          //   height: 100,
     },
     majorContainer: {
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingBottom: 30,
     },

     logoText: {
          fontWeight: 600,
          fontSize: "14px",
          color: "#175CFF",
          textAlign: "center",
          fontFamily: "Satoshi",
     },
     link: {
          textDecoration: "none",
          cursor: "pointer",
          color: "#344054",
          position: "relative",
          fontFamily: "Satoshi",
          fontWeight: 400,
          fontSize: 14,
          marginBottom: "8px !important",
          "&:hover": {
               backgroundColor: "#E3EAFB",
               borderRadius: "8px",
          },
     },
     activeLink: {
          backgroundColor: "#E3EAFB",
          color: "#175CFF",
          borderRadius: "8px",
          fontFamily: "Satoshi",
          fontWeight: 400,
          fontSize: 14,
          "& $icon": {
               color: "#175CFF",
          },
     },
     icon: {
          width: "24px",
          height: "24px",
          fill: "currentColor",
     },
     nested: {
          paddingLeft: "20px",
     },
     bottomLinks: {
          //   marginTop: "auto",
     },
     userInfo: {
          display: "flex",
          alignItems: "center",
          paddingTop: "20px",
          justifyContent: "start",
          paddingLeft: 16,
          position: "relative",
          fontFamily: "Satoshi",
     },
     logoutIcon: { position: "absolute", right: 20 },
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
     badge: {
          backgroundColor: "#175CFF",
          color: "#FFFFFF",
          padding: "2px 6px",
          borderRadius: "12px",
          fontSize: "12px",
          marginLeft: "auto",
          alignSelf: "center",
     },
     update: {
          backgroundColor: "#175CFF",
          color: "#fff",
          width: "30px",
          fontSize: "12px",
          fontFamily: "Inter, Arial, sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
          padding: "2px 0px",
          fontWeight: 500,
     },
});

export default useStyles;
