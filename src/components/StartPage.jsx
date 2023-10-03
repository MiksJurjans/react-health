import React from "react";
import Typography from "@mui/material/Typography";
import BackgroundImage from "./BackgroundImage";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MyButton from "./Button";
import LanguageSelector from "./LanguageSelector";
import StartPageText from "./StartPageText";

const StartPage = (props) => {

  const headingText = StartPageText.find((element) => element.type === "heading")[props.selectedLanguage];
  const bodyText = StartPageText.find((element) => element.type === "body")[props.selectedLanguage];

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
        <Typography
          style={{
            fontFamily: "Sectra",
            fontSize: "24pt",
            fontWeight: 600,
            marginTop: "16pt"
          }}
        >
          {headingText}
        </Typography>
        <Typography
          style={{
            fontFamily: "Graphik",
            fontSize: "14pt",
            marginBottom: "16pt"
          }}
        >
          {bodyText}
        </Typography>

        <TextField
          key="name_id"
          name="user_name"
          value={props.userName}
          label={props.selectedLanguage === "eng" ? "Your name:" : "Tavs vārds:"}
          onChange={(event) => {
            const userName = event.target.value;
            props.onNameChange(event, userName);
          }}
          InputProps={{
            style: {
              fontFamily: "Graphik",
              fontSize: "11pt",
              borderRadius: "50px",
              border: "0px solid #D9D9D9",
              width: "190px"
            }
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%", // Full width
            marginTop: "20px" // Add margin between this group and the next
          }}
        >
          <MyButton onClick={props.onClick} buttonText={props.selectedLanguage === "eng" ? "Start questionnaire" : "Sākt aptauju"}/>
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute", // Fixed position
          top: 208, // Place it at the bottom
          left: "auto", // Place it at the right
          bottom: 10, // Adjust the bottom spacing
          right: 24, // Adjust the right spacing
          zIndex: 1000, // Ensure it's above other content
        }}
      >
        <LanguageSelector onSelectLanguage={props.onSelectLanguage} />
      </Box>
    </div>
  );
};


export default StartPage;
