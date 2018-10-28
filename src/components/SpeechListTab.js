import React, { Component } from 'react';
import { Text, View, Dimensions, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import SpeechCard from './SpeechCard';
import Header from './Header';
import DatabaseLayer from '../localdb/DatabaseLayer'
import {NOTES_TABLE} from '../Constants'

  const { height, width } = Dimensions.get("window");
  class SpeechListTab extends Component {
    constructor(props) {
        super(props)
        this.state = {
          dataSource: [],
        }
    }


    componentWillMount() {
      DatabaseLayer.getListFromStorage(NOTES_TABLE)
        .then(data=>console.log('DatabaseLayer',data))

        

        
    }
    
  render() {

    console.log(this.props.savedSpeechList)
    
    return (
      <View>
        <Header title={'SAVED SPEECH'}/>
        {this.renderSpeechList()}
      </View>
  )
    }

  renderSpeechList = () => (
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
    }
  });