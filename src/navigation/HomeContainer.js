import React from 'react'
import {createBottomTabNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';
import MicButton from "../components/common/MicButton"
import RecordingTab from '../components/RecordingTab'
import SpeechListTab from '../components/SpeechListTab';
import SettingsTab from '../components/SettingsTab';
import { CustomTabBarBottom } from '../components/common/CustomTabBarBottom';




const HomeContainer = createBottomTabNavigator({
    SpeechListTab: SpeechListTab,
    RecordingTab: RecordingTab,
    SettingsTab:SettingsTab,
},
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, index }) => {
                const { routeName, routes } = navigation.state;
                let params = routes && routes[1] && routes[1].params;
                // let myStyle = focused ? styles.selectedIconStyle : styles.iconStyle
                switch (routeName) {
                    case "SpeechListTab":
                        return <Icon
                        name="bookmark"
                        color={'red'}
                        size={24}
                    />
                    case "SettingsTab":
                        return  <Icon
                        name="bookmark"
                        color={'yellow'}
                        size={24}
                    />
                    default:
                        break;
                }

            },
            
        }),
        tabBarOptions: {
            showLabel: false,
            style: {backgroundColor:'transparent',borderTopWidth:0}
        },
        tabsStyle: {
            // tabBarBackgroundColor: 'grey',
        },
        tabBarComponent: props => <CustomTabBarBottom {...props} />,
        tabBarPosition: "bottom",
        // animationEnabled: true,
        // swipeEnabled: true,        
    }
);






const HomeContainer1 = createBottomTabNavigator({
    SpeechList: {
        screen: SpeechListTab,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="bookmark"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
    Recording: {
        screen: RecordingTab

    },
    Settings: {
        screen: SettingsTab,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="lock"
                    color={tintColor}
                    size={24}
                />
            )
        })
    }
}, {
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#F8F8F8',
        inactiveTintColor: '#586589',
        style: {
            backgroundColor: '#171F33'
        },
        tabStyle: {}
    }
})

// const defaultGetStateForAction = HomeContainer.router.getStateForAction;

// HomeContainer.router.getStateForAction = (action, state) => {
//     if (action.routeName === 'Recording') {
//         alert('I ma in')
//     }

//     return defaultGetStateForAction(action, state);
// };

export {HomeContainer}