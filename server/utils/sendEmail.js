import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const nodemailer = require('nodemailer')

const isProd = import.meta.dev === false

export async function sendEmail({ to, subject, text, html }) {
  try {
    // const transporter = isProd
    //   ? nodemailer.createTransport({
    //       host: 'smtp.mailgun.org',
    //       port: 587,
    //       secure: false,
    //       auth: {
    //         user: process.env.SMTP_USER,
    //         pass: process.env.SMTP_PASS,
    //       },
    //     })
      // : nodemailer.createTransport({
      //     host: 'localhost', // docker 'maildev',
      //     port: 1025,
      //     secure: false,
      //   })

    const transporter = nodemailer.createTransport({
          host: 'smtp.mailgun.org',
          port: 587,
          secure: false,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        })

    const info = await transporter.sendMail({
      from: 'Shop <no-reply@ringcart.app>',
      to,
      subject,
      text,
      html,
    })

    return {
      success: true,
      messageId: info.messageId,
    }
  } catch (error) {
    console.error('[sendEmail error]', error)

    return {
      success: false,
      error: 'Failed to send email',
    }
  }
}