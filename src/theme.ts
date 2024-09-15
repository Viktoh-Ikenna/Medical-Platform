import { createTheme } from "@mui/material/styles";

const theme = createTheme({
     typography: {
          fontFamily: ["Satoshi", "Inter", "Arial", "sans-serif"].join(","),
     },
     components: {
          MuiTypography: {
               defaultProps: {
                    fontFamily: ["Satoshi", "Inter", "Arial", "sans-serif"].join(","),
               },
          },
     },
});

export default theme;
