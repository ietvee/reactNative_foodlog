import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {

    const togggleMenu = () => {
     navigation.openDrawer()
    }

    return (
        <View style={styles.header}>
            <MaterialIcons name="menu" size={28} onPress={togggleMenu} style={styles.iconMenu} color='#fff'/>
            <View>
                <Text style={styles.headerText}>{ title }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems:  'center',
        justifyContent: 'center',
    },  
    headerText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
        letterSpacing: 1,
    },
    iconMenu:{
        position: 'absolute',
        left: 2,
    }
})