const express = require('express');
const router = express.Router();

const { MessageRepository } = require('../repo');
const libraryRouter = require('./library');
const schedulesRouter = require('./schedules');

router.use('/library', libraryRouter);
router.use('/schedules', schedulesRouter);

router.get('/history', (req, res) => {
  MessageRepository.latest()
  .then((history) => {
    history = history.reverse();
    res.json({
      history
    });
  }).catch(error => {
    res.json({ history: [] });
  });
});

module.exports = router;