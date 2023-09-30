import * as React from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export default function ReferenceDateExplicitTimePicker(props) {
  const [value, setValue] = React.useState(null);
  // Function to handle the selected time value
  const handleTimeSelection = (selectedTime) => {
    setValue(selectedTime); // Update the local state
    props.onTimeChange(selectedTime); // Call the callback with the selected time
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={2} sx={{ minWidth: 305 }}>
        <TimePicker
          key={props.question.identifier}
          value={value}
          onChange={handleTimeSelection}
          referenceDate={dayjs("2022-04-17")}
          sx={{
            fontFamily: "Graphik",
            fontSize: "12pt",
            width: "200px" // Adjust the width as needed
          }}
        />
      </Stack>
    </LocalizationProvider>
  );
}
