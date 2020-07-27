const dynamicSort = require('./sorting')

module.exports = function () {
    return (async () => {
        let connection;
        try {
            //get connection from pool
            connection = await pool.getConnection();
            //query to get all the users in User table
            let query = `select * from User`;
            let result = await connection.query(query);
            result.sort(dynamicSort("name"));
            return result;
        } catch (error) {
            throw error;
        } finally {
            if (connection) {
                try {
                    // Put the connection back in the pool
                    await connection.close();
                } catch (err) {
                    log.error(err);
                }
            }
        }
    })()
};
