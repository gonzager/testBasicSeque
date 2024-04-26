const addAutorToPostBody = (req, _, next) => {
  const id = req.params.id;
  req.body = { autor: {id}, ...req.body }
  next()
}

module.exports = addAutorToPostBody