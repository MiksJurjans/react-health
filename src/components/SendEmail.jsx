import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import BackgroundImage from "./BackgroundImage";
import Box from "@mui/material/Box";
import MyButton from "./Button";
import FinalPageText from "./FinalPageText";
import Checkbox from "@mui/material/Checkbox";

function SendEmail(props) {

  const [isChecked, setIsChecked] = useState(false);

  const headingText = FinalPageText.find((element) => element.type === "heading")[props.selectedLanguage];
  const bodyText = FinalPageText.find((element) => element.type === "body")[props.selectedLanguage];

  const handleSendEmail = () => {

    // Check if the checkbox is checked before proceeding
    if (!isChecked) {
      if (props.selectedLanguage === "eng"){
        alert("Please agree to the Terms and Conditions.");
        return;}
      else {
        alert("Lūdzu apstiprini lietošanas noteikumus un datu privātumu politiku.");
        return;  
      }
    }
    
    // Create a new email using the "mailto:" URL scheme
    const emailSubject = props.selectedLanguage === "eng" ? "Health assessment results" : "Aptaujas rezultāti";
    const emailBody = props.selectedLanguage === "eng" ? "Hey, Elizabete. Here are the results of my assessment " : "Hey, Elizabete! Šeit ir mani aptaujas rezultāti.";
    const emailRecipient = "elizabete@laivina.com";

    const mailtoURL = `mailto:${emailRecipient}?subject=${emailSubject}&body=${emailBody}`;

    // Attach the selected file to the email
    const emailToSend = encodeURI(mailtoURL);

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
          boxSizing: "border-box",
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
        
        <Box style={{ display: "flex", alignItems: "center"}}>
        <Checkbox
          checked={isChecked}
          onChange={(event) => setIsChecked(event.target.checked)}
          color="primary"
          
        />
      <Typography
        style={{
          fontFamily: "Graphik",
          fontSize: "14pt",
          marginLeft: "8px",
        }}
      >
        {props.selectedLanguage === "eng" ? (
          <>
            By checking this box, you agree to the{" "}
            <a
              href="https://www.laivina.com/terms-and-condition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms and Conditions
            </a>
            .
          </>
        ) : (
          <>
            Atzīmējot šo lauciņu, Tu piekrīti Elizabetes Laiviņas{" "}
            <a
              href="https://www.laivina.com/terms-and-condition"
              target="_blank"
              rel="noopener noreferrer"
            >
              lietošanas noteikumiem  
            </a>
            &nbsp;un&nbsp;
            <a
              href="https://www.laivina.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
            datu privātuma politikai
            </a>
            .
          </>
        )}
      </Typography>

      </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between", // Add this line to evenly space the buttons
            alignItems: "center", // Vertically center the buttons
            width: "100%", // Full width
            marginTop: "18px" // Add margin between this group and the next
          }}
        >
          <MyButton onClick={props.onClick} buttonText={props.selectedLanguage === "eng" ? "Export results" : "Eksportēt rezultātus"} />
          <MyButton onClick={handleSendEmail} buttonText={props.selectedLanguage === "eng" ? "Send Email" : "Nosūtīt epastu"} />
        </Box>
      </Box>
    </div>
  );
}

export default SendEmail;
