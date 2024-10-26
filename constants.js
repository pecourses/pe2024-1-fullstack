const path = require('node:path');

const STATIC_FOLDER = path.resolve(process.env.STATIC_FOLDER); // "public"
const STATIC_IMAGES_FOLDER = 'images';

const CONSTANTS = {
  GENDERS: ['male', 'female', 'other'],
  ROLES: ['executor', 'manager'],
  SALT_ROUNDS: Number(process.env.SALT_ROUNDS),
  STATIC_PATH: path.resolve(STATIC_FOLDER), // "/abs_path/public"
  STATIC_IMAGES_FOLDER, // "images"
  STATIC_IMAGES_PATH: path.resolve(STATIC_FOLDER, STATIC_IMAGES_FOLDER), // "/abs_path/public/images"
};

module.exports = CONSTANTS;
