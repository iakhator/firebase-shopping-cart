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
      req.uid = decodedToken.uid
      next()
    })
    .catch((err) => {
      console.error('Error why verifying token', err)
      if (err.code === 'auth/id-token-expired') {
        return res.status(403).json({ error: 'Token has expired.' })
      }
      return res.status(403).json({ error: err.code })
    })
}
