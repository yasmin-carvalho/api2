import { Router } from 'express';
import { HistoryController } from '../src/app/controllers/HistoryController'
 
const router = Router();
const historyController = new HistoryController();

router.post('/history', historyController.create);
router.get('/history', historyController.read)


export default router;