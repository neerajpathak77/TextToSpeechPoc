
import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions} from 'react-native'
import Voice from 'react-native-voice'
import ScrollableTextView from './ScrollableTextView'
import WaveContainer from './WaveContainer';
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {setVoiceConvertedText} from '../actions/globalActions'
import DatabaseLayer from '../localdb/DatabaseLayer';
 
class RecordingTab extends Component{

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    onPressVoiceToTextButton = () => {
        alert('Hello')
    }
    onSpeechStart = (voice) => {
        this.props.setVoiceConvertedText('Listening...')
    }
    onSpeechEnd = (voice) =>  {
        this.props.setVoiceConvertedText('Processing...')

    }
    onSpeechError = (voice) =>  {
        this.props.setVoiceConvertedText('jaaaazzzz')
    }
    onSpeechResults = (voice) =>  {
        //this.setState({ voiceToText: voice.value[0] });
        //this.setState({ convertedTextFromVoice: '' })
        this.onChange(voice.value[0])
    }
    onChange = text => {
        alert(text)

        //this.setState({convertedTextFromVoice:text})
        this.props.setVoiceConvertedText(text)
    }
    openMic = () => {
        Voice.start("en_US")
        Voice.onSpeechStart = this.onSpeechStart
        Voice.onSpeechEnd = this.onSpeechEnd
        Voice.onSpeechResults = this.onSpeechResults
        Voice.onSpeechError = this.onSpeechError
    }

    componentDidMount() {
        this.openMic()


        DatabaseLayer .getListFromStorage('KEY')
        .then(data=>console.log('DatabaseLayer',data))

        
        let note = DatabaseLayer.createNoteTemplateModel('neeraj ')

        console.log('DatabaseLayer.addItemToList', DatabaseLayer.addItemToList('KEY'))
        DatabaseLayer.addItemToList('KEY', note)
        .then(data=>console.log('DatabaseLayer',data))
        

    }

    render = () => (
        <View style={styles.container}>
            <WaveContainer/>
            <ScrollableTextView text= {this.props.voiceConvertedText}/>
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
        setVoiceConvertedText: setVoiceConvertedText
        },
        dispatch
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecordingTab)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d2e48',
  }
})
