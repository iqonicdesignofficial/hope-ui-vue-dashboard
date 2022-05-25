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
