var express = require('express');
var router = express.Router();

const fs = require('fs')
const students = JSON.parse(fs.readFileSync('../students.json'));

/* GET students listing. */
router.get('/', (req, res) => res.send(students));

/* GET students listing routing. */
router.get('/', (req, res) => req.query(students));

/* GET students listing by ID. */
router.get('/:ID', (req, res) => {
  const selectedStudent = students.find(students => students.ID == Number(req.params.ID));
  res.send(selectedStudent);
});

/* GET students grades listing by ID. */
router.get('/Grade-ID/:ID', (req, res) => {
  const selectedStudent = students.find(students => students.ID == req.params.ID);
  res.send(selectedStudent);
});

/* Post students grades. */
router.post('/Grade-ID', (req, res) => {
  res.send(students);
});

/* Post students registrations. */
router.post('/UserCreated', (req, res) => {
  res.send(students);
});


module.exports = router;
