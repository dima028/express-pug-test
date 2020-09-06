const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('dima', {
        title: `About Dima`,
    });
});

  
const server = app.listen(3000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
