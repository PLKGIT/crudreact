/*  Body Parser Require  */
const bodyParser = require('body-parser');

/*  Express Require  */
const express = require('express');

/*  Require CORS */
const cors = require("cors");

/*  Require Path  */
const path = require('path');

/*  Secure Variables  */
require('dotenv').config();

/*  Use Express  */
const app = express();

/*  CORS Options  */
var corsOptions = {
  origin: "http://localhost:3000"
};

/*  Use CORS  */
app.use(cors(corsOptions));

/*  Middleware  */
/*  Parse requests application/json content type  */
app.use(bodyParser.urlencoded({ extended: true }));
/*  Parse requests application/x-www-form-urlencoded content type  */
app.use(bodyParser.json());

/*  Static Assets  */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

/*  Include Models  */
const db = require("./models");

/*  App Routes  */
require('./routes/api/apiRoutes')(app);

/*  MongoDB Connection */
db.mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/merncrud", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("MongoDB connection error", err);
    process.exit();
  });

/*  Simple Route */
app.get("/", (req, res) => {
  res.json({ message: "Welcome!." });
});

/*  Server Port Configuration */
const PORT = process.env.PORT || 3001;

/*  Start Server */
app.listen(PORT, function () {
  console.log(`Server running on PORT ${PORT}!`);
});