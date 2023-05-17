import { Router } from 'express';

const router = Router();

router.get('/',(req, res) => {}) //getUsers

router.get('/:id',(req, res) => {}) //getUserById

router.post('/',(req, res) => {}) //addUser

router.patch('/:id',(req, res) => {}) //editUserById

router.delete('/:id',(req, res) => {}) //deleteUserById

export { router } 