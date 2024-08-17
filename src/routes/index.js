const express = require('express');
const routerStudent = require('./student.rotuer');
const routerCourse = require('./course.router');
const router = express.Router();

router.use('/students', routerStudent)
router.use('/courses', routerCourse)

module.exports = router;