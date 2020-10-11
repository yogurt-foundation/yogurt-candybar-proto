import { exportCSS } from '../core/exportCSS.js'
import { moduleFile } from '../modules/textColor.js'

export function setRule(selectorName, cssProperty, cssConfigs, variantClasses) {

  function utilities(selectorName, cssProperty, cssConfigs, variantClasses) {
    for (let c of cssConfigs) {
      for (let v of variantClasses) {
        const utilities = `${v.prefix}${selectorName}-${c.modifier}${v.pseudo} { ${cssProperty}: ${c.value}; }`
        exportCSS(moduleFile, utilities)
        console.log(utilities)
      }
    }
  }

  for (let multipleVariants of variantClasses) {
    utilities(selectorName, cssProperty, cssConfigs, multipleVariants)
  }

}