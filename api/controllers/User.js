const {
  db,
  admin,
  firebase
} = require('../config/firebaseConfig')

exports.signUp = async (req, res) => {
  const {
    email,
    password,
    fullname
  } = req.body
  const data = {
    email,
    password,
    displayName: fullname,
    photoURL: 'http://www.example.com/12345678/photo.png'
  }
  admin.auth().createUser(data)
    .then(userRecord => userRecord)
    .then((userRecord) => {
      db.collection('users').doc(userRecord.uid).set({ email, displayName: fullname })
      return admin.auth().createCustomToken(userRecord.uid)
    }).then(generateToken => {
      return res.status(200).json({
        message: 'Successfully created new user:',
        token: generateToken
      })
    }).catch(error => {
      if (error.code === 'auth/email-already-exists') {
        res.status(400).json({
          error: 'Email is already in use.'
        })
      }
    })
}

exports.signIn = async (req, res) => {
  const {
    email,
    password
  } = req.body
  try {
    const userRecord = await firebase.auth().signInWithEmailAndPassword(email, password)
    const token = await userRecord.user.getIdToken()

    res.status(200).json({
      token
    })
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      res.status(400).json({
        message: error.message
      })
    }

    if (error.code === 'auth/wrong-password') {
      res.status(400).json({
        message: error.message
      })
    }
  }
}
