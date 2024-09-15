import { Index } from "../pages";
import { Calendar } from "../pages/Calendar/Calendar";
import { Communication } from "../pages/Communication/Communication";
import { Contracts } from "../pages/Contracts/Contracts";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Finance } from "../pages/Finance/Finance";
import { Inventory } from "../pages/Inventory/Inventory";
import { Orders } from "../pages/Procurement/Orders/Orders";
import { Procurement } from "../pages/Procurement/Procurement";
import { qoutesRoutes } from "../pages/Procurement/Quotes/route";

export const routeData = [
     {
          path: "/",
          element: <Index />,
          children: [
               {
                    path: "/dashboard",
                    element: <Dashboard />,
               },
               {
                    path: "/inventory",
                    element: <Inventory />,
               },
               {
                    path: "/procurement",
                    element: <Procurement />,
                    children: [...qoutesRoutes],
               },
               {
                    path: "/procurement/orders",
                    element: <Orders />,
               },
               {
                    path: "/finance",
                    element: <Finance />,
               },
               {
                    path: "/communication",
                    element: <Communication />,
               },
               {
                    path: "/calendar",
                    element: <Calendar />,
               },
               {
                    path: "/contracts",
                    element: <Contracts />,
               },
          ],
     },
];
