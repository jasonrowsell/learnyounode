const { default: axios } = require('axios');

const url = 'https://chitter-backend-api-v2.herokuapp.com/peeps';

const displayPosts = async (url) => {
  try {
    const response = await axios.get(url);
    response.data.forEach((post) => {
      console.log({
        post: post.body,
        user: post.user.handle,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

displayPosts(url);
