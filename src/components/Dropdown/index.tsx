import React, { useState } from "react";
import { default as RDropdown } from "react-dropdown";
import "react-dropdown/style.css";
import "./styles.css";

// Note: Library uses CSS for styling
// So we cannot use styled components here

const options = ["Brisbane", "Sydney", "Melbourne"];

const Dropdown: React.FC = () => {
  const [curOption, setCurOption] = useState(options[0]);

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
