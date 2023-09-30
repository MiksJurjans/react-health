import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import backgroundImg from "../img/background.png";
import logoImg from "../img/Laivina_temp_logo.png";

function BackgroundImage() {
  const backgroundImageStyle = {
    background: `url(${backgroundImg})`,
    backgroundPosition: "60% 40%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "250px",
    width: "100%",
    position: "relative"
  };

  const logoStyle = {
    position: "absolute",
    top: "10px",
    left: "10px",
    transform: "translate(0%, 0%)",
    maxWidth: "30%", // positioning the logo
    maxHeight: "30%", // positioning the logo
  };

  return (
    <Grid container spacing={2} style={{ height: "250px", width: "100%" }}>
      <Grid item xs={12}>
        <Card>
          <CardMedia style={backgroundImageStyle} />
          <img
            src={logoImg}
            alt="Logo"
            className="logo"
            style={logoStyle}
          />
        </Card>
      </Grid>
    </Grid>
  );
}

export default BackgroundImage;
