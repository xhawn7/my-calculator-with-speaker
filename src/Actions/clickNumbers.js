import { formatInput, speak } from "../utils"

export const clickNumber = (state, payload, setContent) => {
  const res = formatInput(state.numClicked ? state.result + payload : payload)
  setContent(res)
  return {
    ...state,
    numClicked: true,
    end: res,
    result: res,
    operationClicked: false,
    prevStart: state.start,
    prevOperation: state.operation,
    equalClicked: false
  }
}