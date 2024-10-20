const { Router } = require('express');
const multer = require('multer');
const { usersController } = require('../controllers');
// const { updateOrCreateUserById } = require('../controllers/usersController');

const upload = multer({ dest: 'public/images/' });

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

usersRouter.get('/:userId/tasks', usersController.getUsersTasks);

usersRouter.patch(
  '/:userId/images',
  upload.single('userPhoto'),
  usersController.updateImage
);

module.exports = usersRouter;
// patch - зміна
// put заміна або створення
