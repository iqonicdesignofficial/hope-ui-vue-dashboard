import _ from 'lodash'
import { getElems } from './dom'

// get style root variables function
export const getRootVars = (property, elem = document.body) => {
  let _newElem = elem
  if (_.isString(_newElem)) {
    _newElem = getElems(_newElem)
  }
  return getComputedStyle(elem).getPropertyValue(property).trim() || null
}

// add or update css root variables function
export const setRootVariables = (variables) => {
  const _root = document.documentElement
  const _variables = variables
  _.forEach(_variables, function (value, key) {
    _root.style.setProperty(key, value)
  })
}

// remove css root variables function
export const removeRootVariables = (variables) => {
  const _root = document.documentElement
  const _variables = variables
  _.forEach(_variables, function (value, key) {
    _root.style.removeProperty(key)
  })
}

export const getVariableColor = () => {
  const prefix = getRootVars('--prefix') || 'bs-'
  return {
    primary: getRootVars(`--${prefix}primary`),
    info: getRootVars(`--${prefix}info`),
    warning: getRootVars(`--${prefix}warning`),
    primary_light: getRootVars(`--${prefix}primary-tint-20`)
  }
}

// setFontFamily function
export const setFontFamily = (type, fontFamily) => {
  // add font into head
  getElems(`[data-font-${type}="google"]`).forEach((elem) => {
    elem.remove()
  })
  if (fontFamily === null) {
    fontFamily = 'Inter'
  }
  if (fontFamily !== null && fontFamily !== 'Inter') {
    const head = document.querySelector('head')
    const link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute(`data-font-${type}`, 'google')
    link.setAttribute('href', `https://fonts.googleapis.com/css?family=${fontFamily}:300;400;500;700&display=swap`)
    head.appendChild(link)
  }
  // change font-family by style root variables
  const prefix = getRootVars('--prefix') || 'bs-'
  const obj = {}
  obj[`--${prefix}${type}-font-family`] = `${fontFamily}, sans-serif`
  setRootVariables(obj)
}
