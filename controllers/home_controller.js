const User = require('../models/user');


module.exports.home =async function(req ,res){
    let user = await User.find({});
    
    return res.render('home',{
        user : user,
    });
}

module.exports.main = function(req , res)
{
    return res.render('main');
}