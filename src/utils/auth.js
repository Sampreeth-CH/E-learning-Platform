<<<<<<< HEAD
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
=======
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
>>>>>>> 9bcb51952a5168676318fdb5ee41b24878bf7829
