import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import ScrollableTextView from './ScrollableTextView'
import WaveContainer from './WaveContainer';
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {setVoiceConvertedText} from '../actions/globalActions'
 
class RecordingTab extends Component {

    render = () => (
        <View style={styles.container}>
            <WaveContainer/>
            <ScrollableTextView text= {this.props.voiceConvertedText}/>
        </View>
    )
}

function mapStateToProps(state, props) {
    return {
        voiceConvertedText: state.global.voiceConvertedText
    }
}
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setVoiceConvertedText: setVoiceConvertedText
        },
        dispatch
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecordingTab)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d2e48',
  }
})
