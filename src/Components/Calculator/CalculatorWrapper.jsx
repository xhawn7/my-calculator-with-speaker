import { useEffect, useReducer, useRef, useState } from 'react'
import { speak } from '../../utils.js'
import { initState } from '../../Constants/constants.js'
import { clickNumber } from '../../Actions/clickNumbers.js'
import { clickDot } from '../../Actions/clickDot.js'
import { clickOperation } from '../../Actions/clickOperation.js'
import Result from './Result.jsx'
import Items from './Items.jsx'

const CalculatorWrapper = () => {
  const [content, setContent] = useState(null)
  useEffect(() => {
    speak(content)
    if (state.equalClicked) {
      speak(state.result)
    }
  }, [content])

  const reducer = (state = initState, action) => {
    switch (action.type) {
      case 'number':
        return clickNumber(state, action.payload, setContent)
      case 'dot':
        return clickDot(state, setContent)
      case 'operation':
        return clickOperation(state, action.payload, setContent)
      default:
        return initState
    }
  }

  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <div className="mx-auto max-w-md text-white font-thin text-4xl">
      <div className="flex flex-col h-screen">
        <Result result={state.result} />
        <Items dispatch={dispatch} />
      </div>
    </div>
  )
}

export default CalculatorWrapper
