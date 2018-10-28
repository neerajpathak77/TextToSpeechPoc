import {
    View,
    StyleSheet,
    Dimensions,
    Text
} from "react-native";
import React from "react";
import ListOptions from "./ListOptions";
const {width} = Dimensions.get('window');

    export default SpeechCard = props => {
        const renderCell = item => (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text>{item.note}</Text>
                </View>
            <View style={styles.bottomContainer}>
                <ListOptions item={item}/>
            </View>
                <View style={styles.separator}/>
            </View>
    ) 
 
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
  