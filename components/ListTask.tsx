import React, {useState} from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import EventList from "./EventDirectory/EventList";
import EventForm from "./EventDirectory/EventForm";

function Events (){
    const [isVisible, setIsVisible ] = useState(true);

    const toggleVisiblity = () => {
        setIsVisible(!isVisible);
    }

    return(
        <View style={styles.viewSheet}>
            <EventList/>
            {isVisible && <EventForm/>}
           <View style={styles.buttonContainer}>
               <Button
                   title={isVisible? 'Hide' : 'Add'}
                   onPress={toggleVisiblity}/>
               {/*<TouchableOpacity style={styles.buttonVisible} onPress={toggleVisiblity}>*/}
               {/*     <Text>Dodaj</Text>*/}
               {/*</TouchableOpacity>*/}
           </View>
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

// const styles = StyleSheet.create({
//     eventsContainer: {
//         flex: 1,
//         padding: 20,
//     },
//     deleteIcon: {
//       backgroundColor: 'white',
//     },
//     eventItem: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         backgroundColor: '#ffffff',
//         padding: 20,
//         width: 350,
//         marginVertical: 6,
//         marginLeft: 1,
//         borderRadius: 8,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//     },
//     placeholder: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginTop: 10,
//         paddingHorizontal: 10,
//         color: 'white',
//     },
//     button: {
//         fontSize: 16,
//         color: 'white',
//         backgroundColor: '#2196f3',
//         padding: 10,
//         textAlign: 'center',
//         marginTop: 10,
//         width: 300,
//     },
//     title: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginTop: 20,
//         color: 'white',
//     },
//     eventItemText: {
//         fontSize: 18,
//         marginRight: 2,
//     },
// });
