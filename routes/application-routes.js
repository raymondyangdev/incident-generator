const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('home');
});

router.post('/', function (req, res) {
    const form = {
        app: req.body.app,
        issue: req.body.issue,
        error: req.body.error,
        date: req.body.date,
        actions: req.body.actions,
        outcome: req.body.outcome,
        name: req.body.name,
        contact: req.body.contact,
        asset: req.body.asset,
        location: req.body.location,
        affected: req.body.affected,
        submitted: req.body.pleaseAssistTy,
    };

    res.locals.form = form;
    res.render('home');
});

module.exports = router;
