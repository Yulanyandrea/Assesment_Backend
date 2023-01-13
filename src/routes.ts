import user from './api/users';
import favourite from './api/favourite'
import { Application } from 'express';
import authLocal from './auth/local'


function routes(app:Application) {
  app.use('/api/users', user);
  app.use('/api/favList',favourite)
  app.use('/auth/local', authLocal);

}

export default routes;
