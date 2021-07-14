import React from "react";
import { default as RDropdown } from "react-dropdown";
import "react-dropdown/style.css";

const options = ["Brisbane", "Sydney", "Melbourne"];

const Dropdown: React.FC = () => {
  return <RDropdown options={options}>Dropdown</RDropdown>;
};

export default Dropdown;
