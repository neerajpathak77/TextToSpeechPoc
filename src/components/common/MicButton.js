import React, {Component} from 'react';
import {Animated, TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Voice from 'react-native-voice'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {setVoiceConvertedText} from '../../actions/globalActions'
const SIZE = 80

class MicButton extends Component {
     mode = new Animated.Value(0)

    constructor(props) {
        super(props)
        this.state = {
            tabIcon: 'microphone'
        }
    }

    //Mic work
    onPressVoiceToTextButton = () => {
        alert('Hello')

        this.openMic()

    }
    onSpeechStart = (voice) => {
        this.props.setVoiceConvertedText('Listening...')
    }
    onSpeechEnd = (voice) =>  {
        this.props.setVoiceConvertedText('Processing...')

    }
    onSpeechError = (voice) =>  {
        this.props.setVoiceConvertedText('')
    }
    onSpeechResults = (voice) =>  {
        this.props.setVoiceConvertedText(voice.value[0])
    }
    openMic = () => {
        Voice.start("en_US")
        Voice.onSpeechStart = this.onSpeechStart
        Voice.onSpeechEnd = this.onSpeechEnd
        Voice.onSpeechResults = this.onSpeechResults
        Voice.onSpeechError = this.onSpeechError
    }

    // componentDidMount() {
    //     this.openMic()
    // }
    //////////





    toggleView = () => {
        //this.props.callback()

        // this.navigate('Recording')

        this.props.navigation.navigate('Recording')


        let selectedIcon = (this.state.tabIcon != 'microphone') ? 'microphone' : 'microphone-slash'
        this.setState({tabIcon:selectedIcon}, ()=> {
            (this.state.tabIcon == 'microphone') ? this.openMic() : Voice.stop()
        })  
    }


    getIcon = () => {
        return (this.state.tabIcon != 'microphone') ? 'microphone' : 'microphone-slash' 
    }



    render() {
        const rotation = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg']
        })
        return (
            <View style={{
                position: 'absolute',
                alignItems: 'center'
            }}>
                <Animated.View style={{
                    transform: [{rotate: rotation}],
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: SIZE,
                    height: SIZE,
                    borderRadius: SIZE / 2,
                    backgroundColor: 'red',
                }}>
                <TouchableOpacity
                    onPress={this.toggleView}
                    activeOpacity={1}>
                    <Icon name='microphone' size={40} color="white"/>
                </TouchableOpacity>
                </Animated.View>
        </View>
        )
    }
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
)(MicButton)