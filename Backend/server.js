// server.js
const express = require("express");
const cors = require("cors");
const routes = require('./routes/loginRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', routes);

const PORT = 8082;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
