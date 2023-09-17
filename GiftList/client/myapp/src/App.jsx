// App.js
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const serverUrl = 'http://localhost:3001';

function App() {
  const [formData, setFormData] = useState({ name: '' });
  const [giftMessage, setGiftMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({ name: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${serverUrl}/gift`, {
        name: formData.name,
      });

      const gift = response.data;
      setGiftMessage(gift);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>Check Your Gift Status</h1>
      <div className="centered-form">
        <form>
          <input
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <button type="button" onClick={handleSubmit}>
            Check Gift
          </button>
        </form>
      </div>
      {giftMessage && <h1>{giftMessage}</h1>}
    </div>
  );
}

export default App;
