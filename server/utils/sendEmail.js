import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const nodemailer = require('nodemailer')

export async function sendEmail({ to, subject, html }) {
  // const nodemailer = useNodeMailer()
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

  // return nodemailer.sendMail({ subject, text: html, to })
}
