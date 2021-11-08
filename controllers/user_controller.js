const User = require('../models/user');

module.exports.createUser = async function(req ,res)
{
    let user = await User.find({});

    // console.log(req.body);
    User.create(req.body ,function(err ,user){
        if(err)
        {
            console.log(err);
            // window.alert("Username already exits")
            //console.log(req.body);
            return res.redirect('/');;
        }
        return res.redirect('/');
    })
    
}

module.exports.deleteUser = async function(req , res)
{
    // console.log(req.params.id);
    let Id = req.params.id
    User.findByIdAndDelete(Id , function(err){

        if(err){
            console.log("Error in deleting contact");
            return; 
        }

        return res.redirect('/');

    })
}

module.exports.updateUser = async function(req , res)
{
    // console.log(req.params.id);

    return res.render('update',{
        userid : req.params.id,
    })

}

module.exports.update = async function(req,res)
{
    // console.log(req.body);
    // console.log(req.params.userid);

    try {
        let user = await User.findByIdAndUpdate(req.params.userid);
        user.Name = req.body.Name;
        user.Username = req.body.Username;

        user.save();

        return res.redirect('/');


    } catch (error) {

        return res.redirect('/');
        
    }
}