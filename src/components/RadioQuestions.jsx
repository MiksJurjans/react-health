/* eslint-disable react/prop-types */
import React from "react";
import femaleImg from "../img/female.jpg";
import maleImg from "../img/male.jpg";
import stoolImg from "../img/stool_type.jpg";
import Radio from "@mui/material/Radio";
import { grey } from "@mui/material/colors";
import CardMedia from "@mui/material/CardMedia";
import QuestionHeading from "./QuestionHeading";

const RadioQuestion = (props) => {
  return (
    <div>
      <QuestionHeading question={props.question} />
      {props.question.identifier === "q58" && props.gender === "Female" && (
        <CardMedia
          component="img"
          width="450"
          height="300"
          image={femaleImg}
          alt="Female"
        />
      )}
      {props.question.identifier === "q58" && props.gender === "Male" && (
        <CardMedia
          component="img"
          width="450"
          height="300"
          image={maleImg}
          alt="Male"
        />
      )}
      {props.question.identifier === "q61" && (
        <CardMedia
          component="img"
          width="400"
          height="300"
          image={stoolImg}
          alt="Stool"
        />
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: "10px"
        }}
      >
        {Object.keys(props.question.options).map((optionLabel) => (
          <label
            key={optionLabel}
            style={{
              fontFamily: "Graphik",
              fontSize: "12pt",
              display: "flex",
              alignItems: "center",
              margin: "10px 0", // Adds vertical margin between rows
              marginLeft: "10%"
            }}
          >
            <Radio
              icon={
                <span
                  style={{
                    width: 24, // Adjust the size here
                    height: 24, // Adjust the size here
                    borderRadius: "50%", // Makes it circular
                    border: "1px solid" // Adjust the border style here
                  }}
                />
              }
              checkedIcon={
                <span
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    border: "1px solid",
                    backgroundColor: "white",
                    position: "relative" // To position the inner circle
                  }}
                >
                  <span
                    style={{
                      width: "75%", // Adjust the size of the inner circle here
                      height: "75%", // Adjust the size of the inner circle here
                      borderRadius: "50%",
                      backgroundColor: "grey", // Inner circle color
                      position: "absolute",
                      top: "12.5%", // Adjust the position of the inner circle
                      left: "12.5%" // Adjust the position of the inner circle
                    }}
                  ></span>
                </span>
              }
              sx={{
                color: grey[500],
                "&.Mui-checked": {
                  color: grey[500]
                }
              }}
              name={props.question.identifier}
              value={props.question.options[optionLabel]}
              checked={props.answer === props.question.options[optionLabel]}
              onChange={(event) => {
                const selectedAnswer = optionLabel;
                props.onAnswerChange(event, selectedAnswer);
              }}
            />
            <span style={{ marginLeft: "8px" }}>{optionLabel}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioQuestion;
