 const path = require('path')

 exports.getIndexFilePath = (file) =>  path.join(__dirname, 'public', file);
