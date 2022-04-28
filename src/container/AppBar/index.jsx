import React, { useContext } from "react";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { AuthContext } from "../../contexts/AuthContext";

function AppBar({ onMenuClick }) {
  const { isLogin, clearAuthToken } = useContext(AuthContext);

  return (
    <MuiAppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography>Health Monitoring</Typography>
        {isLogin && (
          <Button color="inherit" onClick={clearAuthToken}>
            Log Out
          </Button>
        )}
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
