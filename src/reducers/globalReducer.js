import {COPY} from "../actions/globalActions"
import INITIAL_STATE from "../state/initialState"
import { Clipboard } from 'react-native' 
export default function globalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case COPY:
      Clipboard.setString(action.payload);
      // return Object.assign({}, state, {
      //   clipboardCopiedText: action.payload
      // })
  }
  return state
}
  