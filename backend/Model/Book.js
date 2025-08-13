const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    name: {
        type: String, 
        required: true
    },
    rating: {
        type: Number, 
        required: true,
        min: 1,
        max: 5
    },
    review: {
        type: String 
    },
    createdAt: {
        type: Date,
        default: Date.now 
    }
});

// Main book schema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true 
    },
    author: {
        type: String,
        required: true 
    },
    description: {
        type: String 
    },
    coverUrl: {
        type: String 
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    reviews: [reviewSchema] 
});

module.exports = mongoose.model('Book', bookSchema);
