import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [tasks, setTasks] = useState([])


  // Store tasks in local storage
  useEffect(() => {
    const getTasks = async () => {
      const extractedTasks = await fetchTasks();
      setTasks(extractedTasks);
    }

    getTasks();
  }, [])

  //Fetch Tasks from db
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  }



  const [showAddTask, setShowAddTask] = useState(false);


  // Delete Tasks
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Fetch Task from db
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  }


  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })
    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      ))
  }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  }

  return (
    <Router>
      <div className="container">
        <Header addTask={showAddTask}
          toggleAdd={setShowAddTask} />

        <Routes>

          <Route path="/" exact
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {
                  tasks.length > 0 ?
                    <Tasks tasks={tasks} onDelete={deleteTask}
                      toggle={toggleReminder} />
                    : 'No tasks'
                }
              </>
            } />



          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router >
  );
}




export default App;
