/* Define model */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
Email: { type: String, required: true },
Password: { type: String, required: true },
Fav: { 
    urlImage: { type: [ String ], default: []},
    filmName: { type: [ String ], default: []},
    releaseDate: { type: [ String ], default: []}
}
});
/* Export model */
module.exports = mongoose.model("Todo", TodoSchema);