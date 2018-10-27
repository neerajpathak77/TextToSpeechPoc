import {COPY, SET_VOICE_CONVERTED_TEXT} from "../actions/globalActions"
import INITIAL_STATE from "../state/initialState"
import { Clipboard } from 'react-native' 
export default function globalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case COPY:
      Clipboard.setString(action.payload)
    case SET_VOICE_CONVERTED_TEXT:
      return Object.assign({}, state, {
        voiceConvertedText: action.payload
      })
  }
  return state
}