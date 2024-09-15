import { ReactComponent as DashboardIcon } from "../assets/icons/dashboard.svg";
import { ReactComponent as InventoryIcon } from "../assets/icons/inventory.svg";
import { ReactComponent as ProcurementIcon } from "../assets/icons/procurement.svg";
import { ReactComponent as FinanceIcon } from "../assets/icons/finance.svg";
import { ReactComponent as CommunicationIcon } from "../assets/icons/communication.svg";
import { ReactComponent as CalendarIcon } from "../assets/icons/calendar.svg";
import { ReactComponent as ContractsIcon } from "../assets/icons/contracts.svg";
import { ReactComponent as SupportIcon } from "../assets/icons/support.svg";
import { ReactComponent as SettingsIcon } from "../assets/icons/settings.svg";

export const menuItems = [
     {
          name: "Dashboard",
          path: "/dashboard",
          icon: DashboardIcon,
     },
     {
          name: "Inventory",
          path: "/inventory",
          icon: InventoryIcon,
     },
     {
          name: "Procurement",
          icon: ProcurementIcon,
          subMenu: [
               {
                    name: "Quotes",
                    path: "/procurement/quotes",
                    // icon: QuotesIcon,
               },
               {
                    name: "Orders",
                    path: "/procurement/orders",
                    // icon: OrdersIcon,
               },
          ],
     },
     {
          name: "Finance",
          path: "/finance",
          icon: FinanceIcon,
     },
     {
          name: "Communication",
          path: "/communication",
          icon: CommunicationIcon,
          badge: 10,
     },
     {
          name: "Calendar",
          path: "/calendar",
          icon: CalendarIcon,
          badge: 10,
     },
     {
          name: "Contracts",
          path: "/contracts",
          icon: ContractsIcon,
     },
     {
          name: "Support",
          path: "/support",
          icon: SupportIcon,
          footerSiderbar: true,
     },
     {
          name: "Settings",
          path: "/settings",
          icon: SettingsIcon,
          footerSiderbar: true,
     },
];
