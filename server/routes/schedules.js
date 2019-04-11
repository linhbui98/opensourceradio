const express = require('express');
const router = express.Router();

const { ScheduleRepository } = require('../repo');
const { errorHandler, authMiddleware } = require('./middleware');

router.get('/today', (req, res) => {
  ScheduleRepository.todays()
  .then(schedules => {
    res.json({
      schedules
    });
  }).catch(error => {
    errorHandler(error, res);
  });
})

router.get('/', authMiddleware, (req, res) => {
  ScheduleRepository.getAll()
    .then(schedules => {
      res.json({
        schedules
      });
    }).catch(error => {
      errorHandler(error, res);
    });
});

router.post('/', (req, res) => {
  const schedule = req.body;
  ScheduleRepository.create(schedule)
    .then(result => {
      ScheduleRepository.get(result[0])
        .then(schedule => {
          res.json({ schedule });
        });
    }).catch(error => {
      errorHandler(error, res);
    })
});

router.post('/:id', (req, res) => {
  const id = req.params.id;
  ScheduleRepository.update(id, req.body)
    .then(result => {
      ScheduleRepository.get(id)
        .then(schedule => {
          res.json({ schedule });
        });
    }).catch(error => {
      errorHandler(error, res);
    })
});

router.delete('/:id', authMiddleware, (req, res) => {
  ScheduleRepository.remove(req.params.id)
    .then(result => {
      res.json({
        result
      });
    }).catch(error => {
      errorHandler(error, res);
    })
});

module.exports = router;