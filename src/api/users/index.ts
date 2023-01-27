import { Router } from 'express';
import { handleCreateUser,handleGetAllUsers,handleDeleteUser,handleGetUser } from './user.controller';

const router= Router();

router.get('/',handleGetAllUsers);
router.post('/', handleCreateUser);
router.delete('/:id',handleDeleteUser);
router.get('/:id',handleGetUser);

export default router;
