const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

router.get('/', pageController.renderHome);
router.get('/about', pageController.renderAbout);
router.get('/menu', pageController.renderMenu);
router.get('/racipe', pageController.renderRacipe);
router.get('/contact', pageController.renderContact);
router.get('/career', pageController.renderCareer);
router.get('/testimonial', pageController.renderTestimonial);
router.get('/getfranchise', pageController.renderGetFranchise);
router.get('/store', pageController.renderStore);
router.get('/catagory', pageController.renderCatagory);
router.get('/top', pageController.renderTop);
router.get('/feedback', pageController.renderFeedback);
router.get('/new',pageController.renderNew);
module.exports = router;
