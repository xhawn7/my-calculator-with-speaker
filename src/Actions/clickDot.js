export const clickDot = (state, setContent) => {
  setContent(
    '.'
  )
  return {
    ...state,
    dotClicked: true,
    numClicked: true,
    result: (() => {
      if (!state.dotClicked) {
        return !state.numClicked ? '0.' : state.result + '.'
      }
    })(),
    operationClicked: false,
    prevStart: state.start,
    prevResult: state.result,
    prevOperation: state.operation,
    equalClicked: false
  }
}