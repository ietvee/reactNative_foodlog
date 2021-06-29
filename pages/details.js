import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from '../styles/style';
import Card from '../components/card';

export default function Detail({ navigation }) {

  // const backHomeHandler =  () => {
  //   navigation.goBack();
  // }

  return (
    <View style={globalStyles.container}>
      <Card>     
        <Text> {navigation.getParam('foodName')}</Text>
        <Text> {navigation.getParam('description')}</Text>
        <Text> {navigation.getParam('date')}</Text>
      </Card>
    </View>
  );
}

