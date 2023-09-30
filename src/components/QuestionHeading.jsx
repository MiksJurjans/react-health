/* eslint-disable react/prop-types */
import React from "react";
import Typography from "@mui/material/Typography";

const QuestionHeading = (props) => {
  return (
    <div>
      <Typography
        variant="h5"
        style={{
          fontFamily: "Sectra",
          fontSize: "24pt",
          fontWeight: 600,
          margin: "16pt 0"
        }}
      >
        {props.question.label}
      </Typography>
      <Typography
        variant="body1"
        style={{ fontFamily: "Graphik", fontSize: "16pt", margin: "16pt 0" }}
      >
        {props.question.text}
      </Typography>
      <Typography
        variant="body2"
        style={{ fontFamily: "Graphik", fontSize: "12pt", margin: "16pt 0" }}
      >
        {props.question.note}
      </Typography>
    </div>
  );
};

export default QuestionHeading;
