function TaskModal({ value, onChange, onAdd }) {
  return (
    <div style={{ marginTop: 20 }}>
      <input
        placeholder="Enter task..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={onAdd}>Add Task</button>
    </div>
  );
}

export default TaskModal;
