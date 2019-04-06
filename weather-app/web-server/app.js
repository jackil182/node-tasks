const path = require('path');
const express = require('express');
const app = express();

const publicDirPath = path.join(__dirname, '../public');

app.use(express.static(publicDirPath));

// app.get('', (req, res) => {
//   res.send('Main page');
// });

// app.get('/help', (req, res) => {
//   res.send('Help page');
// });

// app.get('/about', (req, res) => {
//   res.send('<h1>About page</h1>');
// });

app.get('/weather', (req, res) => {
  res.send({
    location: 'Kyiv',
    info: 'warm, sunny, +15'
  });
});

app.listen(3000, () => {
  console.log(`server is listenning on 3000`)
})