import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default OptionView = props => (
    <View>
        <View style = {styles.buttonContainer}>
            <TouchableOpacity 
                //onPress={this.openMic}
                style = {styles.buttons}>
                <Text style = {styles.buttonTextStyle}>COPY</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                //onPress={this.openMic} 
                style = {styles.buttons}>
                <Text style = {styles.buttonTextStyle}>SAVE</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                //onPress={this.openMic}
                style = {styles.buttons}>
                <Text style = {styles.buttonTextStyle}>SHARE</Text>
            </TouchableOpacity>
        </View>
    </View>
)

const styles = StyleSheet.create({
    optionsContainer: {
      flex: .3,
      backgroundColor: '#3d2e48',
      justifyContent: 'flex-end'
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
  })