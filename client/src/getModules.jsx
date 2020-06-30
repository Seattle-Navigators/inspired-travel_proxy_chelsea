import axios from 'axios';
import React from 'react';

console.log('test getModules');

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // const port1 = 3001;
    // const port2 = 3002;
    // const port3 = 3003;
    const port4 = 3004;

    // const url = new URL(window.location.href);
    // const path = url.pathname;
    // const idSearch = /(\d{3})/;
    // const [attractionId] = path.match(idSearch);

    axios({
      method: 'get',
      url: `http://127.0.0.1:${port4}/001/`,
    })
      .then((res) => {
        console.log('test');
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>Oh hi</div>
    );
  }
}

export default App;
