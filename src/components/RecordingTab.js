
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Voice from 'react-native-voice'
import OptionView from './OptionView';
import ScrollableTextView from './ScrollableTextView';

type Props = {};
export default class RecordingTab extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            voiceToText: null,
            status: "",
        }
    }
    onPressVoiceToTextButton = () => {
        alert('Hello')
    }
    onSpeechStart = (voice) => {
        this.setState({ status: "Listening....." });
    }
    onSpeechEnd = (voice) =>  {
        this.setState({ status: "Processing....." });
    }
    onSpeechError = (voice) =>  {
        this.setState({status: ""});
    }
    onSpeechResults = (voice) =>  {
        //this.setState({ voiceToText: voice.value[0] });
        this.setState({ status: "" })
        this.onChange(voice.value[0])
    }
    onChange = text => {
        alert(text)
    }
    openMic = () => {
        Voice.start("en_US")
        Voice.onSpeechStart = this.onSpeechStart
        Voice.onSpeechEnd = this.onSpeechEnd
        Voice.onSpeechResults = this.onSpeechResults
        Voice.onSpeechError = this.onSpeechError
    }

    render = () => (
        <View style={styles.container}>
            <OptionView/>
            <ScrollableTextView text='Hello Raja Babu'/>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d2e48',
  }
})
