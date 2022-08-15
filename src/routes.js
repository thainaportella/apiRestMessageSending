import { Router } from 'express';
import * as MessageController from './controller/message.js'

const routes = Router();

routes.get('/', (request, response) => {
  response.send('API Tech Academy');
})

routes.post('/message', MessageController.message)
export default routes;