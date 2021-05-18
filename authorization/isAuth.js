const isAuth = (req, res, next) => {
  if(req.user) {
    next();
  } else {
    res.redirect('/login');
  }
};

const notAuth = (req, res, next) => {
  if(!req.user) {
    next();
  } else {
    res.redirect('/lobby');
  }
}
  
module.exports = {isAuth, notAuth};