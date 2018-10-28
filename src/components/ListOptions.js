import React, {Component } from 'react'
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'
import {copy, share, remove} from '../actions/globalActions'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

class ListOptions extends Component {

    constructor(props) {
        super(props)
    }

    copy = () => {
        this.props.copy(this.props.voiceConvertedText)
    }

    remove = () => {
        this.props.remove('itemId')
    }

    share = () => {
        this.props.share(this.props.voiceConvertedText)
    }

    render = () => (
        <View>
            <View style = {styles.buttonContainer}>
                <TouchableOpacity 
                    onPress={this.copy}
                    style = {styles.buttons}>
                    <Text style = {styles.buttonTextStyle}>COPY</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={this.remove} 
                    style = {styles.buttons}>
                    <Text style = {styles.buttonTextStyle}>DELETE</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={this.share} 
                    style = {styles.buttons}>
                    <Text style = {styles.buttonTextStyle}>SHARE</Text>
                </TouchableOpacity>
            </View>
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
        copy: copy,
        remove: remove,
        share: share
      },
      dispatch
    )
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListOptions)

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        marginBottom: 5
    },
    buttonTextStyle: {
        color: 'white',
        marginLeft: 20,
        marginRight: 20,
        alignSelf: 'center'
    },
    buttons: {
        alignSelf: 'center',
        borderRadius:15,
        backgroundColor: '#5d5268',
        height: 20
    }
  })