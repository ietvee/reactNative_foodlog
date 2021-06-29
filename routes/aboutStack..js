import React from 'react';
import  { createStackNavigator } from 'react-navigation-stack';
import About from '../pages/about';
import Header from '../components/header';

const pages = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="About Food Log"/>,
            }
        }
    },
}

const AboutStack = createStackNavigator(pages, { defaultNavigationOptions:{
    headerStyle: { backgroundColor: '#ff6e40', height: 80 },
    headerTintColor: '#fff'
}});

export default AboutStack;
