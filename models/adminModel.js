const mongoose = require("mongoose");


const adminSchema = new mongoose.Schema({
  email:{type: String, required: true, unique: true},
  username: { type: String, required: true, unique: true },
  password: { type: String },
});



module.exports = mongoose.model("Admin", adminSchema);
