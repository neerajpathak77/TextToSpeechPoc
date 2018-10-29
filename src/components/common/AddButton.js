import React, {Component} from 'react';
import {Animated, TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
const SIZE = 80

class AddButton extends Component {
     mode = new Animated.Value(0)

    constructor(props) {
        super(props)
        this.state = {
            tabIcon: 'microphone'
        }
    }

    toggleView = () => {
        alert('I am pressed ') 
        let selectedIcon = this.state.tabIcon == 'microphone' ? 'microphone-slash' : 'microphone'
        this.setState({tabIcon:selectedIcon})  
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
                    <Icon name={this.state.tabIcon} size={40} color="white"/>
                </TouchableOpacity>
                </Animated.View>
        </View>
        )
    }
}
export {AddButton}