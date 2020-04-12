const path = require('path');
const fs = require('fs');

let readFilePromise = (path) => {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(path)) {
      fs.readFile(path, 'utf8', (err, res) => {
        if (err) return reject(err);
        resolve(res);
      })
    }
    else {
      fs.appendFile(path, '[]', (err) => {
        if (err) return reject(err);
        resolve('[]');
      })
    }
  });
}

let writeFilePromise = (path, data) => {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(path)) {
      fs.writeFile(path, data, function (err) {
        if (err) return reject(err)
        resolve('done');
      });
    }
    else {
      fs.appendFile(path, data, (err) => {
        if (err) return reject(err);
        resolve('done');
      })
    }
  });
}

module.exports = {
  readFilePromise,
  writeFilePromise
}
