import { useEffect, useState } from "react";
import api from "../api/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const loadTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async (e) => {
    e.preventDefault();

    await api.post("/tasks", { title, description });

    setTitle("");
    setDescription("");
    loadTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    loadTasks();
  };

  return (
    <div className="task-page">
      <div className="task-card">
        <h2>Task Dashboard</h2>

        <form className="task-form" onSubmit={addTask}>
          <input
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            placeholder="Task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button>Add Task</button>
        </form>

        {tasks.map((task) => (
          <div className="task-item" key={task._id}>
            <div>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
            </div>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
