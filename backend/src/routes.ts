import { Router } from 'express'

import PatrimoniosController from './controllers/PatrimoniosController';
import ReportsController from './controllers/ReportsController';

const routes = Router();

routes.post('/patrimonios', PatrimoniosController.create);
routes.post('/reports/:id', ReportsController.create);

export default routes;