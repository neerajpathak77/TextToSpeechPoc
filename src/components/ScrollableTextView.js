import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';

export default ScrollableTextView = props => (
    <View style = {styles.voiceToTextContainer}>
        <ScrollView style = {styles.textView}>       
            <Text>{props.text}</Text>
        </ScrollView>
    </View>
)

const styles = StyleSheet.create({
    voiceToTextContainer: {
      flex: .7,
      backgroundColor: 'white',
      borderTopLeftRadius:20,
      borderTopRightRadius:20
    },
    textView: {
      padding: 15,
    }
  })