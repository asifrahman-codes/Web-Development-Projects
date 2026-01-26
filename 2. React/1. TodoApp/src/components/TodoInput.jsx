import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function TodoInput({ addTask }) {
  const [text, setText] = useState("");

  function handleAdd() {
    addTask(text);
    setText("");
  }

  return (
    <div className="input-box">
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new task"
        size="small"
        fullWidth
      />
      <Button
        variant="contained"
        onClick={handleAdd}
        className="addBtn"
      >
        Add Task
      </Button>
    </div>
  );
}
