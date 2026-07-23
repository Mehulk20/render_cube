const multer = require('multer');
const crypto = require('crypto');
const path = require('path');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    let folder;

    switch (file.fieldname) {
      case 'avatar':
        folder = 'avatars';
        break;

      case 'banner':
        folder = 'banners';
        break;

      default:
        return cb(new Error('Invalid upload field.'));
    }

    cb(null, path.join(__dirname, '../../uploads', folder));
  },

  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    console.log(ext);
    const cat = file.fieldname === 'avatar' ? 'avt_' : 'bnr_';

    cb(null, `${cat}${crypto.randomUUID()}${ext}`);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
