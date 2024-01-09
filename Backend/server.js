const express = require("express");
const cors = require("cors");
const router = require('./routes/loginRoutes');
const router_1 = require('./routes/signupRouters')

const app = express();
app.use(cors());
app.use(express.json());

// Mount the login routes
app.use('/api', router);

// Mount the signup routes
app.use('/api', router_1);

app.listen(8081, () => {
  console.log(`Server is running on port 8081`);
});
