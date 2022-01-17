const {
    Router
} = require('express');
const auth = require('../middleware/auth');
const router = Router();

router.get('/', async (req, res) => {
    try {
        res.render('profile', {
            title: 'Профиль',
            isProfile: true,
            user: req.user.toObject()
        });
    } catch (e) {
        console.log(e);
    }
});

router.post('/', async (req, res) => {

});

module.exports = router;