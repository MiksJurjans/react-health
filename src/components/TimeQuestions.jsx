import React from "react";
import TimePicker from "./TimePicker";
import QuestionHeading from "./QuestionHeading";

const TimeQuestion = (props) => {
  return (
    <div>
      <QuestionHeading question={props.question} />
      <TimePicker
        key={props.question.identifier}
        question={props.question}
        answer={props.value}
        onTimeChange={props.onTimeChange}
      />
    </div>
  );
};

export default TimeQuestion;
