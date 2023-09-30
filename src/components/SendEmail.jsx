import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import BackgroundImage from "./BackgroundImage";
import Box from "@mui/material/Box";
import MyButton from "./Button";

function SendEmail(props) {
  const handleSendEmail = () => {
    // Create a new email using the "mailto:" URL scheme
    const emailSubject = "Health assessment results";
    const emailBody = "Hey, Elizabete. Here are the results of my assessment!";
    const emailRecipient = "miksjurjans18@gmail.com"; // Change this to the recipient's email address

    const mailtoURL = `mailto:${emailRecipient}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Attach the selected file to the email
    const emailToSend = `${mailtoURL}`;

    // Open the user's default email client with the pre-filled email
    window.location.href = emailToSend;
  };

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
          Thanks for filling out the health assessment quiz
        </Typography>
        <Typography
          variant="body1"
          style={{ fontFamily: "Graphik", fontSize: "16pt", margin: "16pt 0" }}
        >
          The final step is to share your answers with me, by sending them to me
          via email.
          <ol>
            <li>
              The file named "name_data.csv" should have automatically
              downloaded. If not, you can still click the "Export data" button.
            </li>
            <br />
            <li>
              Click the "Send email" button and your default email browser
              should open. All you need to do is just click "Send" and we are
              done! Thank you!
            </li>
          </ol>
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between", // Add this line to evenly space the buttons
            alignItems: "center", // Vertically center the buttons
            width: "100%", // Full width
            marginTop: "18px" // Add margin between this group and the next
          }}
        >
          <MyButton onClick={props.onClick} buttonText="Export Data" />
          <MyButton onClick={handleSendEmail} buttonText="Send Email" />
        </Box>
      </Box>
    </div>
  );
}

export default SendEmail;
