const express = require("express");
const app = express();
const port = process.env.port || 5001;
const bodyParser = require("body-parser");
const routers = require("./Routes/Routes");

app.use(bodyParser.json());
app.use( //json zadlana 
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Welcome back end");
});

app.use("/form", routers);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
