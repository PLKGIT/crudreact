/*  Body Parser Require  */
const bodyParser = require('body-parser');

/*  Express Require  */
const express = require('express');

/*  Require CORS */
const cors = require("cors");

/*  CORS Options  */
const corsOptions = {
  origin: "http://localhost:3000"
};

/*  Mongoose */
const mongoose = require('mongoose');

/*  Require Path  */
const path = require('path');

/*  Secure Variables  */
require('dotenv').config();

/*  Use Express  */
const app = express();

/*  Use CORS  */
app.use(cors(corsOptions));

/*  Middleware  */
/*  Parse requests application/json content type  */
app.use(bodyParser.urlencoded({ extended: true }));
/*  Parse requests application/x-www-form-urlencoded content type  */
app.use(bodyParser.json());

/*  Static Assets  */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static("client/build"));
}

const roleRoute = require('./routes/api/role.routes')
app.use('/roles', roleRoute)

/*  App Routes  */
// const routes = require("./routes");
// app.use(routes);

/*  Include Role, User, and Org Models  */
// const db = require("./models");
// const Role = db.role;

/*  MongoDB Connection */
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/merncrud", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Successfully connected to MongoDB.");
    // initial();
  })
  .catch(err => {
    console.error("MongoDB connection error", err);
    process.exit();
  });

/*  Create User Roles  */
// function initial() {
//   Role.estimatedDocumentCount((err, count) => {
//     if (!err && count === 0) {
//       new Role({
//         role_name: "user"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'user' to roles collection");
//       });

//       new Role({
//         role_name: "teacher"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'teacher' to roles collection");
//       });

//       new Role({
//         role_name: "admin"
//       }).save(err => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'admin' to roles collection");
//       });
//     };
//   });
// }

/*  Server Port Configuration */
const PORT = process.env.PORT || 3001;

/*  Start Server */
app.listen(PORT, function () {
  console.log(`Server running on PORT ${PORT}!`);
});

// Error Handling
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});