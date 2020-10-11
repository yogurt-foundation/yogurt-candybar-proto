import { colors } from '../configs.js'
import { normal, hover, groupHover, focus, groupFocus, active } from '../variants.js'

import { exportCSS } from '../core/exportCSS.js'
import { setRule } from '../core/setRule.js'

export const moduleFile = './build/modules/utilities/typography/textColor.scss'

export function textColor() {

  const set = {
    selectorName: 'color',
    cssProperty: 'color',
    cssConfigs: colors,
    variantClasses: [normal, hover, groupHover, focus, groupFocus, active]
  }

  setRule(set.selectorName, set.cssProperty, set.cssConfigs, set.variantClasses)

}
