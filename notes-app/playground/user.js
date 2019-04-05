const fs = require('fs');

// const user = {
//   name: 'Mark',
//   planet: 'Earth',
//   age: 27
// }
// const userJSON = JSON.stringify(user);
// const userParsed = JSON.parse(userJSON);
// fs.writeFileSync('user.json', userJSON);

const userBuffer = fs.readFileSync('user.json');
const userJSON = userBuffer.toString();
const user = JSON.parse(userJSON);
user.name = 'Nazarii';
user.planet = 'Mars';

fs.writeFileSync('user.json', JSON.stringify(user));
