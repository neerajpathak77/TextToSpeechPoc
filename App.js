/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {setSavedSpeechList} from './src/actions/globalActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DatabaseLayer from './src/localdb/DatabaseLayer'
import {NOTES_TABLE} from './src/Constants'
import { HomeContainer } from './src/navigation/HomeContainer';


type Props = {}
class App extends Component<Props> {

  componentWillMount() {
    //Get data from DB and pass to redux store
    DatabaseLayer.getListFromStorage(NOTES_TABLE)
      .then(data=>{
        this.props.setSavedSpeechList(data)
    })
  //End 
  }
  render = () => (
      <HomeContainer/>
  )
}


function mapStateToProps(state, props) {
  return {
      savedSpeechList: state.global.savedSpeechList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setSavedSpeechList: setSavedSpeechList
  },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)