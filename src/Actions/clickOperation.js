export const clickOperation = (state, payload, setContent) => {
  setContent(
    payload
  )

  return {
    ...state,
    dotClicked: false,
    numClicked: false,
    operationClicked: true,
    prevEnd: state.end,
    ...handleTheRestResult(state, payload)
  }
}

export const handleTheRestResult = (state, type) => {
  switch (type) {
    case '+':
    case '-':
      return {
        operation: type,
        result: calculate(state, type),
        start: calculate(state, type),
        prevResult: null,
        operationCache: null,
        equalClicked: false
      }
    case '*':
    case '/':
      const isPriorityMultiplyOrDivide = state.operation === '*' || state.operation === '/' || state.equalClicked
      if (isPriorityMultiplyOrDivide) {
        return {
          operation: type,
          result: calculate(state, type),
          start: calculate(state, type),
          prevResult: state.prevResult,
          operationCache: state.operationCache,
          equalClicked: false
        }
      } else {
        return {
          operation: type,
          result: state.end,
          start: state.end,
          prevResult: state.prevStart,
          operationCache: state.prevOperation,
          equalClicked: false
        }
      }
    case '=':
      return {
        operation: '+',
        result: calculate(state, type),
        end: calculate(state, type),
        start: 0,
        prevResult: null,
        operationCache: null,
        prevEnd: null,
        operationClicked: false,
        prevStart: state.start,
        prevOperation: state.operation,
        equalClicked: true
      }
    default:
      return {}
  }
}

export const calculate = (state, type) => {
  const isMixedOperation =
    state.operationCache && (type === '=' || type === '+' || type === '-')
  // 如果重复点击，这种情况会以最后的运算符为准，比如1+*2，相当于1*2
  if (state.operationClicked) {
    return eval(String(state.prevStart + state.prevOperation + state.prevEnd))
  }
  // 是否是混合运算，即先有加减再有乘除，这个时候结果会先显示乘除，直到下次点击+-=才会算出最后结果，比如1+2*3
  if (isMixedOperation) {
    return eval(
      String(
        state.prevResult +
        state.operationCache +
        state.start +
        state.operation +
        state.end
      )
    )
  }
  const res = eval(String(state.start + state.operation + state.end))
  if (!Number.isInteger(res)) {
    return res.toFixed(2)
  }
  return res
}


