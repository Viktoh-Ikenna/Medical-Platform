//@ts-nocheck
import React, { useState } from "react";
import {
     Box,
     List,
     ListItem,
     ListItemText,
     ListItemIcon,
     Collapse,
     Avatar,
     Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import useStyles from "./style";
import { NavLink } from "react-router-dom";
import { menuItems } from "../../services/menuData";
import logo from "../../assets/images/logo.png";
import { ReactComponent as LogoutIcon } from "../../assets/icons/logout.svg";
import _ from "lodash";

const Sidebar: React.FC = () => {
     const classes = useStyles();
     const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>({});

     // Toggle submenu
     const handleSubMenuToggle = (name: string) => {
          setOpenSubMenus((prevState) => ({
               ...prevState,
               [name]: !prevState[name],
          }));
     };

     return (
          <Box className={classes.sidebar}>
               <Box className={classes.logo}>
                    <img src={logo} alt="Logo" className={classes.logoImage} />
               </Box>
               <Box className={classes.majorContainer}>
                    <List>
                         {menuItems
                              .filter((menuItem) => !menuItem.footerSiderbar)
                              .map((menuItem) => {
                                   const IconComponent = menuItem.icon;

                                   return (
                                        <React.Fragment key={menuItem.name}>
                                             {menuItem.subMenu ? (
                                                  <>
                                                       <ListItem
                                                            button
                                                            style={{ marginBottom: 8 }}
                                                            onClick={() =>
                                                                 handleSubMenuToggle(menuItem.name)
                                                            }
                                                       >
                                                            <ListItemIcon>
                                                                 {IconComponent && (
                                                                      <IconComponent
                                                                           className={classes.icon}
                                                                      />
                                                                 )}
                                                            </ListItemIcon>
                                                            <ListItemText
                                                                 primary={menuItem.name}
                                                                 style={{
                                                                      marginLeft: "-16px",
                                                                      fontFamily: "Satoshi",
                                                                      fontWeight: 400,
                                                                 }}
                                                            />
                                                            {openSubMenus[menuItem.name] ? (
                                                                 <ExpandLess />
                                                            ) : (
                                                                 <ExpandMore />
                                                            )}
                                                       </ListItem>
                                                       <Collapse
                                                            in={openSubMenus[menuItem.name]}
                                                            timeout="auto"
                                                            unmountOnExit
                                                       >
                                                            <List component="div" disablePadding>
                                                                 {menuItem.subMenu.map(
                                                                      (subItem) => (
                                                                           <NavLink
                                                                                key={subItem.name}
                                                                                to={subItem.path}
                                                                                className={
                                                                                     classes.link
                                                                                }
                                                                                activeClassName={
                                                                                     classes.activeLink
                                                                                }
                                                                           >
                                                                                <ListItem
                                                                                     button
                                                                                     className={
                                                                                          classes.nested
                                                                                     }
                                                                                >
                                                                                     <ListItemIcon>
                                                                                          {subItem.icon && (
                                                                                               <subItem.icon
                                                                                                    className={
                                                                                                         classes.icon
                                                                                                    }
                                                                                               />
                                                                                          )}
                                                                                     </ListItemIcon>
                                                                                     <ListItemText
                                                                                          primary={
                                                                                               subItem.name
                                                                                          }
                                                                                     />
                                                                                </ListItem>
                                                                           </NavLink>
                                                                      ),
                                                                 )}
                                                            </List>
                                                       </Collapse>
                                                  </>
                                             ) : (
                                                  <NavLink
                                                       to={menuItem.path}
                                                       className={classes.link}
                                                       activeClassName={classes.activeLink}
                                                  >
                                                       <ListItem style={{ marginBottom: 8 }} button>
                                                            <ListItemIcon>
                                                                 {IconComponent && (
                                                                      <IconComponent
                                                                           className={classes.icon}
                                                                      />
                                                                 )}
                                                            </ListItemIcon>
                                                            <ListItemText
                                                                 style={{
                                                                      marginLeft: "-16px",
                                                                      fontFamily: "Satoshi",
                                                                      fontWeight: 400,
                                                                 }}
                                                                 primary={menuItem.name}
                                                            />
                                                            {menuItem.badge && (
                                                                 <span className={classes.update}>
                                                                      {menuItem.badge}
                                                                 </span>
                                                            )}
                                                       </ListItem>
                                                  </NavLink>
                                             )}
                                        </React.Fragment>
                                   );
                              })}
                    </List>
                    <Box className={classes.bottomLinks}>
                         <List>
                              {menuItems
                                   .filter((menuItem) => menuItem.footerSiderbar)
                                   .map((menuItem) => {
                                        const IconComponent = menuItem.icon;

                                        return (
                                             <NavLink
                                                  to={menuItem.path}
                                                  className={classes.link}
                                                  activeClassName={classes.activeLink}
                                             >
                                                  <ListItem style={{ marginBottom: 8 }} button>
                                                       <ListItemIcon>
                                                            {IconComponent && (
                                                                 <IconComponent
                                                                      className={classes.icon}
                                                                 />
                                                            )}
                                                       </ListItemIcon>
                                                       <ListItemText
                                                            style={{
                                                                 marginLeft: "-16px",
                                                                 fontFamily: "Satoshi",
                                                                 fontWeight: 400,
                                                            }}
                                                            primary={menuItem.name}
                                                       />
                                                       {menuItem.badge && (
                                                            <span className={classes.update}>
                                                                 {menuItem.badge}
                                                            </span>
                                                       )}
                                                  </ListItem>
                                             </NavLink>
                                        );
                                   })}
                         </List>
                         {/* User Info */}
                         <Box className={classes.userInfo}>
                              <Avatar
                                   src="/path/to/avatar.jpg"
                                   alt="User Avatar"
                                   className={classes.avatar}
                              />
                              <Box>
                                   <Typography className={classes.userName}>Mark Benson</Typography>
                                   <Typography className={classes.userEmail}>
                                        {_.truncate("markbenson@core.com", {
                                             separator: "...",
                                             length: 15,
                                        })}
                                   </Typography>
                              </Box>
                              <span className={classes.logoutIcon}>
                                   <LogoutIcon />
                              </span>
                         </Box>
                    </Box>
               </Box>
          </Box>
     );
};

export default Sidebar;
