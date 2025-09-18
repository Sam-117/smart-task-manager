// Express router for tasks backed by Supabase
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const router = express.Router();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  // Soft warning on startup; requests will still fail with 500 if not configured
  // eslint-disable-next-line no-console
  console.warn('Supabase env vars missing: set SUPABASE_URL and SUPABASE_ANON_KEY');
}

const supabase = createClient(SUPABASE_URL || '', SUPABASE_ANON_KEY || '');

// GET /api/tasks - list tasks
router.get('/', async (req, res) => {
  const { data, error } = await supabase
    .from('tasks')
    .select('id, title, completed')
    .order('id', { ascending: true });

  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.json({ tasks: data || [] });
});

// POST /api/tasks - add a task
router.post('/', async (req, res) => {
  const { title } = req.body || {};
  if (!title || typeof title !== 'string') {
    return res.status(400).json({ error: 'title is required' });
  }

  const { data, error } = await supabase
    .from('tasks')
    .insert([{ title, completed: false }])
    .select('id, title, completed')
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(201).json({ task: data });
});

// DELETE /api/tasks/:id - delete a task by id
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('tasks')
    .delete()
    .eq('id', id)
    .select('id, title, completed')
    .single();

  if (error) {
    // If no rows match, Supabase may return an error; normalize to 404 when appropriate
    const notFound = error.details && /Results contain 0 rows/.test(error.details);
    return res.status(notFound ? 404 : 500).json({ error: error.message });
  }

  res.json({ task: data });
});

module.exports = router;


