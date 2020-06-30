import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';

console.log('test testjs');

axios({
  method: 'get',
  url: `http://127.0.0.1:3004/001/`,
})
  .then((res) => {
    console.log('test');
    console.log(res);
    ReactDOM.render(res.data, document.getElementById('app'));
  })
  .catch((err) => {
    console.error(err);
  });