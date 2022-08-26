import express from 'express';
import { addUser, deleteUser, getAllUser, getById, updateUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/users',getAllUser)
router.post('/users',addUser)
router.get('/users/:id',getById)
router.put('/users/:id',updateUser)
router.delete('/users/:id',deleteUser)


export default router;