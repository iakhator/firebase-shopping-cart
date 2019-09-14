const {
  db,
  admin,
  firebase
} = require('../config/firebaseConfig')

exports.signUp = async (req, res) => {
  const {
    email,
    password,
    displayName,
    photoURL
  } = req.body
  const data = {
    email: email,
    emailVerified: false,
    password: password,
    displayName: displayName,
    photoURL: photoURL,
    disabled: false
  }
  try {
    const userDoc = await db.collection('users').doc(displayName).get()
    if (userDoc.exists && userDoc.id === displayName) {
      res.status(400).json({
        message: 'The displayname is already taken'
      })
    } else {
      const userRecord = await admin.auth().createUser(data)
      const createUser = await db.collection('users').doc(displayName).set(data)
      const generateToken = await admin.auth().createCustomToken(userRecord.uid)

      res.status(200).json({
        message: 'Successfully created new user:',
        token: generateToken
      })
    }
  } catch (error) {
    if (error.code === 'auth/email-already-exists') {
      res.status(400).json({
        message: 'The email address is already in use by another account.'
      })
    }
  }
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
