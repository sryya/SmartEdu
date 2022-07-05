const express=require('express')
const courseController=require('../controllers/courseController');
const Course = require('../models/Courses');
const router =express.Router();
router.route('/').post(courseController.createCourse); //localhost:3000/courses


module.exports=router;

