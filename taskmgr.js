const express = require('express');
const app = express();
const port = 3000;

// Simple tasks array for demo
let tasks = [
  { id: 1, title: 'Task 1', description: 'Description for Task 1' },
  { id: 2, title: 'Task 2', description: 'Description for Task 2' },
];

app.use(express.json());

// Get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Get task bu ID
app.get('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);

  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

// Del a task
app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter(t => t.id !== taskId);
  res.json([ message: 'Task deleted successfully' });
});

app.listen(port, () => {
  console.log('Task Manager API Listening at http://localhost:${port}');
});
