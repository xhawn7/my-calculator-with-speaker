export const initState = {
  dotClicked: false,
  numClicked: false,
  operationClicked: false,
  start: 0,
  end: null,
  result: 0,
  operation: '+',
  prevStart: null,
  prevEnd: null,
  prevResult: null,
  prevOperation: null,
  operationCache: null,
  equalClicked: false
}

export const items = [
  { value: 'C', type: 'operation' },
  { value: '+/-', type: 'operation' },
  { value: '%', type: 'operation' },
  { value: '/', type: 'operation' },
  { value: '7', type: 'number' },
  { value: '8', type: 'number' },
  { value: '9', type: 'number' },
  { value: '*', type: 'operation' },
  { value: '4', type: 'number' },
  { value: '5', type: 'number' },
  { value: '6', type: 'number' },
  { value: '-', type: 'operation' },
  { value: '1', type: 'number' },
  { value: '2', type: 'number' },
  { value: '3', type: 'number' },
  { value: '+', type: 'operation' },
  { value: '0', type: 'number' },
  { value: '.', type: 'dot' },
  { value: '=', type: 'operation' },
]