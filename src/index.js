require("dotenv").config();
const express = require("express")
const cors = require("cors");

const errorHandler = require("./middlewares/error");
const notFoundHandler = require("./middlewares/notFound");
const createError = require("./utils/createError");

const authRoute = require("./routes/auth-route");
const authenticate = require("./middlewares/authenticate");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth",authenticate, authRoute);


app.use(errorHandler);
app.use("*", notFoundHandler);

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server run on port" + " " + port);
});