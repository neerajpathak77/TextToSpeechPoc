import React from 'react'
import {createBottomTabNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import RecordingTab from '../components/RecordingTab'
import SpeechListTab from '../components/SpeechListTab'
import SettingsTab from '../components/SettingsTab'
import CustomTabBarBottom from '../components/common/CustomTabBarBottom'

export const HomeContainer = createBottomTabNavigator({
    SpeechListTab: SpeechListTab,
    RecordingTab: RecordingTab,
    SettingsTab:SettingsTab,
},
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, index }) => {
                const { routeName, routes } = navigation.state
                switch (routeName) {
                    case "SpeechListTab":
                        return <Icon
                        name="folder-open"
                        color={'gray'}
                        size={32}
                    />
                    case "SettingsTab":
                        return  <Icon
                        name="cog"
                        color={'gray'}
                        size={32}
                    />
                    default:
                        break
                }
            }, 
        }),
        tabBarOptions: {
            showLabel: false,
            color:'white',
            style: {backgroundColor:'transparent',borderTopWidth:0}
        },
        tabsStyle: {
            // tabBarBackgroundColor: 'grey',
        },
        tabBarComponent: props => <CustomTabBarBottom {...props} />,
        tabBarPosition: "bottom",
        // animationEnabled: true,
        swipeEnabled: true,        
    }
)