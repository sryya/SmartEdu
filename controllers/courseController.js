const express=require('express')
const Course=require('../models/Courses');

exports.createCourse= async(req,res)=>{
    const course= await Course.create(req.body)
    try {
         res.status(201).json({
            status: 'success',
            course,
         })
        //req.send('yeni kurs oluşturuldu')
    } catch {
        res.status(400).json({
            status: 'fails',
            error,
        })
    }
    
    
}