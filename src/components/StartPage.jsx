import React from "react";
import Typography from "@mui/material/Typography";
import BackgroundImage from "./BackgroundImage";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MyButton from "./Button";

const StartPage = (props) => {
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
          variant="h5"
          style={{
            fontFamily: "Sectra",
            fontSize: "24pt",
            fontWeight: 600,
            margin: "16pt 0"
          }}
        >
          Welcome to my health assessment quiz
        </Typography>
        <Typography
          variant="body1"
          style={{ fontFamily: "Graphik", fontSize: "16pt", margin: "16pt 0" }}
        >
          In this quiz you will have to answer to questions about ...
        </Typography>

        <TextField
          key="name_id"
          name="user_name"
          value={props.userName}
          label="Your name:"
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
          <MyButton onClick={props.onClick} buttonText="Start questionnaire" />
        </Box>
      </Box>
    </div>
  );
};

export default StartPage;
