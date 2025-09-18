// Simple in-memory task list and basic handlers
const tasks = [];

function listTasks(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ tasks }));
}

function addTask(req, res) {
  let body = '';
  req.on('data', chunk => {
    body += chunk;
  });
  req.on('end', () => {
    try {
      const data = JSON.parse(body || '{}');
      const task = { id: Date.now().toString(), title: data.title || 'Untitled', done: false };
      tasks.push(task);
      res.statusCode = 201;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ task }));
    } catch (e) {
      res.statusCode = 400;
      res.end(JSON.stringify({ error: 'Invalid JSON' }));
    }
  });
}

module.exports = { listTasks, addTask };


