import {Router} from 'express'
import {ClienteAll, ClienteInsert} from "../controllers/cliente.controller";

const router = Router();

router.post('/insert', [], ClienteInsert)
router.get('/all', [], ClienteAll)

export default router;