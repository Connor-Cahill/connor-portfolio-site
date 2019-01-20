
module.exports = function(app) {
  //  GET: renders home page
  app.get('/', (req, res) => {
    res.render('home');
  })
}