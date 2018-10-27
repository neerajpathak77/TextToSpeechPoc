
import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions} from 'react-native'
import Voice from 'react-native-voice'
import ScrollableTextView from './ScrollableTextView'
import WaveContainer from './WaveContainer';
var {height, width} = Dimensions.get('window');
type Props = {};
export default class RecordingTab extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            convertedTextFromVoice: '',
            status: "",
        }
    }
    onPressVoiceToTextButton = () => {
        alert('Hello')
    }
    onSpeechStart = (voice) => {
        this.setState({ convertedTextFromVoice: 'Listening...' });
    }
    onSpeechEnd = (voice) =>  {
        this.setState({ convertedTextFromVoice: 'Processing...' });
    }
    onSpeechError = (voice) =>  {
        this.setState({convertedTextFromVoice: ''});
    }
    onSpeechResults = (voice) =>  {
        //this.setState({ voiceToText: voice.value[0] });
        //this.setState({ convertedTextFromVoice: '' })
        this.onChange(voice.value[0])
    }
    onChange = text => {
        alert(text)

        this.setState({convertedTextFromVoice:text})
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
    }

    render = () => (
        <View style={styles.container}>
            <WaveContainer/>
            <ScrollableTextView text= {this.state.convertedTextFromVoice}/>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d2e48',
  }
})
