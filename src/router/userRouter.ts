import express from 'express';
import { UserController } from '../controller/userController';
import { UserService } from '../service/userService';

const router = express.Router();
router.use(express.json())

const userService = new UserService();
const userController = new UserController(userService);

router.get('/', async (req, res) => {res.json(await userController.getUsers())})

router.get('/:id', async (req, res) => {res.json(await userController.getUserById(req.params))}) 

router.post('/', async (req, res) => {res.json(await userController.addUser(req.body))}) 

router.patch('/:id', async (req, res) => {res.json(await userController.editUserById(req.params, req.body))}) 

router.delete('/:id', async (req, res) => {res.json(await userController.deleteUserById(req.params))}) 

export default router; 