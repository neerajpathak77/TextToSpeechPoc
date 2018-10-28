import React, {Component } from 'react'
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'
import {copy, share, remove, setSavedSpeechList} from '../actions/globalActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DatabaseLayer from '../localdb/DatabaseLayer'
import {NOTES_TABLE} from '../Constants'

class ListOptions extends Component {

    copy = () => {
        this.props.copy(this.props.voiceConvertedText)
    }

    remove = () => {
        DatabaseLayer.removeItemFromList(NOTES_TABLE, this.props.item)
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
                    onPress={this.remove} 
                    style = {styles.buttons}>
                    <Text style = {styles.buttonTextStyle}>DELETE</Text>
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
        remove: remove,
        share: share,
        setSavedSpeechList: setSavedSpeechList
      },
      dispatch
    )
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListOptions)

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        marginBottom: 5
    },
    buttonTextStyle: {
        color: 'white',
        marginLeft: 20,
        marginRight: 20,
        alignSelf: 'center'
    },
    buttons: {
        alignSelf: 'center',
        borderRadius:15,
        backgroundColor: '#5d5268',
        height: 20
    }
  })