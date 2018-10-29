import React, { Component } from 'react';
import { BottomTabBar } from "react-navigation-tabs";
import { Animated, TouchableOpacity, Dimensions, Image, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Voice from 'react-native-voice'
const SIZE = 80
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {setVoiceConvertedText} from '../../actions/globalActions'

class CustomTabBarBottom extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
        tabIcon: 'microphone-slash'
    }
  }

//Mic work
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
  
  let selectedIcon = (this.state.tabIcon != 'microphone') ? 'microphone' : 'microphone-slash'
  this.setState({tabIcon:selectedIcon})
}
openMic = () => {
  Voice.start("en_US")
  Voice.onSpeechStart = this.onSpeechStart
  Voice.onSpeechEnd = this.onSpeechEnd
  Voice.onSpeechResults = this.onSpeechResults
  Voice.onSpeechError = this.onSpeechError
}


renderChallengeButton = () => {

return(
  <TouchableOpacity style={{position:'absolute',zIndex:999,left:((Dimensions.get('window').width/2)-30),top:4}}  onPress={ () => this.onPressChallengeTab()}>
      {this.renderButtonIcon()}
   </TouchableOpacity>
  )
}

renderButtonIcon = () => (
    <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE / 2,
        backgroundColor: 'red',
        bottom:30,
    }}>
        <Icon name= {this.state.tabIcon} size={70} color="white"/>
    </View>
)

onPressChallengeTab = () => {
  this.props.navigation.navigate('RecordingTab')
  const currentIndex = this.props.navigation.state.index
  let selectedIcon = (this.state.tabIcon != 'microphone') ? 'microphone' : 'microphone-slash'
  this.setState({tabIcon:selectedIcon}, ()=> {
      (this.state.tabIcon == 'microphone') ? this.openMic() : Voice.stop()
  }) 
}

  render() {
    return (
      <View  style={styles.container}>
      <BottomTabBar {...this.props} />
      {this.renderChallengeButton()}
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
)(CustomTabBarBottom)




const styles = StyleSheet.create({
  container:{
    height:40,
    width:'100%',
    position:'absolute',
    bottom:0,
    justifyContent:'center',
    backgroundColor:'#d5d5d5'
  }
})