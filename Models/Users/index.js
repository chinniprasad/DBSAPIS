const fs = require("fs");

class Users {
  constructor() {}
}
fs.readdirSync(__dirname + '/Methods/').forEach(function(file){
    if(file != 'index.js') {
        let fileName = file.replace('.js', '')
        Users.prototype[fileName] = require(__dirname + '/Methods/' + fileName)
    }
})

module.exports = Users