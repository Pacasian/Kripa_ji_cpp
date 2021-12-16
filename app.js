const express = require("express");
const app = express();
const morgon = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv/config");
const api = process.env.API_URL;
app.use(morgon("tiny"));
app.use(cors());

// Express v4.16.0 and higher
// --------------------------
app.use(express.json());
app.use(
      express.urlencoded({
            extended: true,
      })
);

// For Express version less than 4.16.0
// ------------------------------------
app.use(bodyParser.json());
app.use(
      bodyParser.urlencoded({
            extended: true,
      })
);

app.listen(process.env.PORT || 3000, () => {
      console.log(api);
      console.log(process.env.PORT);
      console.log("Server running on port 3000, http://localhost:3000/");
});

mongoose
      .connect(process.env.CONNECTION_STRING2, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "bookDB",
      })
      .then(() => {
            console.log("Database connected....");
      })
      .catch((err) => {
            console.log(err);
      });

const angelDataRouter = require('./router/add_book');
app.use(`${api}/books`,angelDataRouter);

const issueDataRouter= require('./router/issue');
app.use(`${api}/issue`,issueDataRouter);


const alertDataRouter= require('./router/alert');
app.use(`${api}/alert`,alertDataRouter);

