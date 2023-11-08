const express = require("express");
const {
  getAllAccounts,
  UpdateAccount,
  deleteAccount,
  addAccount,
} = require("./controllers");

const router = express.Router();

router.get("/accounts", getAllAccounts);

router.post("/accounts", UpdateAccount);

router.delete("/accounts/:accountId", deleteAccount);

router.put("/accounts/:accountId", createAccount);

module.exports = router;
