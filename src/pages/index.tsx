import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export const Index = () => {
     return (
          <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
               <Sidebar />
               <div style={{ width: "100%", overflow: "scroll" }}>
                    <Navbar />
                    <div style={{ flexGrow: 1, overflow: "scroll" }}>
                         <Outlet />
                    </div>
               </div>
          </div>
     );
};
