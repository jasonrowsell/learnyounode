const axios = require('axios');

let one = process.argv[2];
let two = process.argv[3];
let three = process.argv[4];

const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);

axios
  .all([requestOne, requestTwo, requestThree])
  .then(
    axios.spread((...responses) => {
      responses.forEach((response) => {
        return console.log(response.data);
      });
    })
  )
  .catch((errors) => {
    console.log(errors);
  });
