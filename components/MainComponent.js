import React, { Component } from 'react';
// import About from './AboutComponent';
// import Contact from './ContactComponent';
import Home from './HomeComponent';
// import Directory from './DirectoryComponent';
// import CampsiteInfo from './CampsiteInfoComponent';
import { View, Platform, Text } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

// const DirectoryNavigator = createStackNavigator(
//     {
//         Directory: { screen: Directory },
//         CampsiteInfo: { screen: CampsiteInfo }
//     },
//     {
//         initialRouteName: 'Directory',
//         defaultNavigationOptions: {
//             headerStyle: {
//                 backgroundColor: '#5637DD'
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//                 color: '#fff'
//             }
//         }
//     }
// );

 const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);


// const AboutNavigator = createStackNavigator(
//     {
//         About: { screen: About }
//     },
//     {
//         defaultNavigationOptions: {
//             headerStyle: {
//                 backgroundColor: '#5637DD'
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//                 color: '#fff'
//             }
//         }
//     }
// );


// const ContactNavigator = createStackNavigator(
//     {
//         Contact: { screen: Contact }
//     },
//     {
//         defaultNavigationOptions: {
//             headerStyle: {
//                 backgroundColor: '#5637DD'
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//                 color: '#fff'
//             }
//         }
//     }
// );



const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        // Directory: { screen: DirectoryNavigator },
        // About: { screen: AboutNavigator },
        // Contact: { screen: ContactNavigator }
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);

const Main = () =>  {
  
        return <Text>Tset</Text>;
        // return (
        //     <View style={{
        //         flex: 1,
        //         paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
        //     }}>
        //         <MainNavigator />
        //     </View>
        // );
    
}
export default Main;