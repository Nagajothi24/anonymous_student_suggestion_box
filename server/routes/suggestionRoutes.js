// const express = require('express');
// const router = express.Router();
// const Suggestion = require('../models/Suggestion');

// // POST: Submit new suggestion
// router.post('/', async (req, res) => {
//   try {
//     const newSuggestion = new Suggestion(req.body);
//     await newSuggestion.save();
//     res.status(201).json({ message: 'Suggestion submitted successfully!' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // GET: Get all suggestions
// // router.get('/all', async (req, res) => {
// //   try {
// //     const suggestions = await Suggestion.find();
// //     res.json(suggestions);
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // });
// // GET: Fetch all suggestions
// router.get('/', async (req, res) => {
//   try {
//     const suggestions = await Suggestion.find();
//     res.json(suggestions);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch suggestions' });
//   }
// });

// module.exports = router;



const express = require('express');
const router = express.Router();
const Suggestion = require('../models/Suggestion');

// POST: Save Anonymous Suggestion
router.post('/', async (req, res) => {
  try {
    const { suggestion } = req.body;
    const newSuggestion = new Suggestion({ suggestion });
    await newSuggestion.save();
    res.status(201).json({ message: 'Suggestion submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit suggestion' });
  }
});

// GET: Fetch all suggestions
router.get('/', async (req, res) => {
  try {
    const suggestions = await Suggestion.find();
    res.json(suggestions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch suggestions' });
  }
});

module.exports = router;
