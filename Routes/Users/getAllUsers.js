const Users = require("../../Models/Users");

module.exports = async (req, res) => {
    const response = Object.assign({}, BasicResponse);
    try {
        let users = new Users();
        let result = await users.getAllUsers();
        if (result) {
            response.success = true;
            response.message = "Data Retrived successfully";
            response.data = result;
            res.status(200).json(response);
        } else {
            response.message = "Data not available";
            res.status(403).json(response);
        }
    } catch (err) {
        console.log("error", err);
    }
};