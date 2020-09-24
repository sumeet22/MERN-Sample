const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  typename: { type: String, required: true },
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
