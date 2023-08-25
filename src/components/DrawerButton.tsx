import React from "react";

interface IDrawerButtonProps {
  toggleDrawer: () => void;
  drawerOpen: boolean;
}

const DrawerButton: React.FC<IDrawerButtonProps> = ({
  toggleDrawer,
  drawerOpen,
}) => {
  return (
    <button
      className="bg-blue-500 text-white p-2 rounded"
      onClick={toggleDrawer}
      aria-controls="drawer-right"
      aria-expanded={drawerOpen}
    >
      {drawerOpen ? "Close Drawer" : "Open Drawer"}
    </button>
  );
};

export default DrawerButton;
