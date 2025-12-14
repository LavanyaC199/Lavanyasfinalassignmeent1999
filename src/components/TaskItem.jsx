import api from "../api/api";

function TaskItem({ task, refresh }) {
  const deleteTask = async () => {
    await api.delete(`/tasks/${task._id}`);
    refresh();
  };

  return (
    <div>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
}

export default TaskItem;
