import React, { useState } from "react";
import "./App.css";
import DrawerButton from "./components/DrawerButton";
import DrawerRight from "./components/DrawerRight";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <DrawerButton toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
      <DrawerRight toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
    </div>
  );
}

export default App;
