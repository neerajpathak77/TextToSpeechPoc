
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Voice from 'react-native-voice'

type Props = {};
export default class VoiceToText extends Component<Props> {

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
    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
            <TouchableOpacity onPress={this.openMic}>
                <Text>Tap to speak</Text>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
