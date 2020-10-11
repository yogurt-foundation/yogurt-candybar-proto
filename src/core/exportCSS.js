import fs from 'fs'

export function exportCSS(moduleFile, utilityContent) {

  fs.writeFile(moduleFile, '', () => {}) // empty file

  fs.appendFile(moduleFile, utilityContent, (err) => {
    if (err) {
      console.log(err)
    }
  })

}