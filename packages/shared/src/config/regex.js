module.exports = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

  USERNAME: /^[a-zA-Z0-9_]{3,30}$/,

  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
};
