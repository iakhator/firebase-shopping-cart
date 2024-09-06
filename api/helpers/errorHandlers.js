export const notFound = (res, data) => {
  return res.status(200).json({
    data,
  })
}

export const foundSuccess = (res, data) => {
  return res.status(200).json({
    data,
  })
}
