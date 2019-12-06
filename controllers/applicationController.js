exports.index = function(req, res, next) {
    res.render('index', { title: 'CMS App' });
};

exports.create = function(req, res, next) {
    res.render('users/create', { user_id: Math.floor((Math.random() * 100000000) + 1) });
};

exports.user_create = function(req, res, next) {
    console.log(req.body.full_name);
};