import {StyleSheet, View, Text} from 'react-native';
import React, {Component} from 'react';
import {PagerTabIndicator, IndicatorViewPager} from 'rn-viewpager';
import RecordingTab from './RecordingTab';
import SpeechListTab from './SpeechListTab';
import SettingsTab from './SettingsTab';

export default class HomeContainer extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <IndicatorViewPager
					style={{flex:1, paddingTop:0}}
                    indicator={this.renderTabIndicator()}
                >
                    <View style={{backgroundColor:'white', marginBottom:45}}>
                        <SpeechListTab/>
                    </View>
                    <View style={{backgroundColor:'white', marginBottom:45}}>
                        <RecordingTab/>
                    </View>
                    <View style={{backgroundColor:'#3d2e48', marginBottom:45}}>
                        <SettingsTab/>
                    </View>
                </IndicatorViewPager>
            </View>
        );
    }

    renderTabIndicator() {
        let tabs = [{
                text: 'SPEECHES',
                iconSource: require('../../assets/searches.png'),
                selectedIconSource: require('../../assets/searches.png'),
            },{
                text: null,
                iconSource: require('../../assets/stop-speech.png'),
                selectedIconSource: require('../../assets/start-speech.png')
            },{
                text: 'SETTINGS',
                iconSource: require('../../assets/setting.png'),
                selectedIconSource: require('../../assets/setting.png')
        }];
        return <PagerTabIndicator tabs={tabs} 
            itemStyle = {{height:25,width:25}}	
            selectedItemStyle = {{height:40,width:40}}	
            iconStyle = {{height:25,width:25}}		
            selectedIconStyle = {{height:40,width:40}}
            // textStyle= {{height:40,width:40}}		
            // selectedTextStyle= {{height:40,width:40}}
        />;
    }

}