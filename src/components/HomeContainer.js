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
                    <View style={{backgroundColor:'cadetblue'}}>
                        <SpeechListTab/>
                    </View>
                    <View style={{backgroundColor:'cornflowerblue'}}>
                        <RecordingTab/>
                    </View>
                    <View style={{backgroundColor:'#3d2e48'}}>
                        <SettingsTab/>
                    </View>
                </IndicatorViewPager>
            </View>
        );
    }

    renderTabIndicator() {
        let tabs = [{
                text: 'Search',
                iconSource: require('../../assets/mic.png'),
                selectedIconSource: require('../../assets/mic.png'),
            },{
                text: 'Mic',
                iconSource: require('../../assets/searches.png'),
                selectedIconSource: require('../../assets/searches.png')
            },{
                text: 'Settings',
                iconSource: require('../../assets/settings.png'),
                selectedIconSource: require('../../assets/settings.png')
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