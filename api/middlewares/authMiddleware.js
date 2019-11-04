const { admin } = require('../config/firebaseConfig')

module.exports = (req, res, next) => {
  let idToken
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    idToken = req.headers.authorization.split('Bearer ')[1]
  } else {
    return res.status(403).json({ error: 'Unauthorized' })
  }

  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      req.user = decodedToken
      next()
    })
    .catch((err) => {
      console.error('Error why verifying token', err)
      return res.status(403).json({ error: err.code })
    })
}
