const fs = require('fs').promises;

const filterFn = async (dir, ext) => {
  try {
    const data = await fs.readdir(dir);
    return data.filter((file) => file.includes(ext));
  } catch (error) {
    console.log(error);
  }
};

module.exports = filterFn;
