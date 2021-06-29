import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/style';
import Card from '../components/card';
import CreateFoodForm  from "./createFood";

export default function Home({navigation}) {

  const  [modalOpen, setModalOpen] = useState(false);
  
  const [foodDetails, setFoodDetails] = useState([
    {foodName: 'Spaghetti', date: '28/06/21', description: 'This is a default data 3', key: '1'},
    {foodName: 'Japanese Curry', date: '28/05/21', description: 'This is a default data 2', key: '2'},
    {foodName: 'Spicy Chicken Burger', date: '05/04/21', description: 'This is a default data 1', key: '3'}, 
  ])

  const pressHandler = (key) => {
    setFoodDetails((prevFood) => {
      return prevFood.filter((food) => food.key != key);
    });
  }; 

  const addFood = (foodDetails) => {
    foodDetails.key = Math.random().toString();
    setFoodDetails((currDetails) => {
      return [ foodDetails , ...currDetails]
    });
    setModalOpen(false);
  }

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide"> 
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            {/* <MaterialIcons name="close" size={24} onPress={() => setModalOpen(false)} style={{...styles.buttonAdd, ...styles.buttonClose}}/> */}
            {/* OR */}
            <MaterialIcons name="arrow-back" size={24} onPress={() => setModalOpen(false)} style={styles.buttonClose}/>
            <CreateFoodForm  addFood={addFood}/>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      
      <FlatList
      data={foodDetails}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={()=> navigation.navigate('Detail', item)}>
          <Card>
            <View style={styles.flex}>
            <Text style={globalStyles.title}>{item.foodName}</Text>
            <MaterialIcons
            name="delete"
            onPress={() => pressHandler(item.key)}
            size={22}
            color="#333"
            style={styles.buttonDelete}
            />
            </View>
            <Text style={globalStyles.subtitle}>{item.description}</Text>
            <Text style={globalStyles.subtitle}>{item.date}</Text>
          </Card>
        </TouchableOpacity>
      )}
     />

      <MaterialIcons name="add" size={24} onPress={() => setModalOpen(true)} style={styles.buttonAdd}/>

    </View>
  );
}

const styles = StyleSheet.create({
  buttonAdd:{
    marginBottom:10 ,
    borderWidth: 1, 
    padding: 10,
    backgroundColor: '#ff6e40',
    borderRadius: 30, 
    alignSelf: 'center',
    color: 'white',
    borderColor: '#ff6e40',
    justifyContent: 'center', 
  },
  buttonClose: {
    marginTop:10 ,
    padding: 10,
    borderRadius: 30, 
    color: '#ff6e40',
  },
  modalContent:{
    flex:1
  },
  buttonDelete: {
    flex: 1, 
    marginVertical:5,
    color: '#ff6e40',
  },
  flex:{
     flexDirection: "row",
  }
})