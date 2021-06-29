import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/style';
import { Formik } from 'formik';
import * as yup from 'yup'; 
import FlatButton from '../components/button';

const formValidate = yup.object({
    foodName: yup.string()
    .required()
    .min(0),
    description: yup.string()
    .required()
    .min(0),
    date: yup.string()
    .required()
    .min(0)
})

export default function CreateFoodForm({addFood}) {
    return (
    <View style={globalStyles.container}>
        <Formik initialValues={{foodName: '', description: '', date: ''}}
        validationSchema={formValidate}
        onSubmit={(values, actions) => {
            actions.resetForm();
            addFood(values);
            }}>
                {(props) => (
                    <View>
                        <Text style={globalStyles.titleSec}>Add {"\n"}New food</Text> 
                        <TextInput style={globalStyles.input} 
                        placeholder="food name" 
                        onChangeText={props.handleChange('foodName')}
                        value={props.values.foodName}
                        onBlur={props.handleBlur('foodName')}
                        />

                        <Text style={globalStyles.errorText}>{props.touched.foodName && props.errors.foodName}</Text>

                        <TextInput style={globalStyles.input}
                        multiline minHeight={60}
                        placeholder="description" 
                        onChangeText={props.handleChange('description')} 
                        value={props.values.description}
                        onBlur={props.handleBlur('description')}
                        />

                        <Text style={globalStyles.errorText}>{props.touched.description && props.errors.description}</Text>

                        <TextInput style={globalStyles.input} 
                        placeholder="date (dd-mm-yyyy)" 
                        onChangeText={props.handleChange('date')} 
                        value={props.values.date} 
                        keyboardType='numeric'
                        onBlur={props.handleBlur('date')}
                        />

                        <Text style={globalStyles.errorText}>{props.touched.date && props.errors.date}</Text>
                        
                        <FlatButton text="create" onPress={props.handleSubmit} />
                </View>
            )}
        </Formik>
    </View>
    )
}