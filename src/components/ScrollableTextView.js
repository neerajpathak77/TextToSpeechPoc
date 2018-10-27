import React from 'react';
import {Text, View, ScrollView, StyleSheet, Dimensions} from 'react-native';
var {height, width} = Dimensions.get('window');

export default ScrollableTextView = props => (
    <View style = {styles.voiceToTextContainer}>
        <ScrollView style = {styles.textView}>       
            <Text>{props.text}</Text>
        </ScrollView>
    </View>
)

const styles = StyleSheet.create({
    voiceToTextContainer: {
    //   flex: .7,
      height:height * 0.7,
      width:width,
      backgroundColor: 'white',
      borderTopLeftRadius:20,
      borderTopRightRadius:20
    },
    textView: {
      padding: 15,
    }
  })