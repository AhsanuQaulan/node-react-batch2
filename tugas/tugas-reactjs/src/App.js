// App.js

import React, { useState, useEffect } from "react"; // 1. Import useState dan useEffect
import Clock from "./Clock";
import TodoList from "./TodoList";
import "./styles.css";

function App() {
  const todoItems = ["Belajar GIT & CLI", "Belajar HTML & CSS", "Belajar Javascript", "Belajar ReactJS Dasar", "Belajar ReactJS Advance"];

  // 2. Buat state untuk countdown di sini
  const [countdown, setCountdown] = useState(100); // Mulai dari 100

  // 3. Gunakan useEffect untuk menjalankan timer
  useEffect(() => {
    // Jangan jalankan interval jika countdown sudah 0
    if (countdown <= 0) return;

    // Set interval untuk mengurangi countdown setiap 1 detik
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // 4. Cleanup function: Hentikan interval jika komponen di-unmount
    return () => clearInterval(timer);
  }, [countdown]); // Efek ini akan berjalan ulang setiap kali nilai countdown berubah

  return (
    <div className="app-container">
      {/* 5. Terapkan Conditional Rendering di sini */}
      {countdown > 0 && <Clock countdown={countdown} />}

      <TodoList todos={todoItems} />
    </div>
  );
}

export default App;
