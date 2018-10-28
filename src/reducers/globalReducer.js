import {COPY, SAVE, REMOVE, SHARE, SET_VOICE_CONVERTED_TEXT, 
  SET_SAVED_SPEECH_LIST, SAVE_SPEECH, DELETE_SPEECH} from '../actions/globalActions'
import INITIAL_STATE from '../state/initialState'
import { Clipboard } from 'react-native' 
import Share from 'react-native-share'
import {SHARE_TITLE,SHARE_SUBJECT} from '../Constants'
import DatabaseLayer from '../localdb/DatabaseLayer'
import {NOTES_TABLE} from '../Constants'

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

    case SET_SAVED_SPEECH_LIST:
      return Object.assign({}, state, {
        savedSpeechList: action.payload.reverse()
    })

    case SAVE_SPEECH:
      //GURU JI WILL DO===> TIME FOR SAGA
      // let note = DatabaseLayer.createNoteTemplateModel('gtt')
      // DatabaseLayer.addItemToList(NOTES_TABLE, note)
      //     .then((items) => {
      //        // this.props.setSavedSpeechList(items)
      //     })
      break

    case DELETE_SPEECH:
      //GURU JI WILL DO===> TIME FOR SAGA
      //DatabaseLayer.removeItemFromList(NOTES_TABLE, action.payload)
      break
  }
  return state
}