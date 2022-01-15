const {
    Router
} = require('express');
// const Course = require('../models/course');
const router = Router();

router.get('/login', async (req, res) => {
    res.render('auth/login', {
        title: 'Авторизация',
        isLogin: true
    });
});

module.exports = router;