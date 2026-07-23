const path = require('path');

const UPLOAD_ROOT = path.join(__dirname, '../../uploads');

module.exports = {
  root: UPLOAD_ROOT,

  avatars: path.join(UPLOAD_ROOT, 'avatars'),

  banners: path.join(UPLOAD_ROOT, 'banners'),
};
