import React, { useState, useEffect } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import BritishFlag from "../img/Brittish_flag.png";
import LatvianFlag from "../img/Latvia_flag.png";

const LanguageSelector = ({ onSelectLanguage }) => {
  // Initialize selectedLanguage with the default value "eng"
  const [selectedLanguage, setSelectedLanguage] = useState("lat");

  // Function to handle language selection
  const handleLanguageChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedLanguage(selectedValue);
    onSelectLanguage(selectedValue);
  };

  // useEffect to call onSelectLanguage with the default value "lat" when the component mounts
  useEffect(() => {
    onSelectLanguage(selectedLanguage);
  }, [onSelectLanguage, selectedLanguage]);

  return (
    <div>
      <Select
        sx={{
          width: "180px",
          height: "50px",
          backgroundColor: "#fff",
        }}
        onChange={handleLanguageChange}
        value={selectedLanguage}
      >
        <MenuItem value="eng">
          <img
            src={BritishFlag}
            alt="English Flag"
            style={{
              marginRight: "10px",
              height: "20px",
              width: "30px",
              verticalAlign: "middle",
            }}
          />
          English
        </MenuItem>
        <MenuItem value="lat">
          <img
            src={LatvianFlag}
            alt="Latvian Flag"
            style={{
              marginRight: "10px",
              height: "20px",
              width: "30px",
              verticalAlign: "middle",
            }}
          />
          Latviešu
        </MenuItem>
      </Select>
    </div>
  );
};

export default LanguageSelector;
