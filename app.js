const express = require("express");
const accountsRouter = require("./api/accounts/routes");
const connectDb = require("./database");
require("dotenv").config();

const app = express(); //instance from express
app.use(express.json());
//   res.status(200).json(products);
// });

app.use("/api", accountsRouter);
connectDb();

app.listen(process.env.PORT, () => {
  console.log("app is running on port: 8000");
});
