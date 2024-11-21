const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('help', {
        layout: 'layouts/main',
        title: 'Strona Pomocy',
    });
});

module.exports = router;
