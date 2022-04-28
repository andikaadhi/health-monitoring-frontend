import React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import {
  Box, List, ListItem, ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';

function Drawer({ isOpen, onClose }) {
  return (
    <MuiDrawer anchor="left" open={isOpen} onClose={onClose}>
      <Box sx={{ width: '200px' }}>
        <Link to="/updates">
          <List>
            <ListItem>
              <ListItemText primary="Quick Updates" />
            </ListItem>
          </List>
        </Link>

        <Link to="/patients">
          <List>
            <ListItem>
              <ListItemText primary="Patients" />
            </ListItem>
          </List>
        </Link>
      </Box>
    </MuiDrawer>
  );
}

export default Drawer;
