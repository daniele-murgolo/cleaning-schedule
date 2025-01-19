import React, { useState } from "react";

const RoommateManagement = () => {
  const [roommates, setRoommates] = useState([
    { id: 1, name: "Daniele", phone: "+41790000000" },
    { id: 2, name: "Matteo", phone: "+41780000000" },
    { id: 3, name: "Thomas", phone: "+41770000000" },
  ]);

  const [newRoommate, setNewRoommate] = useState({ name: "", phone: "" });
  const [editing, setEditing] = useState(null);

  const handleAdd = () => {
    if (newRoommate.name && newRoommate.phone) {
      setRoommates([
        ...roommates,
        { ...newRoommate, id: Date.now() },
      ]);
      setNewRoommate({ name: "", phone: "" });
    }
  };

  const handleEdit = (id) => {
    const roommate = roommates.find((r) => r.id === id);
    setEditing(roommate.id);
    setNewRoommate({ name: roommate.name, phone: roommate.phone });
  };

  const handleSave = (id) => {
    setRoommates((prev) =>
      prev.map((r) => (r.id === id ? { ...r, ...newRoommate } : r))
    );
    setEditing(null);
    setNewRoommate({ name: "", phone: "" });
  };

  const handleDelete = (id) => {
    setRoommates((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div>
      <h2>Manage Roommates</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newRoommate.name}
          onChange={(e) => setNewRoommate({ ...newRoommate, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone"
          value={newRoommate.phone}
          onChange={(e) => setNewRoommate({ ...newRoommate, phone: e.target.value })}
        />
        {editing ? (
          <button onClick={() => handleSave(editing)}>Save</button>
        ) : (
          <button onClick={handleAdd}>Add Roommate</button>
        )}
      </div>
      <ul>
        {roommates.map((roommate) => (
          <li key={roommate.id}>
            <span>{roommate.name} - {roommate.phone}</span>
            <button onClick={() => handleEdit(roommate.id)}>Edit</button>
            <button onClick={() => handleDelete(roommate.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoommateManagement;
