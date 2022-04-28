import React, { useState } from 'react';
import AppBar from '../AppBar';
import Drawer from '../Drawer';

function AppNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const handleMenuClick = () => setIsOpen((curr) => !curr);

  return (
    <>
      <AppBar onMenuClick={handleMenuClick} />
      <Drawer isOpen={isOpen} onClose={handleClose} />
    </>
  );
}

export default AppNavigation;
