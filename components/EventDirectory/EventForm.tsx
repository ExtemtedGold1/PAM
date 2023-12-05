import {View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from "react-native"
import React from "react";
import saveEvents from "./SaveEvents";

const EventForm = () => {
    const [eventName, setName ] = React.useState('');
    const [eventDate, setDate] = React.useState('');
    const [eventDescribe, setDescribe] = React.useState('')



    const formHandle = () => {
        //const formData = [ name, data, describe ]

        if(!eventName || !eventDate || !eventDescribe){
            Alert.alert('All fields must be completed! ');
            return;
        }

        const newData = {
            name: eventName,
            data: eventDate,
            desc: eventDescribe,
        }
        saveEvents(newData);
        //reset inputs fields
        setName('');
        setDate('');
        setDescribe('');
    }

    return (
        <View>
            <View>
                <TextInput
                    style={styles.textInput}
                           onChangeText={(text) => setName(text)}
                           placeholder='Enter Event Name'
                            defaultValue={eventName}/>
                <TextInput
                    style={styles.textInput}
                           onChangeText={(text) => setDate(text)}
                           placeholder='Data (do zrobienia)'
                            defaultValue={eventDate}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setDescribe(text)}
                    placeholder='Więcej opcji (do zrobienia)'
                    defaultValue={eventDescribe}
                />
                <TouchableOpacity style={styles.buttonForm} onPress={formHandle}>
                    <Text style={styles.buttonFormText}>Add Event</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    textInput: {
        textAlign: 'center',
        color: 'black',
        width: 350,
        height: 40,
        fontSize: 30,
        borderColor: '#222',
        backgroundColor: '#fff',
        borderWidth: 2,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
    },
    textOutput: {
        color: 'white',
        fontSize: 30,
    },
    buttonForm: {
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 10,
        padding: 20,
        backgroundColor: '#234'
    },
    buttonFormText:{
        textAlign:"center",
        color: 'white',
        fontSize: 20,
    }
})



export default EventForm;
