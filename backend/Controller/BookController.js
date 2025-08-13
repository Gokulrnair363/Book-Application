const Book = require('../Model/Book');

exports.addBook = async (req, res) => {
    try {
        const { title, author } = req.body;
        if (!title || !author) {
            return res.status(400).json('Title and Author required');
        }
        const newBook = new Book({ title, author, reviews: [] });
        await newBook.save();
        res.status(201).json('Book added successfully');
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find().sort({createdAt: -1});
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json(err.message);
    }
};
exports.getBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id)
        if (!book) {
            return res.status(404).json('Book not found' );
        }
        res.status(200).json(book);
    } catch (err) {
        res.status(500).json(err);
    }
};

const User = require('../Model/User');  // Make sure you import your User model

exports.addReview = async (req, res) => {
    try {
        const { bookId } = req.params;
        const { review, rating } = req.body;

        const book = await Book.findById(bookId);
        if (!book) return res.status(404).json('Book not found');

        const user = await User.findById(req.userId);
        if (!user) return res.status(404).json('User not found');

        book.reviews.push({
            user: user._id,    // ObjectId field expected by schema
            name: user.name,   // User's name required by schema
            review,
            rating
        });

        await book.save();
        res.status(201).json('Review added');
    } catch (err) {
        res.status(500).json(err);
    }
};

