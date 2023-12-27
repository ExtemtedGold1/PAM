import React, {useEffect, useState} from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import EventList from "./EventDirectory/EventList";

function Events (){
    const [isVisible, setIsVisible ] = useState(true);


    const toggleVisiblity = () => {
        setIsVisible(!isVisible);
    };

    return(
        <View style={styles.viewSheet}>
            <EventList/>
        </View>
    )
};

const styles = StyleSheet.create({
    viewSheet: {
        alignItems: 'center',
    },
    buttonVisible: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
    }
})

export default Events;
