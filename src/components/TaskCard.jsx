function TaskCard({ task, onDelete }) {
  return (
    <div className="card">
      <span>{task}</span>
      <button onClick={onDelete} style={{ marginLeft: 10, background: "#dc2626" }}>
        Delete
      </button>
    </div>
  );
}

export default TaskCard;
