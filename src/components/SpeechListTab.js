import React, { Component } from 'react';
import { Text, View, Dimensions, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import SpeechCard from './SpeechCard';

  const { height, width } = Dimensions.get("window");
  class SpeechListTab extends Component {
    constructor(props) {
        super(props)
        this.state = {
          dataSource: [1,2,3,4,5,5],
        }
    }
    
  render() {
    return (
      <View>
        <FlatList
          style={styles.listStyle}
          data={this.state.dataSource}
          renderItem={({item, index}) => (
            <View>
              <SpeechCard/>
              {/* <MediaHolder 
                mediaURL = {item.mediaURL} 
                mediaType = {item.msgType}
                onItemSelect = {this.onItemSelect}/> */}
            </View>
          )}
          keyExtractor={item => item}
          />
      </View>
      )
  }
}

function mapStateToProps(state, props) {
  return {
      
  };
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
    }
  });