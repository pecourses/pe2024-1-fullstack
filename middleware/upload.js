const path = require('node:path');
const fs = require('node:fs');
const multer = require('multer');
const createHttpError = require('http-errors');
const { STATIC_IMAGES_PATH } = require('../constants');

// якщо "public/images" не існує, то створити
if (!fs.existsSync(STATIC_IMAGES_PATH)) {
  fs.mkdirSync(STATIC_IMAGES_PATH, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.env.STATIC_FOLDER, 'images'));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  },
});

function fileFilter (req, file, cb) {
  const MIMETYPE_REG_EXP = /^image\/(gif|png|jpeg)$/;

  //   cb(null, MIMETYPE_REG_EXP.test(file.mimetype));

  // Якщо тип файлу допустимий, то зберігаємо
  if (MIMETYPE_REG_EXP.test(file.mimetype)) {
    return cb(null, true);
  }
  // Інакше генеруємо помилку і перериваємо ланцюжок обробників
  cb(createHttpError(415, 'Support only jpeg/png/gif mimetypes'));
}

const upload = multer({ storage, fileFilter });

module.exports.uploadUserPhoto = upload.single('userPhoto');
