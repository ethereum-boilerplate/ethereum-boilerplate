const fs = require('fs');

module.exports = (dir) =>
  fs
    .readdirSync(dir, {
      withFileTypes: true,
    })
    .reduce((a, c) => {
      c.isDirectory() && a.push(c.name);
      return a;
    }, []);
