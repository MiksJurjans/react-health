import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import QuestionHeading from "./QuestionHeading";

const CheckboxQuestion = (props) => {
  const { question, selectedOptions, onSelectedOptionsChange } = props;

  const handleOptionChange = (optionValue) => {
    let updatedOptions;
    if (selectedOptions.includes(optionValue)) {
      updatedOptions = selectedOptions.filter((value) => value !== optionValue);
    } else {
      updatedOptions = [...selectedOptions, optionValue];
    }
    onSelectedOptionsChange(updatedOptions);
  };

  return (
    <div>
      <QuestionHeading question={props.question} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)"
        }}
      >
        {question.options.map((option) => (
          <div key={option.value} style={{ marginBottom: "10px" }}>
            <FormControlLabel
              control={
                <Checkbox
                  value={option.value}
                  checked={selectedOptions.includes(option.value)}
                  onChange={() => handleOptionChange(option.value)}
                />
              }
              label={
                <span
                  style={{
                    fontFamily: "Graphik",
                    fontSize: "12pt"
                  }}
                >
                  {option.label}
                </span>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxQuestion;
