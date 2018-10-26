
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Voice from 'react-native-voice'

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
    render() {
        return (
        <View style={styles.container}>


            {this.renderOptionsView()}
            {this.renderVoiceToTextView()}

            {/* <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
            <TouchableOpacity onPress={this.openMic}>
                <Text>Tap to speak</Text>
            </TouchableOpacity> */}
        </View>
        );
    }





    

    renderOptionsView = () => (
        <View style = {styles.optionsContainer}>

            <View style = {styles.buttonContainer}>
            <TouchableOpacity 
                onPress={this.openMic}
                style = {styles.buttons}>
                <Text style = {styles.buttonTextStyle}>COPY</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={this.openMic} 
                style = {styles.buttons}>
                <Text style = {styles.buttonTextStyle}>SAVE</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={this.openMic}
                style = {styles.buttons}>
                <Text style = {styles.buttonTextStyle}>SHARE</Text>
            </TouchableOpacity>


            </View>

        </View>
    )

    renderVoiceToTextView = () => (
        <View style = {styles.voiceToTextContainer}>
            <ScrollView style = {styles.textView}>       

                <Text>
                    'BUILD SUCCESS FULBUILD '
                </Text>      

            </ScrollView>
        </View>
    )
//this.state.text
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d2e48',
  },
  optionsContainer: {
    flex: .3,
    backgroundColor: '#3d2e48',
    justifyContent: 'flex-end'
  },
  voiceToTextContainer: {
    flex: .7,
    backgroundColor: 'white',
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  },
  textView: {
    padding: 15,
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
});
