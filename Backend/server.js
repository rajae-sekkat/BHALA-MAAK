// server.js
const express = require("express");
const cors = require("cors");
const routes = require('./routes/loginRoutes');

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api', routes);


app.listen(8081, () => {
  console.log(`Server is running on port 8081`);
});
