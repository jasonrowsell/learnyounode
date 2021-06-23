const axios = require('axios');
const url = process.argv[2];

const retrieveData = async (url) => {
  try {
    const response = await axios.get(url);
    console.log(response.data.length);
    console.log(response.data);
  } catch (e) {
    return console.log(e);
  }
};

retrieveData(url);
