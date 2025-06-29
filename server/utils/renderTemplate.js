import fs from 'fs/promises'
import path from 'path'
import Handlebars from 'handlebars'

export async function renderTemplate(name, data) {
  const basePath = './server/emails'

  const [htmlContent, txtContent] = await Promise.all([
    fs.readFile(path.resolve(`${basePath}/${name}.html`), 'utf-8'),
    fs.readFile(path.resolve(`${basePath}/${name}.txt`), 'utf-8'),
  ])

  const compileHtml = Handlebars.compile(htmlContent)
  const compileText = Handlebars.compile(txtContent)

  return {
    html: compileHtml(data),
    text: compileText(data),
  }
}
