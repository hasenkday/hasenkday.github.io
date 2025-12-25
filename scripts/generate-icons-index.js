import fs from 'fs'
import path from 'path'

const iconsDir = path.resolve('src/components/icons')

const files = fs
  .readdirSync(iconsDir)
  .filter((file) => file.endsWith('.tsx') && file !== 'index.ts')

const content = files
  .map((file) => {
    const baseName = path.basename(file, '.tsx')
    const exportName = `${baseName}Icon`

    return `export { default as ${exportName} } from './${baseName}'`
  })
  .join('\n')

fs.writeFileSync(path.join(iconsDir, 'index.ts'), `${content}\n`)

console.log('✔ icons index generated')
