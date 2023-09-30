/* eslint-disable react/prop-types */
import React from "react";
import QuestionHeading from "./QuestionHeading";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

const outlinedInputQuestions = [
  "q46",
  "q47",
  "q53",
  "q54",
  "q55",
  "q56",
  "q57",
  "q73"
];

const InputQuestion = (props) => {
  const isOutlinedInput = outlinedInputQuestions.includes(
    props.question.identifier
  );

  const handleInputChange = (event) => {
    const selectedAnswer = event.target.value;
    if (isOutlinedInput) {
      // Check if the input is not a number
      if (isNaN(selectedAnswer)) {
        alert("Please enter number, instead of text");
      } else {
        props.onAnswerChange(event, selectedAnswer);
      }
    } else {
      props.onAnswerChange(event, selectedAnswer);
    }
  };

  return (
    <div>
      <QuestionHeading question={props.question} />
      {isOutlinedInput ? (
        <OutlinedInput
          key={props.question.identifier}
          name={props.question.identifier}
          value={props.answer}
          onChange={handleInputChange}
          endAdornment={
            <InputAdornment position="end">
              {props.question.response}
            </InputAdornment>
          }
          sx={{
            fontFamily: "Graphik",
            fontSize: "12pt",
            borderRadius: "50px",
            border: "0px solid #D9D9D9",
            width: "600px",
            marginBottom: "20px"
          }}
        />
      ) : (
        <TextField
          key={props.question.identifier}
          name={props.question.identifier}
          value={props.answer}
          label="Your answer:"
          onChange={(event) => {
            const selectedAnswer = event.target.value;
            props.onAnswerChange(event, selectedAnswer);
          }}
          InputProps={{
            style: {
              fontFamily: "Graphik",
              fontSize: "12pt",
              borderRadius: "50px",
              border: "0px solid #D9D9D9",
              width: "600px",
              marginBottom: "20px"
            }
          }}
        />
      )}
    </div>
  );
};

export default InputQuestion;
