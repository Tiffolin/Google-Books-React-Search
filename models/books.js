const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: [{ type: String, required: true }],
  synopsis: { type: String, required: false },
  image: { type: String, required: true },
  link: { type: String, required: true },
  dateSaved: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;