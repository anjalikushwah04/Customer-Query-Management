const express = require('express');
const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: Number,
        require: true,
    }
})

const Admin = mongoose.model('admin', adminSchema);

module.exports=Admin;
