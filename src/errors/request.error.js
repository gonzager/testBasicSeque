const handleErrors =  (err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode ?? 500).json(
    {errors: [{atributo: err.atributo,  error: err.message}]})
}

module.exports = handleErrors;