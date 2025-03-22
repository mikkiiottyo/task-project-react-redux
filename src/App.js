import React from 'react';
import TaskList from './components/TaskList'; 
import './App.css';
import AddTask from './components/addTask'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTask/>
        <TaskList/>
          
      </header>
    </div>
  );
}
export default App;