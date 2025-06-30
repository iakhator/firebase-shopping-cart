import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const nodemailer = require('nodemailer')

export async function sendEmail({ to, subject, text, html }) {
  // const transporter = nodemailer.createTransport({
  //   host: 'maildev',
  //   port: 1025,
  //   secure: false,
  // })
  // return transporter.sendMail({
  //   from: 'Shop <no-reply@example.com>',
  //   to,
  //   subject,
  //   html,
  // })
  const transporter = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}
