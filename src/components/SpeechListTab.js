import React, { Component } from 'react';
import {View, Text, Dimensions, FlatList, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import SpeechCard from './SpeechCard';
import Header from './Header';
const { height, width } = Dimensions.get("window");

  class SpeechListTab extends Component {

  render = () => (
      <View>
        <Header title={'SAVED SPEECH'}/>
        {this.renderSpeechList()}
      </View>
  )

  renderSpeechList = () => (
    this.props.savedSpeechList.length > 0 
      ? 
      <FlatList
        style={styles.listStyle}
        data={this.props.savedSpeechList}
        renderItem={({item, index}) => (
          <View>
            <SpeechCard item={item}/>
          </View>
        )}
        keyExtractor={item => item.key}
      />
      :
      <View style={styles.blankListContainer}>
          <Text style={styles.textStyle}> No speech saved. Please save first.</Text>
      </View>
      
  )
}

function mapStateToProps(state, props) {
  return {
    savedSpeechList: state.global.savedSpeechList
  }
}
export default connect(mapStateToProps, null)(SpeechListTab);

const styles = StyleSheet.create({
    itemContainer: {
      width: width,
      height: height,
      marginTop:3,
      marginRight:0,
      marginBottom:0,
      marginLeft:3,
    },
    itemContainerLast: {
      width: width,
      height: height,
      marginTop:3,
      marginRight:0,
      marginBottom:0,
      marginLeft:3,
    },
    itemContainerFirst:{
      backgroundColor: '#FFF',
      width: width,
      height: height,
      marginTop:3,
      marginRight:0,
      marginBottom:0,
      marginLeft:0,
    },
    item: {
      flex: 1,
      margin: 0,
      backgroundColor: '#FFF',
    },
    listStyle: {
      marginLeft: 10,
      marginRight: 10,
    },
    blankListContainer: {
      width: width,
      height: height-180,
      justifyContent:'center'
    },
    textStyle: {
      color: '#3d2e48',
      alignSelf: 'center'
    }
  });