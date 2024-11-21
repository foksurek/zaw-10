const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Strona Główna',
        layout: 'layouts/main',
    });
}); 

module.exports = router;
