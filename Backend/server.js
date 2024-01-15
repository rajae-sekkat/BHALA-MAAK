const express = require("express");
const cors = require("cors");
const router = require('./routers/loginRoutes');
const router_1 = require('./routers/signupRouters')
const taskRouter = require('./routers/taskRouters');
const sugarRouter = require('./routers/sugarRouter');
const pressureRouter = require('./routers/pressureRouter');

const app = express();
app.use(cors());
app.use(express.json());

// Mount the login routes
app.use('/api', router);

// Mount the signup routes
app.use('/api', router_1);

// Mount the task routes
app.use('/api', taskRouter);
app.use('/api', sugarRouter);
app.use('/api', pressureRouter);

app.listen(8081, () => {
  console.log(`Server is running on port 8081`);
});
