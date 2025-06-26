export const saveUser = (user) => {
  localStorage.setItem('eLearnUser', JSON.stringify(user));
};

export const getUser = () => {
  const user = localStorage.getItem('eLearnUser');
  return user ? JSON.parse(user) : null;
};

export const logoutUser = () => {
  localStorage.removeItem('eLearnUser');
};
