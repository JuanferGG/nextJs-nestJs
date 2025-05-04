import { BadRequestException } from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from 'path';

export const multerConfig = {
  storage: diskStorage({
    destination: './uploads/tasks',
    filename: (req, file, callback) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const extension = extname(file.originalname);
      callback(null, `${uniqueSuffix}${extension}`);
    },
  }),
  fileFilter: (req, file, callback) => {
    // Validar el tipo MIME del archivo
    const allowedMimes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedMimes.includes(file.mimetype)) {
      return callback(new BadRequestException('El archivo debe ser una imagen (JPG, PNG o GIF)'), false);
    }

    // Validar la extensión del archivo
    const allowedExtensions = /\.(jpg|jpeg|png|gif)$/;
    if (!file.originalname.match(allowedExtensions)) {
      return callback(new BadRequestException('La extensión del archivo debe ser .jpg, .jpeg, .png o .gif'), false);
    }

    callback(null, true);
  },
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
};
