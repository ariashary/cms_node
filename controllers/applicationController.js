exports.index = function(req, res, next) {
    res.render('index', { title: 'CMS App' });
};

exports.create = function(req, res, next) {
    let response_msg = req.query.message;
    res.render('users/create', {
        user_id: Math.floor((Math.random() * 100000000) + 1),
        message: response_msg
    });
};
