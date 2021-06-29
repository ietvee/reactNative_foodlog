import React from 'react';
import { StyleSheet, View } from 'react-native';

export default  function Card( props ){
    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                { props.children }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 17,
        elevation: 3, 
        backgroundColor: '#fff',
        shadowOffset: {
            width:  3, 
            height: 3,
        },
        shadowColor: "#bbb",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4, 
        marginVertical: 6,
    },  
    cardContent:{
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
})