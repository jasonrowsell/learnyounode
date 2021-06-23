const axios = require('axios');

const url = process.argv[2];

const retrieveData = async (url) => {
  try {
    const response = await axios.get(url);
    const result = response.data.split(/(?=[A-Z])/);
    result.forEach((data) => {
      console.log(data);
    });
  } catch (error) {
    console.log(error);
  }
};

retrieveData(url);
