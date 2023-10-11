// export default useIcon

import { computed, ref } from 'vue'

export const useIcon = (options = {}) => {
  const defaultOptions = {
    size: 64,
    unit: 'px',
    color: '#000000'
  }

  options = ref(Object.assign(defaultOptions, options))

  const style = ref({})

  if (options.value.size) {
    style.value.width = options.value.size + options.value.unit
    style.value.height = options.value.size + options.value.unit
  }

  if (options.value.color) {
    style.value.color = options.value.color
  }

  const wantedStyles = (wanted = []) => {
    let t = {}

    console.log(style.value)

    wanted.forEach((prop) => {
      if (typeof prop === 'string') {
        t[prop] = style.value[prop]
      } else if (typeof prop === 'object') {
        t[prop.as ? prop.as : prop.attr] = style.value[prop.attr]
      }
    })

    return t
  }

  return {
    options,
    style,
    wantedStyles
  }
}