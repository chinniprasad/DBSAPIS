module.exports = function (data) {
    return (async () => {
        let connection
        try {
            //get connection from pool
            connection = await pool.getConnection();
            //query to get specific user data by id in User table
            let query = `select * from User where email = '${data.email}' and password ='${data.password}' `
            let result = await connection.query(query)
            return result[0];
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
