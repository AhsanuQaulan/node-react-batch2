import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://localhost:3002/api/users";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Nama dan Email tidak boleh kosong!");
      return;
    }

    const userData = { name, email };

    try {
      if (editingId) {
        // --- LOGIKA UPDATE YANG DIOPTIMASI ---
        await axios.put(`${API_URL}/${editingId}`, userData);
        setUsers(users.map((user) => (user.id === editingId ? { ...user, ...userData } : user)));
      } else {
        // --- LOGIKA CREATE YANG DIPERBAIKI ---
        const response = await axios.post(API_URL, userData);
        setUsers([...users, response.data]);
      }
      resetForm();
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const handleEdit = (user) => {
    setEditingId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  const handleDelete = async (id) => {
    // --- LOGIKA DELETE YANG DIOPTIMASI ---
    try {
      await axios.delete(`${API_URL}/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setName("");
    setEmail("");
  };

  return (
    <div className="container">
      <h1>CRUD AXIOS</h1>
      <form onSubmit={handleSubmit} className="user-form">
        <input type="text" placeholder="Nama" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">{editingId ? "Update Pengguna" : "Tambah Pengguna"}</button>
        {editingId && (
          <button type="button" onClick={resetForm}>
            Batal
          </button>
        )}
      </form>
      <div className="user-list">
        <h2>Daftar Pengguna</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <div className="user-info">
                <strong>{user.name}</strong> ({user.email})
              </div>
              <div className="user-actions">
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Hapus</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
