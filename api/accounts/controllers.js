const accounts = require("../../accounts");
const Account = require("../models/Account");

const getAllAccounts = async (req, res) => {
  const accounts = await Account.find();
  res.status(200).json();
};

const createAccount = async (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json("please provide a username");
  await Account.create({ username: username, funds: 0 });
};

const deleteAccount = async (req, res) => {
  const { accountId } = req.params;
  await Account.deleteOne({
    username: username,
  });
  return res.status(200).json("deleted successfully");
};

const UpdateAccount = async (req, res) => {
  const { username, funds } = req.body;
  await Account.updateOne();
};

module.exports = {
  getAllAccounts,
  UpdateAccount,
  deleteAccount,
  createAccount,
};
