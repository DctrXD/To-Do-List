import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [userName, setUserName] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleMessageSubmit = () => {
    if (inputText.trim() === '' || userName.trim() === '') {
      alert('Por favor, insira um nome de usuário e uma mensagem.');
      return;
    }

    if (inputText.length > 30) {
      alert('A mensagem deve ter no máximo 30 caracteres.');
      return;
    }
    
    const newMessage = {
      userName,
      text: inputText,
      time: getCurrentTime()
    };

    setMessages([...messages, newMessage]);
    setInputText('');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <div className="theme-button" onClick={toggleDarkMode}>
        Modo {darkMode ? 'Claro' : 'Escuro'}
      </div>
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div className="message" key={index}>
              <div><strong>{message.userName}:</strong> {message.text}</div>
              <div className="meta">{message.time}</div>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Digite sua mensagem (máx. 30 caracteres)..."
            value={inputText}
            onChange={(e) => {
              if (e.target.value.length <= 30) {
                setInputText(e.target.value)
              }
            }}
          />
          <input
            type="text"
            placeholder="Seu nome"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={handleMessageSubmit}>Enviar</button>
        </div>
      </div>
      <div className="footer">
        <p>João Pedro de Sena Santana</p>
        <p><a href="https://github.com/DctrXD">https://github.com/DctrXD</a></p>
        <p>03/05/2024</p>
      </div>
    </div>
  );
}

export default App;
