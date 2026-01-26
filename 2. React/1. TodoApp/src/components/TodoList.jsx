import TodoItem from "./TodoItem";

export default function TodoList({ list, deleteTask, toggleTask, editTask }) {
  return (
    <ul className="todo-list">
      {list.map((item, index) => (
        <TodoItem
          key={index}
          task={item}
          index={index}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}
