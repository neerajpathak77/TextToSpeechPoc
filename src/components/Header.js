import {View, StyleSheet, Text, Dimensions} from "react-native"
import React from "react"
const {width} = Dimensions.get('window')

export default Header = props => (
    <View style={styles.container}>
        <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  )

var styles = StyleSheet.create({
    container: {
        width: width,
        height: 50,
        alignItems:'center',
        justifyContent:'center'
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})
  