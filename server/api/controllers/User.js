// import { db, auth, firebase } from '../config/firebaseConfig.js'

// export const signUp = (req, res) => {
//   const { email, password, fullname } = req.body
//   const data = {
//     email,
//     password,
//     displayName: fullname,
//     photoURL: 'http://www.example.com/12345678/photo.png',
//   }
//   auth
//     .auth()
//     .createUser(data)
//     .then((userRecord) => {
//       db.collection('users')
//         .doc(userRecord.uid)
//         .set({ email, displayName: fullname })
//     })
//     .then(() => {
//       return res.status(200).json({
//         message: 'Account successfully created.',
//       })
//     })
//     .catch((error) => {
//       if (error.code === 'auth/email-already-exists') {
//         res.status(400).json({
//           error: 'Email is already in use.',
//         })
//       }
//     })
// }

// export const signIn = (req, res) => {
//   const { email, password } = req.body

//   firebase
//     .auth()
//     .signInWithEmailAndPassword(email, password)
//     .then((userRecord) => {
//       return userRecord.user.getIdToken()
//     })
//     .then((token) => {
//       res.status(200).json({
//         token,
//       })
//     })
//     .catch((error) => {
//       if (error.code === 'auth/user-not-found') {
//         res.status(400).json({
//           message: error.message,
//         })
//       }

//       if (error.code === 'auth/wrong-password') {
//         res.status(400).json({
//           message: 'Invalid email or password',
//         })
//       }
//     })
// }

// export const getUser = (req, res) => {
//   auth
//     .auth()
//     .getUser(req.uid)
//     .then((userRecord) => {
//       res.status(200).json(userRecord)
//     })
//     .catch((error) => {
//       console.error(error)
//       res.status(500).json(error)
//     })
// }

// export const logOut = async (req, res) => {
//   try {
//     await firebase.auth().signOut()
//     res.status(200).json({
//       message: 'logged out!',
//     })
//   } catch (error) {
//     res.status(400).json({
//       message: error.message,
//     })
//   }
// }
