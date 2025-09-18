// Express router for tasks
const express = require('express');
const router = express.Router();

// In-memory task store
const tasks = [];

// GET /api/tasks - list tasks
router.get('/', (req, res) => {
  res.json({ tasks });
});

// POST /api/tasks - add a task
router.post('/', (req, res) => {
  const data = req.body || {};
  const task = { id: Date.now().toString(), title: data.title || 'Untitled', done: false };
  tasks.push(task);
  res.status(201).json({ task });
});

// DELETE /api/tasks/:id - delete a task by id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  const [removed] = tasks.splice(index, 1);
  res.json({ task: removed });
});

module.exports = router;


