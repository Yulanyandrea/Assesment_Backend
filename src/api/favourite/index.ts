import { Router } from 'express';
import { Authenticated } from '../../auth/auth.services';
import { handleCreateFavList,
  handleDeleteFavList,
  handleGetAllListFav,
  handleGetFavById,
handleUpdateFavList} from './fav.controller';

const router= Router();

router.get('/',Authenticated, handleGetAllListFav);
router.get('/:id',Authenticated ,handleGetFavById);
router.post('/', Authenticated,handleCreateFavList);
router.delete('/:id', Authenticated, handleDeleteFavList);
router.patch('/:id', Authenticated, handleUpdateFavList);

export default router;
