import { StyleSheet } from 'react-native';

 export const globalStyles = StyleSheet.create({
    container: {
        flex:1, 
        padding: 22,
    },
    aboutText: {
        padding: 22,
        justifyContent: 'center', 
        alignItems: 'center', 
        flex:1
    },
    title:{
      fontFamily: 'prompt-light',
      fontSize: 18,
      color: '#000',
      marginVertical: 5,
      flex:8,
    },
    titleSec:{
        fontFamily: 'prompt-light',
        fontSize: 18,
        color: '#000',
        marginVertical: 5,
        marginBottom: 30,
    }, 
    subtitle:{
        fontFamily: 'prompt-light',
        fontSize: 12,
        color: '#000',
        marginVertical: 5,
    }, 
    input:{
        borderWidth: 1,
        borderColor: "#d3d3d3",
        padding: 10, 
        fontSize: 18, 
        borderRadius: 17,
    },
    errorText:{
        color: 'red',
        fontWeight: 'bold',
        marginBottom: 10, 
        marginTop: 6, 
    }
  });
  