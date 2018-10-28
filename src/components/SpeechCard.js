import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    TouchableOpacity
  } from "react-native";
import React from "react";
import ListOptions from "./ListOptions";
const { height, width } = Dimensions.get('window');

  export default SpeechCard = props => {
    const renderCell = item => {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text>This is simple textThis is simple textThis is simple textThis </Text>
                </View>
            <View style={styles.bottomContainer}>
                <ListOptions/>
            </View>
                <View style={styles.separator}/>
            </View>
          ) 
      }
 
  return (
    renderCell(props.item)
  )
}
  
  var styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textContainer: {
        flex: 1,
        backgroundColor:'#e7e7e7',
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    bottomContainer: {
        height: 30,
        width: width-20,
        backgroundColor: '#3d2e48',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    separator : {
        height:5,
        backgroundColor: 'transparent'
    }
  });
  