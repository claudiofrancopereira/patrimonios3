import { Router } from 'express'
import multer from 'multer';

import patrimoniosConfig from './config/patrimoniosUpload';
import reportsConfig from './config/reportsUpload';

import PatrimoniosController from './controllers/PatrimoniosController';
import ReportsController from './controllers/ReportsController';

const routes = Router();
const uploadPatrimonio = multer(patrimoniosConfig);
const uploadReport = multer(reportsConfig);

routes.post('/patrimonios', uploadPatrimonio.array('images'), PatrimoniosController.create);
routes.get('/patrimonios', PatrimoniosController.index);
routes.post('/reports/:id', uploadReport.array('images'), ReportsController.create);

export default routes;