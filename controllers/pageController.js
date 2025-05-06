const feedbackModel = require('../models/feedbackModel');

exports.renderHome = (req, res) => res.render('index');
exports.renderAbout = (req, res) => res.render('about');
exports.renderMenu = (req, res) => res.render('menu');
exports.renderRacipe = (req, res) => res.render('racipe');
exports.renderContact = (req, res) => res.render('contact');
exports.renderCareer = (req, res) => res.render('career');
exports.renderGetFranchise = (req, res) => res.render('getfranchise');
exports.renderStore = (req, res) => res.render('store');
exports.renderCatagory = (req,res) => res.render('catagory');
exports.renderTop = (req,res) => res.render('top');
exports.renderFeedback = (req,res) => res.render('feedback');
exports.renderTestimonial = async(req, res) => {
    try {
        const feedback = await feedbackModel.find().sort({ rating: -1 }); // Sort feedback by rating (highest first)
        res.render('testimonial', { feedback }); // Pass sorted feedback to EJS
    } catch (error) {
        console.error("Error fetching feedback:", error);
        res.status(500).send("Error fetching feedback");
    }
}

exports.renderNew=(req,res)=> res.render('new');