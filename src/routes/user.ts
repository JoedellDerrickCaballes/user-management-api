import express from 'express';

const router = express.Router();

// Mock user data - in a real application, this would be in a database
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// DELETE /api/users/:id - Delete a user
router.delete('/:id', (req: express.Request, res: express.Response) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex(user => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users = users.filter(user => user.id !== id);
  return res.status(200).json({ message: 'User deleted successfully' });
});

// GET /api/users - Get all users (for testing purposes)
router.get('/', (_req: express.Request, res: express.Response) => {
  res.json(users);
});

export default router; 