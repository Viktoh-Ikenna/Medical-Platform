import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routeData } from "../services/routesData";

const router = createBrowserRouter(routeData);

const AppRoutes: React.FC = () => {
     return <RouterProvider router={router} />;
};

export default AppRoutes;
