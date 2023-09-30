import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import QuestionHeading from "./QuestionHeading";

const marks = [
  {
    value: 0,
    label: "0 %"
  },
  {
    value: 50,
    label: "50 %"
  },
  {
    value: 100,
    label: "100 %"
  }
];

function valuetext(value) {
  return { value };
}

function SliderQuestion(props) {
  return (
    <div>
      <QuestionHeading question={props.question} />
      <Box sx={{ width: 600, marginBottom: "20px", marginTop: "40px" }}>
        <Slider
          key={props.question.identifier}
          defaultValue={props.sliderValue}
          getAriaValueText={valuetext}
          step={10}
          marks={marks}
          valueLabelDisplay="on"
          onChange={(_, newValue) => props.onSliderChange(newValue)}
          style={{
            color: "#D9D9D9"
          }}
        />
      </Box>
    </div>
  );
}

export default SliderQuestion;
