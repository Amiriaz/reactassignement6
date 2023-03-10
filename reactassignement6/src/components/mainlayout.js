import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Route, Routes, useNavigate } from "react-router-dom";
import Posts from "../dashboardscreens/post";
import CommentsScreen from "../dashboardscreens/comments";
import PostForm from "../dashboardscreens/postform";
import Messenger from "../dashboardscreens/messenger"
import Notification from "../dashboardscreens/notification"
import Feedback from "../dashboardscreens/feedback"
const drawerWidth = 160;

export default function MainLayout() {
  const [menuList, setMenuList] = React.useState([
      {
          name: "Post Screen",
          route: "post",
        },
        {
            name: "Comments Screen",
            route: "comments",
        },
        {
            name: "Post Form",
            route: "postform",
        },
        {
            name: "Messenger",
            route: "messenger",
          },
          {
            name: "Notification",
            route: "notification",
          },
        {
            name: "Feedback",
        route: "feedback",
      },
  ]);

  let navigate = useNavigate();
  let changeScreen = (route) => {
    navigate(route);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h5" noWrap component="div">
          Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {menuList.map((x, index) => (
            <ListItem
              onClick={() => changeScreen(x.route)}
              key={index}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={x.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 2 }}
      >
        <Toolbar />
        <Routes>
          <Route path="post/" element={<Posts />} />
          <Route path="comments/" element={<CommentsScreen />} />
          <Route path="postform/" element={<PostForm />} />
          <Route path="postform/:id" element={<PostForm />} />
          <Route path="messenger/" element={<Messenger />} />
          <Route path="notification/" element={<Notification />} />
          <Route path="feedback/" element={<Feedback />} />
        </Routes>
      </Box>
    </Box>
  );
}