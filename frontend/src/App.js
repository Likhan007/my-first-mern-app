import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './styles/App.css';

function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleUserCreated = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>MERN Stack Application with MongoDB Atlas</h1>
      </header>
      <div className="container">
        <UserForm onUserCreated={handleUserCreated} />
        <UserList refreshTrigger={refreshTrigger} />
      </div>
    </div>
  );
}

export default App;
