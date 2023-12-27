import {View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from "react-native"
import React from "react";
import {saveEvent} from "./SaveEvents";
import RenderCalendar from "../CalendarComponents/RenderCalendar";
import RenderDatePicker from "../CalendarComponents/RenderDatePicker";


const EventForm = () => {
    const [eventName, setName ] = React.useState('');
    const [eventDate, setDate] = React.useState('');
    const [eventTime, setEventTime ] = React.useState('');
    const [eventDescribe, setDescribe] = React.useState('');



    const formHandle =  () => {
        if(!eventName || !eventDate || !eventDescribe || !eventTime){
            Alert.alert('All fields must be completed! ');
            return;
        }

        const newData = {
            id: 0,
            name: eventName,
            data: eventDate,
            time: eventTime,
            desc: eventDescribe,
        }
        saveEvent(newData);


        //reset inputs fields
        setName('');
        setDate('');
        setDescribe('');
    };

    const handleDayPress = (date: any) => {
        setDate(date.dateString);
    };

    const handleDateChange = (newDate: any) => {
        setEventTime(newDate)
    }

    return (
        <View>
                <TextInput
                    style={styles.textInput}
                           onChangeText={(text) => setName(text)}
                           placeholder='Enter Event Name'
                            defaultValue={eventName}/>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setDescribe(text)}
                    placeholder='Opis'
                    defaultValue={eventDescribe}
                />
                <RenderCalendar onDayPressCallBack={handleDayPress}/>
                <RenderDatePicker onDateChangeCallback={handleDateChange}/>


                <TouchableOpacity style={styles.buttonForm} onPress={formHandle}>
                    <Text style={styles.buttonFormText}>Add New Event</Text>
                </TouchableOpacity>
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
        backgroundColor: '#4caf50'
    },
    buttonFormText:{
        textAlign:"center",
        color: 'white',
        fontSize: 20,
    }
})



export default EventForm;
