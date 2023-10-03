/* eslint-disable react/prop-types */
import React from "react";
import RadioQuestion from "./RadioQuestions";
import TimeQuestion from "./TimeQuestions";
import MultipleChoiceQuestions from "./MultipleChoiceQuestions";
import InputQuestions from "./InputQuestions";
import CheckboxQuestions from "./CheckboxQuestions";
import BackgroundImage from "./BackgroundImage";
import Box from "@mui/material/Box";
import MyButton from "./Button";
import Comment from "./Comment";
import SliderQuestion from "./SliderQuestions";

const QuestionRenderer = (props) => {
  switch (props.question.type) {
    case "radio":
      return (
        <div>
          <BackgroundImage />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "600px", // Desired width
              margin: "0 auto", // Center horizontally
              boxSizing: "border-box"
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start", // Align components left
                width: "100%", // Full width
                marginBottom: "16px" // Add margin between this group and the next
              }}
            >
              <RadioQuestion
                question={props.question}
                answer={props.answer}
                answerText={props.answerText}
                onAnswerChange={props.onAnswerChange}
                comment={props.comment}
                onCommentChange={props.onCommentChange}
                gender={props.gender}
              />
            </Box>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 0, width: "100%" }
              }}
              noValidate
              autoComplete="off"
            >
              <Comment
                question={props.question}
                onCommentChange={props.onCommentChange}
                value={props.comment}
                selectedLanguage={props.selectedLanguage}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end", // Align components left
                width: "100%", // Full width
                marginTop: "36px" // Add margin between this group and the next
              }}
            >
              <MyButton onClick={props.onQuestionChange} buttonText={props.selectedLanguage === "eng" ? "Next" : "Tālāk"} />
            </Box>
          </Box>
        </div>
      );

    case "time":
      return (
        <div>
          <BackgroundImage />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "600px", // Desired width
              margin: "0 auto", // Center horizontally
              boxSizing: "border-box"
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start", // Align components left
                width: "100%", // Full width
                marginBottom: "16px" // Add margin between this group and the next
              }}
            >
              <TimeQuestion
                question={props.question}
                answer={props.answer}
                answerText={props.answerText}
                onAnswerChange={props.onAnswerChange}
                comment={props.comment}
                onCommentChange={props.onCommentChange}
                onTimeChange={props.onTimeChange}
              />
            </Box>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 0, width: "100%" }
              }}
              noValidate
              autoComplete="off"
            >
              <Comment
                question={props.question}
                onCommentChange={props.onCommentChange}
                value={props.comment}
                selectedLanguage={props.selectedLanguage}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end", // Align components left
                width: "100%", // Full width
                marginTop: "36px" // Add margin between this group and the next
              }}
            >
              <MyButton onClick={props.onQuestionChange} buttonText={props.selectedLanguage === "eng" ? "Next" : "Tālāk"} />
            </Box>
          </Box>
        </div>
      );

    case "select_choice":
      return (
        <div>
          <BackgroundImage />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "600px", // Desired width
              margin: "0 auto", // Center horizontally
              boxSizing: "border-box"
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start", // Align components left
                width: "100%", // Full width
                marginBottom: "16px" // Add margin between this group and the next
              }}
            >
              <MultipleChoiceQuestions
                question={props.question}
                answer={props.answer}
                answerText={props.answerText}
                onAnswerChange={props.onAnswerChange}
                comment={props.comment}
                onCommentChange={props.onCommentChange}
                selectedLanguage={props.selectedLanguage}
              />
            </Box>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 0, width: "100%" }
              }}
              noValidate
              autoComplete="off"
            >
              <Comment
                question={props.question}
                onCommentChange={props.onCommentChange}
                value={props.comment}
                selectedLanguage={props.selectedLanguage}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end", // Align components left
                width: "100%", // Full width
                marginTop: "36px" // Add margin between this group and the next
              }}
            >
              <MyButton onClick={props.onQuestionChange} buttonText={props.selectedLanguage === "eng" ? "Next" : "Tālāk"} />
            </Box>
          </Box>
        </div>
      );

    case "text":
      return (
        <div>
          <BackgroundImage />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "600px", // Desired width
              margin: "0 auto", // Center horizontally
              boxSizing: "border-box"
            }}
          >
            <InputQuestions
              question={props.question}
              answer={props.answer}
              answerText={props.answerText}
              onAnswerChange={props.onAnswerChange}
              comment={props.comment}
              onCommentChange={props.onCommentChange}
              selectedLanguage={props.selectedLanguage}
            />
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 0, width: "100%" }
              }}
              noValidate
              autoComplete="off"
            >
              <Comment
                question={props.question}
                onCommentChange={props.onCommentChange}
                value={props.comment}
                selectedLanguage={props.selectedLanguage}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end", // Align components left
                width: "100%", // Full width
                marginTop: "36px" // Add margin between this group and the next
              }}
            >
              <MyButton onClick={props.onQuestionChange} buttonText={props.selectedLanguage === "eng" ? "Next" : "Tālāk"} />
            </Box>
          </Box>
        </div>
      );

    case "checkbox":
      return (
        <div>
          <BackgroundImage />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "600px", // Desired width
              margin: "0 auto", // Center horizontally
              boxSizing: "border-box"
            }}
          >
            <CheckboxQuestions
              question={props.question}
              answer={props.answer}
              answerText={props.answerText}
              onAnswerChange={props.onAnswerChange}
              comment={props.comment}
              onCommentChange={props.onCommentChange}
              selectedOptions={props.selectedOptions}
              onSelectedOptionsChange={props.onSelectedOptionsChange}
            />
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 0, width: "100%" }
              }}
              noValidate
              autoComplete="off"
            >
              <Comment
                question={props.question}
                onCommentChange={props.onCommentChange}
                value={props.comment}
                selectedLanguage={props.selectedLanguage}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end", // Align components left
                width: "100%", // Full width
                marginTop: "36px" // Add margin between this group and the next
              }}
            >
              <MyButton onClick={props.onQuestionChange} buttonText={props.selectedLanguage === "eng" ? "Next" : "Tālāk"} />
            </Box>
          </Box>
        </div>
      );

    case "slider":
      return (
        <div>
          <BackgroundImage />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "600px", // Desired width
              margin: "0 auto", // Center horizontally
              boxSizing: "border-box"
            }}
          >
            <SliderQuestion
              question={props.question}
              answer={props.answer}
              answerText={props.answerText}
              onAnswerChange={props.onAnswerChange}
              comment={props.comment}
              onCommentChange={props.onCommentChange}
              sliderValue={props.sliderValue}
              onSliderChange={props.onSliderChange}
            />
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 0, width: "100%" }
              }}
              noValidate
              autoComplete="off"
            >
              <Comment
                question={props.question}
                onCommentChange={props.onCommentChange}
                value={props.comment}
                selectedLanguage={props.selectedLanguage}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end", // Align components right
                width: "100%", // Full width
                marginTop: "36px" // Add margin between this group and the next
              }}
            >
              <MyButton onClick={props.onQuestionChange} buttonText={props.selectedLanguage === "eng" ? "Next" : "Tālāk"} />
            </Box>
          </Box>
        </div>
      );

    default:
      return null;
  }
};

export default QuestionRenderer;
