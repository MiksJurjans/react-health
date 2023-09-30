import React from "react";

const skipQuestion = (
  currentQuestionIndex,
  answerText,
  currentQuestion,
  setCurrentQuestionIndex
) => {
  // Skip question 1 to question 7
  if (
    currentQuestionIndex === 0 &&
    answerText[currentQuestion.identifier] === "No"
  ) {
    setCurrentQuestionIndex(6);
  }
  // Skip question 4 to question 7
  else if (
    currentQuestionIndex === 3 &&
    answerText[currentQuestion.identifier] === "No"
  ) {
    setCurrentQuestionIndex(6);
  }
  // Skip question 12 to question 18
  else if (
    currentQuestionIndex === 11 &&
    answerText[currentQuestion.identifier] === "No"
  ) {
    setCurrentQuestionIndex(17);
  }
  // Skip question 15 to question 18
  else if (
    currentQuestionIndex === 14 &&
    answerText[currentQuestion.identifier] === "No"
  ) {
    setCurrentQuestionIndex(17);
  }
  // Skip question 19 to question 23
  else if (
    currentQuestionIndex === 18 &&
    answerText[currentQuestion.identifier] === "No"
  ) {
    setCurrentQuestionIndex(22);
  }
  // Skip question 27 to question 30
  else if (
    currentQuestionIndex === 26 &&
    answerText[currentQuestion.identifier] === "No"
  ) {
    setCurrentQuestionIndex(29);
  }
  // Skip question 41 to question 48
  else if (
    currentQuestionIndex === 40 &&
    answerText[currentQuestion.identifier] === "No"
  ) {
    setCurrentQuestionIndex(47);
  }
  // Skip question 43 to question 45
  else if (
    currentQuestionIndex === 42 &&
    answerText[currentQuestion.identifier] === "No"
  ) {
    setCurrentQuestionIndex(44);
  }
  // Skip question 45 to question 48
  else if (
    currentQuestionIndex === 44 &&
    answerText[currentQuestion.identifier] === "No"
  ) {
    setCurrentQuestionIndex(47);
  }
  // Continue as normal if no skipping conditions met
  else {
    setCurrentQuestionIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex;
    });
  }
};

export default skipQuestion;
