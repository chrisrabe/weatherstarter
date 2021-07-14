import React, { useState } from "react";
import { default as RDropdown } from "react-dropdown";
import "react-dropdown/style.css";
import "./styles.css";

// Note: Library uses CSS for styling
// So we cannot use styled components here

interface DropdownProps {
  options: string[];
  curOption: string;
  setCurOption: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  const { options, curOption, setCurOption } = props;

  return (
    <RDropdown
      controlClassName="dropdown"
      options={options}
      value={curOption}
      onChange={(option) => setCurOption(option.value)}
    >
      Dropdown
    </RDropdown>
  );
};

export default Dropdown;
