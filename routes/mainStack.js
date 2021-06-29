import React from 'react';
import  { createStackNavigator } from 'react-navigation-stack';
import Home from '../pages/home';
import Detail from '../pages/details';
import Header from '../components/header';

const pages = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Food Log"/>,
            }
        }
    },
    Detail: {
        screen: Detail,
        navigationOptions:{
            title: 'Food Log Details',
            //can style it here
            // headerStyle: { backgroundColor: 'orange'} 
        }
    }
}

const Stack = createStackNavigator(pages, { defaultNavigationOptions:{
    headerStyle: { backgroundColor: '#ff6e40', height: 80 },
    headerTintColor: '#fff'
}});

export default Stack;
