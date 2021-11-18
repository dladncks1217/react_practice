import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

const AppLayout = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List style={{ display: "flex", flexDirection: "row", padding: 0 }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List style={{ display: "flex", flexDirection: "row", padding: 0 }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default AppLayout;
{
  /* <>
      <header class="header">
        <div className="header-logo">
          <img
            alt="OP.GG"
            height="16"
            src="//opgg-static.akamaized.net/images/gnb/svg/00-opgglogo.svg"
            width="65"
          />
        </div>

        <nav>
          <div>
            <div className="navi-lol">
              <img
                src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-lol-white.svg"
                width="65"
                height="16"
              />
              <span>리그오브레전드</span>
            </div>
          </div>
        </nav>
      </header>
      {children}
    </> */
}
