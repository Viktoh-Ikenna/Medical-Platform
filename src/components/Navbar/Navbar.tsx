import React from "react";
import { InputBase, IconButton, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useStyles from "./style";
import { ReactComponent as ChatIcon } from "../../assets/icons/chat-icon.svg";
import { ReactComponent as NotificationIcon } from "../../assets/icons/notification.svg";
import { ReactComponent as DownArrow } from "../../assets/icons/down-arrow.svg";

const Navbar: React.FC = () => {
     const classes = useStyles();

     return (
          <div className={classes.navbar}>
               {/* Search Box */}
               <div className={classes.search}>
                    <SearchIcon className={classes.searchIcon} />
                    <InputBase
                         placeholder="Search here..."
                         classes={{
                              root: classes.inputRoot,
                              input: classes.inputInput,
                         }}
                         inputProps={{ "aria-label": "search" }}
                    />
               </div>
               <div className={classes.icons}>
                    <IconButton size="large">
                         <NotificationIcon style={{ width: 30, height: 35 }} />
                    </IconButton>
                    <IconButton size="large" style={{ marginRight: 12 }}>
                         <ChatIcon style={{ width: 30, height: 30 }} />
                    </IconButton>
                    <div className={classes.profile}>
                         <Avatar alt="User Profile" src="/profile.jpg" className={classes.avatar} />
                         <DownArrow className={classes.dropdownIcon} />
                    </div>
               </div>
          </div>
     );
};

export default Navbar;
