import React, { Component } from 'react';
import { BottomTabBar } from "react-navigation-tabs";
import { Animated, TouchableOpacity, Dimensions, Image, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const SIZE = 80

export class CustomTabBarBottom extends Component {
 

  constructor(props) {
    super(props)
    this.state = {
        tabIcon: 'microphone'
    }
  }




renderChallengeButton = () => {
  const currentIndex = this.props.navigation.state.index

return(
  <TouchableOpacity style={{position:'absolute',zIndex:999,left:((Dimensions.get('window').width/2)-30),top:4}}  onPress={ () => this.onPressChallengeTab()}>
{currentIndex==1 ? this.renderButtonIcon() : this.renderButtonIcon()}
   </TouchableOpacity>
  )
}

renderButtonIcon = () => {

  return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: SIZE,
            height: SIZE,
            borderRadius: SIZE / 2,
            backgroundColor: 'red',
        }}>
        <Icon name= {this.state.tabIcon} size={70} color="white"/>
</View>
)
}

onPressChallengeTab = () => {

  //alert('I am DON DON DON')

  this.props.navigation.navigate('RecordingTab')


  let selectedIcon = (this.state.tabIcon != 'microphone') ? 'microphone' : 'microphone-slash'
  this.setState({tabIcon:selectedIcon}, ()=> {
      //(this.state.tabIcon == 'microphone') ? this.openMic() : Voice.stop()
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

const styles = StyleSheet.create({
  container:{
    height:50,
    width:'100%',
    position:'absolute',
    bottom:0,
    justifyContent:'center',
    backgroundColor:'green'
  }
})