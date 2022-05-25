import _ from 'lodash'
import { addClass, removeClass, setAttr, setContent } from './dom'

export const updateBodyClass = (choices, value) => {
  // remove class from choices
  if (choices.length > 0) {
    choices.forEach((other) => {
      removeClass('body', other)
    })
  }
  if (_.isArray(value)) {
    _.forEach(value, (val) => {
      addClass('body', val)
    })
  } else {
    addClass('body', value)
  }
}

export const updateHtmlAttr = (value) => {
  // set direction
  setAttr('html', value)
}

export const updateTitle = (value) => {
  // set title
  setContent('[data-setting="app_name"]', value)
}

export const updateColor = (themeColor, choices) => {
  _.forEach(choices, (choice) => {
    removeClass('body', choice)
  })
  addClass('body', [themeColor])
}

export const updateDomValueBySetting = (setting, Choices) => {
  updateHtmlAttr({ prop: 'dir', value: setting.theme_scheme_direction })
  updateBodyClass(Choices.SchemeChoice, setting.theme_scheme)
  updateColor(setting.theme_color, Choices.ColorChoice)
  updateTitle(setting.app_name)
}

export const updateStorage = (storage, key, value) => {
  if (typeof value !== typeof undefined && typeof key !== typeof undefined) {
    switch (storage) {
      case 'sessionStorage':
        localStorage.removeItem(key)
        sessionStorage.setItem(key, JSON.stringify(value))
        break

      default:
        sessionStorage.removeItem(key)
        sessionStorage.setItem(key, 'none')
        break
    }
  }
}

export const getStorage = (key) => {
  if (localStorage.getItem(key) === 'none' || sessionStorage.getItem(key) === 'none') return 'none'
  if ((localStorage.getItem(key) !== null && localStorage.getItem(key) !== '') || (sessionStorage.getItem(key) !== null && sessionStorage.getItem(key) !== '')) {
    let value = localStorage.getItem(key)
    if (value === null) value = sessionStorage.getItem(key)
    if (value !== null) {
      try {
        return JSON.parse(value)
      } catch (e) {
        return value
      }
    }
  }
  return null
}
