// Clock.js

import React, { useState, useEffect } from "react";

// 1. Terima 'countdown' sebagai prop
const Clock = ({ countdown }) => {
  const [time, setTime] = useState(new Date());

  // Efek ini hanya untuk memperbarui jam "Now At"
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-container">
      {/* Jam ini tetap berjalan seperti biasa */}
      <h1>Now At - {time.toLocaleTimeString()}</h1>

      {/* 2. Tampilkan nilai countdown dari prop */}
      <h2>Countdown: {countdown}</h2>
    </div>
  );
};

export default Clock;
