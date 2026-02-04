import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "../styles/TodoApp.css";

export default function TodoApp() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("todoList"));
    if (savedList) setList(savedList);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);

  function addTask(text) {
    if (text.trim() === "") return;
    setList([...list, { text, completed: false }]);
  }

  function deleteTask(index) {
    setList(list.filter((_, i) => i !== index));
  }

  function toggleTask(index) {
    setList(
      list.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function editTask(index, text) {
    setList(
      list.map((item, i) => (i === index ? { ...item, text } : item))
    );
  }

  const filtered = list.filter((task) => {
    if (tab === 1) return !task.completed;
    if (tab === 2) return task.completed;
    return true;
  });

  return (
    <div className="container">
      <div className="todo-card">
        <h2>Advanced TODO App</h2>

        <div className="todo-content">
        <TodoInput addTask={addTask} />

        <Tabs
          value={tab}
          onChange={(e, val) => setTab(val)}
          centered
          className="tabs"
        >
          <Tab label="All" />
          <Tab label="Active" />
          <Tab label="Completed" />
        </Tabs>

        <TodoList
          list={filtered}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          editTask={editTask}
        />

        <div className="footer">
          <span>{list.filter((t) => !t.completed).length} tasks left</span>
          <button onClick={() => setList(list.filter((t) => !t.completed))}>
            Clear Completed
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}