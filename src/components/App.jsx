import React, { useState } from "react";
import QuestionList from "./QuestionList";
import QuestionRenderer from "./QuestionRenderer";
import { saveAs } from "file-saver";
import SendEmail from "./SendEmail";
import StartPage from "./StartPage";

function App() {
  const initialAnswers = {};
  const initialAnswerText = {};
  const initialComments = {};

  QuestionList.forEach((question) => {
    initialAnswers[question.identifier] = "";
    initialAnswerText[question.identifier] = "";
    initialComments[question.identifier] = "";
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(initialAnswers);
  const [answerText, setAnswerText] = useState(initialAnswerText);
  const [comments, setComments] = useState(initialComments);
  const [gender, setGender] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [sliderValue, setSliderValue] = useState(50);
  const [reachedEnd, setReachedEnd] = useState(false);
  const [questionnaireStarted, setQuestionnaireStarted] = useState(false);
  const [userName, setUserName] = useState("");

  // To start the questionnaire
  const handleStartQuestionnaire = () => {
    if (userName !== "") {
      // When the "Start questionnaire!" button is clicked, set the current question index to 0 to start the questionnaire
      setCurrentQuestionIndex(0);
      setQuestionnaireStarted(true);
    } else {
      alert("Please enter your name!");
    }
  };

  // For slider question management
  const handleSliderChange = (newValue) => {
    const identifier = currentQuestion.identifier;

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [identifier]: newValue.toString()
    }));
  };

  // For Checkbox question management
  const handleSelectedOptionsChange = (updatedOptions) => {
    // Extract labels from selected options
    const selectedLabels = currentQuestion.options
      .filter((option) => updatedOptions.includes(option.value))
      .map((option) => option.label);

    const identifier = currentQuestion.identifier;

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [identifier]: selectedLabels.length
    }));

    setAnswerText((prevAnswerText) => ({
      ...prevAnswerText,
      [identifier]: selectedLabels.join(", ") // Join selected labels
    }));

    setSelectedOptions(updatedOptions);
  };

  // For time question management
  const handleTimeChange = (selectedTime) => {
    const selectedAnswer = selectedTime.format("HH:mm");
    const identifier = currentQuestion.identifier;

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [identifier]: selectedAnswer
    }));

    setAnswerText((prevAnswerText) => ({
      ...prevAnswerText,
      [identifier]: selectedAnswer
    }));
  };

  // For normal question management
  const handleAnswerChange = (event, selectedAnswer) => {
    const { name, value } = event.target;

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value
    }));

    setAnswerText((prevAnswerText) => ({
      ...prevAnswerText,
      [name]: selectedAnswer
    }));

    if (currentQuestion.identifier === "q52") {
      setGender(value);
    }
  };

  //For comment change management
  const handleCommentChange = (event) => {
    const { name, value } = event.target;
    setComments((prevComments) => ({
      ...prevComments,
      [name]: value
    }));
  };

  const handleNextQuestion = () => {
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
    // Handle errors
    else if (answers[currentQuestion.identifier] === "") {
      alert("Please answer the current question before proceeding.");
      return; // Do not proceed if the question is not answered
    }
    // Continue as normal if no skipping conditions met
    else if (currentQuestionIndex === QuestionList.length - 1) {
      setReachedEnd(true);
      exportAllDataToCSV(); // Export at the end of the quiz
    } else {
      setCurrentQuestionIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex;
      });
    }
  };

  const currentQuestion = QuestionList[currentQuestionIndex];

  // Prepare data to be exported as csv
  function exportToCSV(data, filename) {
    const csv =
      Object.keys(data[0]).join(";") +
      "\n" +
      data.map((item) => Object.values(item).join(";")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    saveAs(blob, filename);
  }

  const aggregatedData = QuestionList.map((question, index) => ({
    QuestionIndex: question.text,
    AnswerText: answerText[question.identifier] || "",
    Comment: comments[question.identifier] || "",
    AnswerScore: answers[question.identifier] || ""
  }));

  const exportAllDataToCSV = () => {
    const fileName = `${userName.split(" ")[0]}_data.csv`; // Use the first name for the file name
    exportToCSV(aggregatedData, fileName);
  };

  // Get user name
  const handleUserName = (event) => {
    const newName = event.target.value;
    setUserName(newName);
  };

  return (
    <div>
      {reachedEnd ? (
        <SendEmail onClick={exportAllDataToCSV} />
      ) : questionnaireStarted ? (
        currentQuestion && (
          <QuestionRenderer
            question={currentQuestion}
            answer={answers[currentQuestion.identifier] || ""} //answer score
            answerText={answerText[currentQuestion.identifier] || ""} // answer text
            onAnswerChange={handleAnswerChange}
            comment={comments[currentQuestion.identifier] || ""}
            onCommentChange={handleCommentChange}
            onTimeChange={handleTimeChange}
            gender={gender}
            onQuestionChange={handleNextQuestion}
            selectedOptions={selectedOptions}
            onSelectedOptionsChange={handleSelectedOptionsChange}
            sliderValue={sliderValue}
            onSliderChange={handleSliderChange}
          />
        )
      ) : (
        <StartPage
          userName={userName}
          onNameChange={handleUserName}
          onClick={handleStartQuestionnaire}
        />
      )}
    </div>
  );
}

export default App;
