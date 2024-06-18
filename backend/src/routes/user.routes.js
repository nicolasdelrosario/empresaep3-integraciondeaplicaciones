import { Router } from 'express'
import { method as userController } from '../controllers/user.js'

const router = Router()

router.get('/api/users', userController.getUsers)
router.get('/api/users:id', userController.getUser)
router.post('/api/users', userController.createUser)
router.post('/api/users/login', userController.validateUser)

export default router
