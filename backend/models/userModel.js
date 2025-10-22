
const users = [];
let currentId = 1;

const addUser = (user) => {
  const newUser = {
    id: currentId++,
    username: user.username,
    email: user.email,
    passwordHash: user.passwordHash // Armazena apenas o hash
  };
  users.push(newUser);
  console.log('Usuário adicionado:', newUser);
  return newUser;
};

const findByUsername = (username) => {
  return users.find(u => u.username === username);
};

module.exports = {
  addUser,
  findByUsername
};