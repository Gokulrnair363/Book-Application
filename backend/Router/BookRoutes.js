
const express = require('express'); 
const router = express.Router();
const { addBook, getBooks, addReview, getBookById } = require('../Controller/BookController');
const verifyToken = require('../Middleware/authMiddleware');

router.post('/books', verifyToken, addBook);
router.get('/books', getBooks);
router.get('/books/:id', getBookById);        
router.post('/books/:bookId/review', verifyToken, addReview);

module.exports = router;