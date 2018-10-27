import React from 'react'
import {View, StyleSheet, Dimensions} from 'react-native'
import OptionView from './OptionView'
import WaveView from 'react-native-wave-view'
var {height, width} = Dimensions.get('window')

export default WaveContainer = props => (
    <View   style={styles.animationContainer}>
        <WaveView
            height={(height * 0.3 - 120)}
            width={width}
            waveColor={'white'}
            waveSpeed={'slow'}
            waveAmplitude={30}
            noOfWaves={100}
            wavePosition={'both'}
        />
        <OptionView/>
    </View>
)

const styles = StyleSheet.create({
    animationContainer: {
      //flex: .3,
      height:height * 0.3,
      width:width,
      backgroundColor: '#3d2e48',
      justifyContent: 'flex-end'
    }
})