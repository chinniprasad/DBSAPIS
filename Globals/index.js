const mariadb = require('mariadb');
function init(){
    try {
        global.pool = mariadb.createPool({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'mydata',
            connectionLimit: 5
        });
    } catch (error) {
        console.log("error",error);
        
    }
}
init()