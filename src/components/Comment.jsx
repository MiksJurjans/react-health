/* eslint-disable react/prop-types */
import React from "react";
import TextField from "@mui/material/TextField";

function Comment(props) {
  return (
    <TextField
      key={props.question.identifier}
      id={props.question.identifier}
      name={props.question.identifier}
      value={props.comment}
      onChange={props.onCommentChange}
      InputProps={{
        style: {
          fontFamily: "Graphik",
          fontSize: "12pt",
          borderRadius: "50px",
          border: "0px solid #D9D9D9"
        }
      }}
      variant="outlined"
      label={props.selectedLanguage === "eng" ? "Your comment:" : "Tavs komentārs:"}
    />
  );
}

export default Comment;
