const fs = require('fs/promises');
const path = require('path');
const uploadConfig = require('../../config/upload.config');

class StorageService {
  /* ==============================
     Avatar
  ============================== */

  async saveAvatar(file) {
    // Multer has already stored the file locally.
    return file.filename;
  }

  async deleteAvatar(filename) {
    if (!filename) return;

    try {
      await fs.unlink(path.join(uploadConfig.avatars, filename));
    } catch (err) {
      if (err.code !== 'ENOENT') throw err;
    }
  }

  avatarUrl(filename) {
    if (!filename) return null;

    return `/api/v1/users/uploads/avatars/${filename}`;
  }

  /* ==============================
     Banner
  ============================== */

  async saveBanner(file) {
    return file.filename;
  }

  async deleteBanner(filename) {
    if (!filename) return;

    try {
      await fs.unlink(path.join(uploadConfig.banners, filename));
    } catch (err) {
      if (err.code !== 'ENOENT') throw err;
    }
  }

  bannerUrl(filename) {
    if (!filename) return null;

    return `/api/v1/users/uploads/banners/${filename}`;
  }
}

module.exports = new StorageService();
