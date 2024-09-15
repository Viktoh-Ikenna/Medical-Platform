import React from "react";
import AppRoutes from "./routes";
import { ThemeProvider } from "@mui/styles";
import theme from "./theme";

const App: React.FC = () => {
     return (
          <ThemeProvider theme={theme}>
               <AppRoutes />
          </ThemeProvider>
     );
};

export default App;
