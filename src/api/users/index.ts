import { Router } from 'express';
import { handleCreateUser,handleGetAllUsers,handleDeleteUser } from './user.controller';

const router= Router();

router.get('/',handleGetAllUsers);
router.post('/', handleCreateUser);
router.delete('/:id',handleDeleteUser);

export default router;
