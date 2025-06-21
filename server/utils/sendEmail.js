import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const nodemailer = require('nodemailer')

export async function sendEmail({ to, subject, html }) {
  const transporter = nodemailer.createTransport({
    host: 'maildev',
    port: 1025,
    secure: false,
  })
  return transporter.sendMail({
    from: 'Shop <no-reply@example.com>',
    to,
    subject,
    html,
  })
}

// MailTrap
// const transporter = nodemailer.createTransport({
//   host: 'live.smtp.mailtrap.io',
//   port: 587,
//   secure: false,
//   auth: {
//     user: 'api',
//     pass: '8d74093b95995c3ff0bd11d91d3e0224',
//   },
// })
// return transporter.sendMail({
//   from: 'Shop <ringcart@demomailtrap.co>',
//   to,
//   subject,
//   text,
//   html,
// })
