import { useState } from "react";
import api from "../api/api";

function TaskForm({ refresh, task }) {
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (task) {
      await api.put(`/tasks/${task._id}`, { title, description });
    } else {
      await api.post("/tasks", { title, description });
    }

    setTitle("");
    setDescription("");
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>{task ? "Update Task" : "Add Task"}</button>
    </form>
  );
}

export default TaskForm;
