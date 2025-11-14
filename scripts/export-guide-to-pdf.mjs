import fs from 'node:fs/promises'
import path from 'node:path'
import puppeteer from 'puppeteer'

const root = process.cwd()
const input = path.join(root, 'docs', 'contact-form-email-guide.html')
const outputDir = path.join(root, 'docs')
const output = path.join(outputDir, 'contact-form-email-guide.pdf')

async function main() {
  const html = await fs.readFile(input, 'utf8')
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  const page = await browser.newPage()
  await page.setContent(html, { waitUntil: 'networkidle0' })
  await page.emulateMediaType('screen')
  await fs.mkdir(outputDir, { recursive: true })
  await page.pdf({
    path: output,
    format: 'A4',
    printBackground: true,
    margin: { top: '16mm', right: '14mm', bottom: '16mm', left: '14mm' }
  })
  await browser.close()
  console.log('PDF generated at:', output)
}

main().catch((err) => {
  console.error('Failed to export PDF:', err)
  process.exit(1)
})


