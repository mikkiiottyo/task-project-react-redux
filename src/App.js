import React from 'react';
import TaskList from './components/TaskList'; 
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <TaskList/>
        </p>
        
      </header>
    </div>
  );
}
export default App;