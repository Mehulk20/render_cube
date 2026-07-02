const allowedFields = ['email', 'username', 'bio', 'status', 'avatar'];

exports.filterAllowedFields = (obj) => {
  const filtered = {};

  Object.keys(obj).forEach((key) => {
    if (allowedFields.includes(key)) {
      filtered[key] = obj[key];
    }
  });

  return filtered;
};
