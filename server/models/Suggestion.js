// const mongoose = require('mongoose');

// const suggestionSchema = new mongoose.Schema({
//   name: String,
//   suggestion: String,
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model('Suggestion', suggestionSchema);

const mongoose = require('mongoose');

const suggestionSchema = new mongoose.Schema({
  suggestion: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Suggestion', suggestionSchema);

