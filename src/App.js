import React, { useState } from 'react';
import './App.css';
import trashIcon from './trash.png'; // Importando a imagem da lixeira corretamente

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const toggleComplete = (id) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    }));
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <div className="toggle-dark-mode" onClick={toggleDarkMode}>
          {darkMode ? 'Modo Claro' : 'Modo Escuro'}
        </div>
        <h1>To Do List</h1>
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Adicionar item..."
          />
          <button onClick={addItem}>Adicionar</button>
        </div>
        <div className="items-container">
          {items.map(item => (
            <div key={item.id} className={`item ${item.completed ? 'completed' : ''}`}>
              <label>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleComplete(item.id)}
                />
                <span>{item.text}</span>
              </label>
              <img
                src={trashIcon}
                alt="Deletar"
                className="trash-icon"
                onClick={() => deleteItem(item.id)}
              />
            </div>
          ))}
        </div>
        <div className="footer">
          <p>João Pedro de Sena Santana</p>
          <p><a href="https://github.com/DctrXD">https://github.com/DctrXD</a></p>
          <p>03/05/2024</p>
        </div>
      </div>
    </div>
  );
}

export default App;
