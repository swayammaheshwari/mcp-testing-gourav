const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON and urlencoded body parameters
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Dummy in-memory data store (Acts as a database for CRUD operations)
let users = [
  { id: 1, name: 'Alice', role: 'admin', active: true },
  { id: 2, name: 'Bob', role: 'user', active: false },
];

/**
 * 1. GET /api/users
 * Returns all users. Supports query parameters like ?role=admin&limit=1
 */
app.get('/api/users', (req, res) => {
  const { role, limit } = req.query; // Query params
  let result = [...users];

  if (role) {
    result = result.filter(u => u.role === role);
  }

  if (limit) {
    result = result.slice(0, parseInt(limit));
  }

  res.status(200).json({
    success: true,
    message: 'Users retrieved successfully',
    data: result,
    meta: { count: result.length, queryUsed: req.query }
  });
});

/**
 * 2. GET /api/users/:id
 * Returns a specific user based on the Path parameter
 */
app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id); // Path param
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }

  res.status(200).json({ success: true, data: user });
});

/**
 * 3. POST /api/users
 * Creates a new user using Body parameters
 */
app.post('/api/users', (req, res) => {
  const { name, role, active } = req.body; // Body params

  if (!name || !role) {
    return res.status(400).json({ 
      success: false, 
      message: 'Missing required Body parameters: name and role are required!' 
    });
  }

  const newUser = {
    id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
    name,
    role,
    active: active !== undefined ? active : true // defaults to true
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: 'User created successfully',
    data: newUser
  });
});

/**
 * 4. PUT /api/users/:id
 * Updates an existing user completely using Path and Body parameters
 */
app.put('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id); // Path param
  const { name, role, active } = req.body; // Body params

  const userIndex = users.findIndex(u => u.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ success: false, message: 'User not found to update' });
  }

  // Update object
  users[userIndex] = {
    id,
    name: name || users[userIndex].name,
    role: role || users[userIndex].role,
    active: active !== undefined ? active : users[userIndex].active
  };

  res.status(200).json({
    success: true,
    message: 'User updated successfully',
    data: users[userIndex]
  });
});

/**
 * 5. DELETE /api/users/:id
 * Removes a user. Expects a specific header for authorization simulation.
 */
app.delete('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id); // Path param
  const authHeader = req.headers['authorization']; // Header key

  // Simulated Authorization Check
  if (authHeader !== 'Bearer super-secret-token') {
    return res.status(403).json({ 
      success: false, 
      message: 'Forbidden. Invalid or missing "Authorization: Bearer super-secret-token" header.' 
    });
  }

  const userIndex = users.findIndex(u => u.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ success: false, message: 'User not found to delete' });
  }

  const deletedUser = users.splice(userIndex, 1)[0];

  res.status(200).json({
    success: true,
    message: 'User deleted successfully',
    data: deletedUser
  });
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Dummy API Server is running locally on http://localhost:${port}`);
  console.log('\n--- Available Routes ---');
  console.log('1. GET    /api/users                (Params: ?role=xxx&limit=y)');
  console.log('2. GET    /api/users/:id            (Path Param: id)');
  console.log('3. POST   /api/users                (Body: { name, role, active })');
  console.log('4. PUT    /api/users/:id            (Path Param: id, Body: { name, role, active })');
  console.log('5. DELETE /api/users/:id            (Header: "Authorization: Bearer super-secret-token")');
  console.log('------------------------\n');
});
