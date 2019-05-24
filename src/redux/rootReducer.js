import _ from 'lodash'

import { UPDATE_STATE } from './test/actions'

export const INITIAL_STATE = {
  btc: 0,
  ltc: 0,
  euro: 0,
  eth: 0,
  isAvailable: false
}

function rootReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action
  switch (type) {
    // init
    case 'UPDATE_STATE': {
      return { ...state, ...action.state }
    }
    default:
      break
  }

  return state
}

export default rootReducer
