import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
 
export default class Settings extends Component{

    render = () => (
        <View style={styles.container}>
            <Text style={styles.textStyle}> We are working hard to make this functional :-)</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d2e48',
    justifyContent:'center'
  },
  textStyle: {
    color: 'white',
    alignSelf: 'center'
  }
})
