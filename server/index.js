const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../build', 'index.html'));
});

const PORT = 3001
app.listen(PORT, () => {
    console.log(`SERVER LISTEN ON ${PORT}`)
})