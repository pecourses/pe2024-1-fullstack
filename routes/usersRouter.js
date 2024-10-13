const { Router } = require('express');
const { usersController } = require('../controllers');
const { updateOrCreateUserById } = require('../controllers/usersController');

// /api/users
const usersRouter = Router();

usersRouter
  .route('/')
  .post(usersController.createUser)
  .get(usersController.getUsers);

usersRouter
  .route('/:userId')
  .get(usersController.getUserById)
  .patch(usersController.updateUserById)
  .put(usersController.updateOrCreateUserById, usersController.createUser)
  .delete(usersController.deleteUserById);

module.exports = usersRouter;
// patch - зміна
// put заміна або створення
