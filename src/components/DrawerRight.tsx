import React from "react";
import Form from "./Form";
import CloseButton from "./CloseButton";

interface IDrawerRight {
  toggleDrawer: () => void;
  drawerOpen: boolean;
}

const DrawerRight: React.FC<IDrawerRight> = ({ drawerOpen, toggleDrawer }) => {
  return (
    <div
      id="drawer-right"
      className={`fixed inset-y-0 right-0 max-w-xl w-full bg-white shadow-lg p-4 transform transition-transform duration-300 ease-in-out ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <CloseButton toggleDrawer={toggleDrawer} />
      <Form />
    </div>
  );
};

export default DrawerRight;
