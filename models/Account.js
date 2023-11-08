const { model, Schema } = require("mongoose");

const AccountSchema = mongoose.Schema({
  username: String,
  funds: Number,
});

module.exports = mongoose.model("Account", AccountSchema);
