import React from "react";
import QuestionHeading from "./QuestionHeading";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const MultipleChoiceQuestions = (props) => {
  return (
    <div>
      <QuestionHeading question={props.question} />
      {props.question.type === "select_choice" && (
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id={`${props.question.label}-label`}>
              Select option:
            </InputLabel>
            <Select
              name={props.question.identifier}
              id={props.question.identifier}
              value={props.answer}
              labelId={`${props.question.label}-label`}
              label="Select Option:"
              sx={{
                fontFamily: "Graphik",
                fontSize: "12pt",
                borderRadius: "50px",
                width: "600px"
              }}
              onChange={(event) => {
                const selectedValue = event.target.value;
                const selectedLabel = props.question.options.find(
                  (option) => option.value === selectedValue
                ).label;

                props.onAnswerChange(event, selectedLabel);
              }}
            >
              <MenuItem value="" disabled>
                Select Option:
              </MenuItem>
              {props.question.options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      )}
    </div>
  );
};

export default MultipleChoiceQuestions;
