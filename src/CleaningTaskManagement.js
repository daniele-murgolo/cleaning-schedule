import React, { useState } from "react";

const CleaningTaskManagement = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Clean Kitchen", assignedTo: "Daniele", date: "2025-01-22" },
    { id: 2, task: "Vacuum Living Room", assignedTo: "Matteo", date: "2025-01-23" },
  ]);

  const [newTask, setNewTask] = useState({ task: "", assignedTo: "", date: "" });
  const [editing, setEditing] = useState(null);

  const handleAdd = () => {
    if (newTask.task && newTask.assignedTo && newTask.date) {
      setTasks([...tasks, { ...newTask, id: Date.now() }]);
      setNewTask({ task: "", assignedTo: "", date: "" });
    }
  };

  const handleEdit = (id) => {
    const task = tasks.find((t) => t.id === id);
    setEditing(task.id);
    setNewTask({ task: task.task, assignedTo: task.assignedTo, date: task.date });
  };

  const handleSave = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...newTask } : t))
    );
    setEditing(null);
    setNewTask({ task: "", assignedTo: "", date: "" });
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h2>Manage Cleaning Tasks</h2>
      <div>
        <input
          type="text"
          placeholder="Task Name"
          value={newTask.task}
          onChange={(e) => setNewTask({ ...newTask, task: e.target.value })}
        />
        <input
          type="text"
          placeholder="Assigned To"
          value={newTask.assignedTo}
          onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}
        />
        <input
          type="date"
          value={newTask.date}
          onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
        />
        {editing ? (
          <button onClick={() => handleSave(editing)}>Save</button>
        ) : (
          <button onClick={handleAdd}>Add Task</button>
        )}
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>
              {task.task} - {task.assignedTo} - {task.date}
            </span>
            <button onClick={() => handleEdit(task.id)}>Edit</button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CleaningTaskManagement;
