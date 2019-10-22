exports.notFound = (res, data) => {
  return res.status(200).json({
    data
  })
}

exports.foundSuccess = (res, data) => {
  return res.status(200).json({
    data
  })
}
