/* Define model */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TodoSchema = new Schema({
Email: { type: String, required: true },
Password: { type: String, required: true },
});
/* Export model */
module.exports = mongoose.model("Todo", TodoSchema);