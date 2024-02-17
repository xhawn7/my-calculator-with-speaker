import { initState } from "./Constants/constants"

export const speak = (content) => {
  const msg = new SpeechSynthesisUtterance()
  // let voices = window.speechSynthesis.getVoices()
  // let lang = 'en-US'
  // let voice = voices.find((v) => v.lang === lang)
  // msg.voice = voice
  let voice
  switch (content) {
    case '+':
      voice = '加'
      break
    case '-':
      voice = '减'
      break
    case '*':
      voice = '乘以'
      break
    case '/':
      voice = '除以'
      break
    case '=':
      voice = '等于'
      break
    case '.':
      voice = '点'
      break
    default:
      voice = content
      break
  }
  msg.text = voice
  window.speechSynthesis.speak(msg)
}

export const setColor = (index) => {
  if ([0, 1, 2].includes(index)) {
    return 'bg-gray-light text-black'
  }
  else if ([3, 7, 11, 15, 18].includes(index)) {
    return `bg-colorWays-orange text-white`
  }
  return 'bg-gray-dark'
}

// 限制输入位数
export const formatInput = (result) => {
  const isInteger = Number.isInteger(Number(result))// 是否是小数
  const digitNums = isInteger ? 9 : 10
  return result.slice(0, digitNums)
}

// 限制显示倍数
export const formatOutput = (result) => {
  const numberResult = Number(result)// 转成number类型
  const isInteger = Number.isInteger(numberResult)// 是否是小数
  const decimalCount = isInteger ? 0 : result.length - 1 - result.indexOf('.') // 小数位数
  const digitNums = isInteger ? 9 : 10
  const isSafeNums = numberResult > Number.MIN_SAFE_INTEGER && numberResult < Number.MAX_SAFE_INTEGER
  if (!isSafeNums) {
    return 'Error'
  }
  if (numberResult > 1000000000) {
    // return numberResult.toExponential()
    result.slice(0, digitNums)
  }
  // toLocaleString默认只保留3位小数
  return numberResult.toLocaleString(undefined, {
    minimumFractionDigits: isInteger ? 0 : decimalCount
  })

}

// 小数相加
function getDecimalLength(num) {
  decimal = String(num).split('.')[1]
  return decimal ? decimal.length : 0
}
export function add_decimal(...args) {
  const base = args.reduce((pre, cur) => {
    return Math.pow(10, Math.max(getDecimalLength(pre), getDecimalLength(cur)))
  }, 0)
  let res = 0
  args.forEach(item => {
    res += item * base
  })
  return res / base
}
