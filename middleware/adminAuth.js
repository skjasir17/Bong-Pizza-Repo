module.exports=(req,res,next)=>{
    if(req.session && req.session.isAdmin){
        next();
    }else{
        req.flash('error','You are not authorized to access this page!');
        res.redirect('/admin/login');
    }
}