import React, {Component } from 'react'
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'
import {copy, share, save, setSavedSpeechList} from '../actions/globalActions'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import DatabaseLayer from '../localdb/DatabaseLayer'
import {NOTES_TABLE} from '../Constants'

class OptionView extends Component {

    copy = () => {
        this.props.copy(this.props.voiceConvertedText)
    }

    save = () => {
        let note = DatabaseLayer.createNoteTemplateModel(this.props.voiceConvertedText)
        DatabaseLayer.addItemToList(NOTES_TABLE, note)
            .then((items) => {
                this.props.setSavedSpeechList(items)
            })
    }

    share = () => {
        this.props.share(this.props.voiceConvertedText)
    }

    render = () => (
        <View>
            <View style = {styles.buttonContainer}>
                <TouchableOpacity 
                    onPress={this.copy}
                    style = {styles.buttons}>
                    <Text style = {styles.buttonTextStyle}>COPY</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={this.save} 
                    style = {styles.buttons}>
                    <Text style = {styles.buttonTextStyle}>SAVE</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={this.share} 
                    style = {styles.buttons}>
                    <Text style = {styles.buttonTextStyle}>SHARE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function mapStateToProps(state, props) {
    return {
        voiceConvertedText: state.global.voiceConvertedText
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        copy: copy,
        save:save,
        share: share,
        setSavedSpeechList: setSavedSpeechList
      },
      dispatch
    )
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(OptionView)

const styles = StyleSheet.create({
    optionsContainer: {
      flex: .3,
      backgroundColor: '#3d2e48',
      justifyContent: 'flex-end'
    },
    buttonContainer: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 50,
        marginRight: 50,
    },
    buttonTextStyle: {
        color: 'white',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        marginBottom: 5,
    },
    buttons: {
        alignSelf: 'center',
        borderRadius:15,
        backgroundColor: '#5d5268',
    }
  })