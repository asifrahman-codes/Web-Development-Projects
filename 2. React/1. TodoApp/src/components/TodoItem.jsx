import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import TextField from "@mui/material/TextField";

export default function TodoItem({ task, index, deleteTask, toggleTask, editTask }) {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(task.text);

  function saveEdit() {
    editTask(index, text);
    setIsEdit(false);
  }

  return (
    <li className={task.completed ? "completed" : ""}>
      <Checkbox checked={task.completed} onChange={() => toggleTask(index)} />

      {isEdit ? (
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          size="small"
          className="edit-input"
        />
      ) : (
        <span>{task.text}</span>
      )}

      <div className="actions">
        {isEdit ? (
          <IconButton onClick={saveEdit}>
            <SaveIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => setIsEdit(true)}>
            <EditIcon />
          </IconButton>
        )}

        <IconButton onClick={() => deleteTask(index)}>
          <DeleteIcon />
        </IconButton>
      </div>
    </li>
  );
}
