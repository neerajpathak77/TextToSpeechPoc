import {COPY, SAVE, REMOVE, SHARE, SET_VOICE_CONVERTED_TEXT, SET_SAVED_SEARCH_LIST} from '../actions/globalActions'
import INITIAL_STATE from '../state/initialState'
import { Clipboard } from 'react-native' 
import Share from 'react-native-share'
import {SHARE_TITLE,SHARE_SUBJECT} from '../Constants'
import DatabaseLayer from '../localdb/DatabaseLayer';

export default function globalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case COPY:
      Clipboard.setString(action.payload)
      break

    case SAVE:
      alert(action.payload)
      break

    case REMOVE:
      alert('REMOVE REQ')
      break

    case SHARE:
      let shareOptions = {
        title: SHARE_TITLE,
        message: action.payload,
        subject: SHARE_SUBJECT
      }
      Share.open(shareOptions)
      break
      
    case SET_VOICE_CONVERTED_TEXT:
      return Object.assign({}, state, {
        voiceConvertedText: action.payload
    })

    case SET_SAVED_SEARCH_LIST:
      return Object.assign({}, state, {
        savedSpeechList: action.payload
    })
  }
  return state
}