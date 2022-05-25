import _ from 'lodash'

// get element by selector
export const getElem = (selector) => {
  return document.querySelector(selector)
}

// get element by selector all
export const getElems = (selector) => {
  return document.querySelectorAll(selector)
}

// class add function
export const addClass = (elem, ...classNames) => {
  let _newElem = elem
  if (_.isString(_newElem)) {
    _newElem = getElems(elem)
  }
  if (_newElem.length !== undefined) {
    _.forEach(_newElem, function (elem) {
      _.forEach(classNames, function (className) {
        elem.classList.add(className)
      })
    })
  } else {
    _.forEach(classNames, function (className) {
      _newElem.classList.add(className)
    })
  }
}

// class remove function
export const removeClass = (elem, ...className) => {
  let _newElem = elem
  if (_.isString(_newElem)) {
    _newElem = getElems(elem)
  }
  if (_newElem.length !== undefined) {
    _.forEach(_newElem, function (elem) {
      _.forEach(className, function (className) {
        elem.classList.remove(className)
      })
    })
  } else {
    _.forEach(className, function (className) {
      _newElem.classList.remove(className)
    })
  }
}

// get attribute value
export const getAttr = function (elem, attr) {
  return elem.getAttribute(attr)
}

// set attribute value
export const setAttr = function (elems, object) {
  let _newElem = elems
  if (_.isString(_newElem)) {
    _newElem = getElems(elems)
  }
  _.forEach(_newElem, function (elem) {
    elem.setAttribute(object.prop, object.value)
  })
}

// remove attribute value
export const removeAttr = function (elem, attr) {
  elem.removeAttribute(attr)
}

// Update html content
export const setContent = function (selector, content) {
  let _newElem = selector
  if (_.isString(_newElem)) {
    _newElem = getElems(selector)
  }
  if (typeof _newElem.length !== typeof undefined) {
    _.forEach(_newElem, function (elem) {
      const leftJoin = elem.getAttribute('data-leftJoin') !== null ? elem.getAttribute('data-leftJoin') : ''
      const rightJoin = elem.getAttribute('data-rightJoin') !== null ? elem.getAttribute('data-rightJoin') : ''
      elem.innerHTML = leftJoin + content + rightJoin
    })
  }
}

export const getQueryString = (name) => {
  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]')
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
  const results = regex.exec(location.search)
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
}

export const copyToClipboard = (value) => {
  const elem = document.createElement('textarea')
  document.querySelector('body').appendChild(elem)
  if (typeof value === 'object') {
    elem.value = JSON.stringify(value, null, 4)
  } else {
    elem.value = value
  }
  elem.select()
  document.execCommand('copy')
  elem.remove()
}
