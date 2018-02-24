const Book = require('../models/Book');


exports.get_books = function (req, res) {
    Book.find().exec(function (err, books) {
        if (err) return handleError(err);

        res.json(books);
    });
};


exports.get_book = function (req, res) {
    let id = req.params.id;

    Book.findById(id, function (err, book) {
        if (err) return handleError(err);

        res.json(book);
    });
};


exports.post_create = function (req, res) {
    var book = new Book({
        title: req.body.title,
        author: req.body.author
    });

    book.save();
};