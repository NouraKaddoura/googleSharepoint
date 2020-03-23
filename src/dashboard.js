import axios from 'axios';

const url = '/__api';

function getLists() {
  return axios.get(url, {})
    .then(function (response) {
      console.log(response)
    });
};

export default getLists;
