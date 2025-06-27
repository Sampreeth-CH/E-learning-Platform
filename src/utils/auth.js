// utils/auth.js

const USERS_KEY = 'users';
const LOGGED_IN_USER_KEY = 'loggedInUser';

// Save user to localStorage
export const saveUser = (user) => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

// Authenticate user
export const loginUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  const matchedUser = users.find((u) => u.email === email && u.password === password);

  if (matchedUser) {
    localStorage.setItem(LOGGED_IN_USER_KEY, JSON.stringify(matchedUser));
    return matchedUser;
  }

  return null;
};

// Logout
export const logoutUser = () => {
  localStorage.removeItem(LOGGED_IN_USER_KEY);
};

// Get current logged in user
export const getUser = () => {
  const user = localStorage.getItem(LOGGED_IN_USER_KEY);
  return user ? JSON.parse(user) : null;
};
