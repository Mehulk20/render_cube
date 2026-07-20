export const isValidEmail = (value = '') => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export const isNotEmpty = (value = '') => value.trim().length > 0;

export const validatePassword = (password = '', confirmPassword = '') => {
  if (!password || !confirmPassword) {
    return 'Password and Confirm Password are required.';
  }

  if (password.length < 8) {
    return 'Use at least 8 characters.';
  }

  if (password !== confirmPassword) {
    return 'Passwords do not match.';
  }

  return null;
};

export const getPasswordStrength = (password = '') => {
  let score = 0;

  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const levels = [
    { label: 'Too weak', color: 'bg-red-500' },
    { label: 'Weak', color: 'bg-red-500' },
    { label: 'Fair', color: 'bg-amber-500' },
    { label: 'Good', color: 'bg-amber-500' },
    { label: 'Strong', color: 'bg-emerald-500' },
    { label: 'Very strong', color: 'bg-emerald-500' },
  ];

  return {
    score,
    percent: (score / 5) * 100,
    ...levels[score],
  };
};

// utils/authValidators.js

export const isValidUsername = (username = '') => {
  const value = username.trim();

  // 3-30 characters
  // Letters, numbers, underscore, dot and hyphen only
  const regex = /^[a-zA-Z0-9._-]{3,30}$/;

  return regex.test(value);
};

export const validateUsername = (username = '') => {
  if (!username.trim()) {
    return 'Username is required.';
  }

  if (username.length < 3) {
    return 'Username must be at least 3 characters.';
  }

  if (username.length > 30) {
    return 'Username cannot exceed 30 characters.';
  }

  if (!isValidUsername(username)) {
    return "Only letters, numbers, '.', '_' and '-' are allowed.";
  }

  return null;
};

export const validateRegisterForm = (form, agree) => {
  const errors = {};

  const usernameError = validateUsername(form.username);

  if (usernameError) {
    errors.username = usernameError;
  }

  if (!isNotEmpty(form.name)) {
    errors.name = 'Enter your full name';
  }

  if (!isValidEmail(form.email)) {
    errors.email = 'Enter a valid email address';
  }

  const passwordError = validatePassword(form.password, form.confirmPassword);

  if (passwordError) {
    if (passwordError.includes('match')) {
      errors.confirmPassword = passwordError;
    } else {
      errors.password = passwordError;
    }
  }

  if (!agree) {
    errors.agree = 'Please accept the Terms of Service';
  }

  return errors;
};
