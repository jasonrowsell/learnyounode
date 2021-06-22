const filterFn = require('./mymodule');

const dir = process.argv[2];
const ext = '.' + process.argv[3];

const displayFiles = async (dir, ext) => {
  try {
    files = await filterFn(dir, ext);
    files.forEach((file) => {
      console.log(file);
    });
  } catch (error) {
    console.log(error);
  }
};

displayFiles(dir, ext);
