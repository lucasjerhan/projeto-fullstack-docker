import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/tasks');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    try {
      const response = await fetch('http://localhost:3001/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newTask }),
      });
      const data = await response.json();
      setTasks([...tasks, data]);
      setNewTask('');
    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error);
    }
  };

  const toggleTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/api/tasks/${id}`, {
        method: 'PUT',
      });
      const data = await response.json();
      setTasks(tasks.map(task => 
        task._id === id ? data : task
      ));
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`http://localhost:3001/api/tasks/${id}`, {
        method: 'DELETE',
      });
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error('Erro ao deletar tarefa:', error);
    }
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              onClick={() => toggleTask(task._id)}
            >
              {task.title}
            </span>
            <button onClick={() => deleteTask(task._id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;