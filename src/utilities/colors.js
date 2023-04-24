// color mix function
export const colorMix = (color1, color2, weight) => {
  function d2h(d) {
    return d.toString(16)
  } // convert a decimal value to hex
  function h2d(h) {
    return parseInt(h, 16)
  } // convert a hex value to decimal
  weight = typeof weight !== 'undefined' ? weight : 50 // set the weight to 50%, if that argument is omitted
  let color = '#'
  for (let i = 0; i <= 5; i += 2) {
    // loop through each of the 3 hex pairsâ€”red, green, and blue
    const v1 = h2d(color1.substr(i, 2)) // extract the current pairs
    const v2 = h2d(color2.substr(i, 2))
    // combine the current pairs from each source color, according to the specified weight
    let val = d2h(Math.floor(v2 + (v1 - v2) * (weight / 100.0)))

    while (val.length < 2) {
      val = '0' + val
    } // prepend a '0' if val results in a single digit

    color += val // concatenate val to our new color string
  }

  return color // PROFIT!
}

// tint color function
export const tintColor = (color, weight) => {
  weight = typeof weight !== 'undefined' ? weight : 50 // set the weight to 50%, if that argument is omitted
  const color1 = color.substr(1) // strip the '#' character from the beginning
  const color2 = 'FFFFFF'
  return colorMix(color2, color1, weight)
}

// shade color function
export const shadeColor = (color, weight) => {
  weight = typeof weight !== 'undefined' ? weight : 50 // set the weight to 50%, if that argument is omitted
  const color1 = color.substr(1) // strip the '#' character from the beginning
  const color2 = '000000'
  return colorMix(color2, color1, weight)
}

// color hex to rgb function
export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
}

// get color shade & tint Functions
export const getColorShadeTint = (color, value, dark) => {
  const colors = {}
  if (dark) {
    colors[`${color}-shade-80`] = tintColor(value, 80)
    colors[`${color}-shade-60`] = tintColor(value, 60)
    colors[`${color}-shade-40`] = tintColor(value, 40)
    colors[`${color}-shade-20`] = tintColor(value, 20)
    colors[`${color}-shade-10`] = tintColor(value, 10)
    colors[`${color}-tint-10`] = shadeColor(value, 10)
    colors[`${color}-tint-20`] = shadeColor(value, 20)
    colors[`${color}-tint-40`] = shadeColor(value, 40)
    colors[`${color}-tint-60`] = shadeColor(value, 60)
    colors[`${color}-tint-80`] = shadeColor(value, 80)
    colors[`${color}-tint-90`] = shadeColor(value, 90)
    colors[`${color}-rgb`] = hexToRgb(value)
    colors[color] = value
  } else {
    colors[`${color}-shade-80`] = shadeColor(value, 80)
    colors[`${color}-shade-60`] = shadeColor(value, 60)
    colors[`${color}-shade-40`] = shadeColor(value, 40)
    colors[`${color}-shade-20`] = shadeColor(value, 20)
    colors[`${color}-shade-10`] = shadeColor(value, 10)
    colors[`${color}-tint-10`] = tintColor(value, 10)
    colors[`${color}-tint-20`] = tintColor(value, 20)
    colors[`${color}-tint-40`] = tintColor(value, 40)
    colors[`${color}-tint-60`] = tintColor(value, 60)
    colors[`${color}-tint-80`] = tintColor(value, 80)
    colors[`${color}-tint-90`] = tintColor(value, 90)
    colors[`${color}-rgb`] = hexToRgb(value)
    colors[color] = value
  }

  return colors
}
