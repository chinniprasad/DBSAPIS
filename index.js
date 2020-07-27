global.BasicResponse = require("./ResponseBody");
require("./Globals");
const express = require("express");
const cors = require("cors");
const expressOasGenerator = require('express-oas-generator')
const routes = require("./Routes");
const app = express();

expressOasGenerator.init(app, {});
const port = process.env.PORT || 5000
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/v1", routes);

app.listen(port, () => {
  console.log(`🌏 Server is running at http://localhost:${port}`)
})

module.exports = app