const feedbackModel = require('../models/feedbackModel');

exports.submitFeedback = async (req, res) => {
    try {
        await feedbackModel.create({
            name: req.body.name,
            message: req.body.message,
            rating: req.body.rating
        });
        res.redirect('/testimonial');
    } catch (err) {
        res.status(500).send("Failed to submit feedback");
    }
};
