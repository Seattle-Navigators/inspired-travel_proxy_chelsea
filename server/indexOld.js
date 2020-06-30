const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const axios = require('axios');
const fs = require('fs');

const app = express();
const port = 3000;



app.use(morgan('dev'));
app.use(bodyParser.json());
// app.use((req, res, next) => {
//   res.set('Cache-Control', 'no-store');
//   next();
// });
// app.use('/:productId', express.static(path.resolve(__dirname, '..', 'client', 'public')));

app.use('/:productId', (req, res, next) => {
  axios({
    method: 'get',
    url: `http://127.0.0.1:3004/001/`,
    responseType: 'stream',
  })
    .then(({data}) => {
      data.pipe(fs.createWriteStream(path.resolve(__dirname, 'static', 'bundle.js')));
      // fs.writeFile(path.resolve(__dirname, 'static', 'bundle.js'), data, () => {
      //   next();
      // });
    })
    .then(() => {
      next();
    })
    .catch((err) => {
      console.error(err);
    });
});

app.use('/:productId', express.static(path.resolve(__dirname, 'static')));
// app.get('/:productId', (req, res) => {
//   res.sendStatus(200);
// });
// app.get('/:productId/', (req, res) => {
//   res.status(200);
//   res.sendFile(staticFiles);
// });

app.listen(port, () => {
  console.log('good to go');
});