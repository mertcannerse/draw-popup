import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

interface ICloseButtonProps {
  toggleDrawer: () => void;
}

const CloseButton: React.FC<ICloseButtonProps> = ({ toggleDrawer }) => {
  return (
    <button
      className="mt-11 bg-gray-400 rounded-full"
      onClick={toggleDrawer}
      aria-controls="drawer-right"
    >
      <FontAwesomeIcon icon={faCircleXmark} size="2xl" color="lightgray" />
    </button>
  );
};

export default CloseButton;
