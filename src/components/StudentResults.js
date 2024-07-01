// components/StudentResults.js
import React, { useState, useEffect } from 'react';

const StudentResults = () => {
  const [result, setResult] = useState(0);

  // Generate a random number between 80 and 100 for the results
  useEffect(() => {
    setResult(Math.floor(Math.random() * 21) + 80); // Random number between 80 and 100
  }, []);

  return (
    <div>
      <h1>Student Results</h1>
      <p>Your result: {result}</p>
      {result >= 90 && ( // Show flashy animations if the result is 90 or above
        <div style={{ textAlign: 'center' }}>
          <h2>Congratulations!</h2>
          <img src="path_to_flashy_lights_gif" alt="Flashy Lights" />
          <img src="path_to_bomb_gif" alt="Bombs" />
        </div>
      )}
    </div>
  );
}

export default StudentResults;
