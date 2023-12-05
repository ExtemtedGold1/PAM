// EventList.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { clearAll, deleteEvent } from './ClearEvents';  // Import typu Event
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';

const EventList = () => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const eventsFromStorage = await AsyncStorage.getItem('events');
                if (eventsFromStorage !== null) {
                    const parsedEvents = JSON.parse(eventsFromStorage) as Event[];
                    setEvents(parsedEvents);
                }
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, [events]);

    const renderItem = ({ item, index }: { item: Event; index: number }) => (
        <View style={styles.renderItem}>
            <Text style={styles.renderText}>
                Name: {item.name} Data: {item.data} Opis: {item.desc}
            </Text>
            <View style={styles.buttonsEvents}>
                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => deleteEvent(index, setEvents)}>
                    <MaterialIcons name="delete" size={30} color="#900" />
                    <Text>delete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.iconButton}>
                    <MaterialIcons name="edit" size={30} color='#4caf50'/>
                    <Text>edit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <FlatList
            style={styles.flatList}
            data={events}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            ListEmptyComponent={<Text style={{ color: 'white', fontSize: 20 }}>No events available</Text>}
            ListFooterComponent={
                <TouchableOpacity style={styles.buttonForm} onPress={clearAll}>
                    <Text style={styles.buttonFormText}>Delete All</Text>
                </TouchableOpacity>
            }
        />
    );
};

const styles = StyleSheet.create({
    buttonsEvents: {
      flexDirection: "row",
    },
    iconButton: {
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#222',
        textAlign: 'center',
        width: 60,
        alignItems: 'center',
    },
    flatList: {
        marginTop: 30,
    },
    renderText: {
        fontSize: 15,
        padding: 10,
        textAlign: 'left',
        color: '#fff',
        borderWidth: 2,
    },
    renderItem: {
        backgroundColor: '#482880',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth: 2,
        borderRadius: 20,
    },
    buttonForm: {
        marginTop: 10,
        marginBottom: 10,
        paddingVertical: 20,
        backgroundColor: '#234',
        borderRadius: 15,
    },
    buttonFormText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
});

export default EventList;


// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
// import { clearAll, deleteEvent } from './ClearEvents';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { MaterialIcons } from '@expo/vector-icons';
//
// interface Event {
//     name: string;
//     data: string;
//     desc: string;
// }
//
// const EventList = () => {
//     const [events, setEvents] = useState<Event[]>([]);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const eventsFromStorage = await AsyncStorage.getItem('events');
//                 if (eventsFromStorage !== null) {
//                     const parsedEvents = JSON.parse(eventsFromStorage) as Event[];
//                     setEvents(parsedEvents);
//                 }
//             } catch (e) {
//                 console.error(e);
//             }
//         };
//         fetchData();
//     }, [events]);
//
//     // useEffect(() => {
//     //     console.log('Events in state:', events);
//     // }, [events]);
//
//     const renderItem = ({ item, index }: { item: Event; index: number }) => (
//         <View style={styles.renderItem}>
//             <Text style={styles.renderText}>
//                 Name: {item.name} Data: {item.data} Opis: {item.desc}
//                 <TouchableOpacity
//                     style={styles.iconButton}
//                     onPress={() => deleteEvent(index)}>
//                     <MaterialIcons name="delete" size={30} color="#900" />
//                 </TouchableOpacity>
//             </Text>
//         </View>
//     );
//
//     return (
//         <FlatList style={styles.flatList}
//             data={events}
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={renderItem}
//             ListEmptyComponent={<Text style={{color: 'white' , fontSize: 20}}>No events available</Text>}
//             ListFooterComponent={
//                 <TouchableOpacity style={styles.buttonForm} onPress={clearAll}>
//                     <Text style={styles.buttonFormText}>Delete All</Text>
//                 </TouchableOpacity>
//             }
//         />
//     );
// };
//
// const styles = StyleSheet.create({
//     iconButton: {
//         borderStyle: 'solid', borderRadius:15, borderWidth: 2, borderColor: '#900',
//     },
//     flatList: {
//         marginTop: 50,
//     },
//     renderText: {
//         fontSize: 20,
//         padding: 10,
//         textAlign: 'center',
//         color: '#fff'
//     },
//     renderItem: {
//         backgroundColor: 'black',
//         padding: 20,
//         marginVertical: 8,
//         marginHorizontal: 16,
//     },
//     buttonForm: {
//         marginTop: 10,
//         marginBottom: 10,
//         paddingVertical: 20,
//         backgroundColor: '#234',
//         borderRadius: 15,
//     },
//     buttonFormText: {
//         textAlign: 'center',
//         color: 'white',
//         fontSize: 20,
//
//     },
// });
//
// export default EventList;
//
//
//


// import React, {useEffect, useState} from "react";
// import {View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView} from "react-native";
// import { clearAll } from "./ClearEvents";
// import AsyncStorage from "@react-native-async-storage/async-storage";
//
// const EventList = () => {
//     const [events, setEvents ] = useState([]);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const eventsFromStorage = await AsyncStorage.getItem('events');
//                 console.log(eventsFromStorage)
//                 if (eventsFromStorage !== null){
//                     const parsedEvents = JSON.parse(eventsFromStorage);
//                     console.log(parsedEvents)
//                     setEvents(parsedEvents);
//                     console.log(events)
//
//                 }
//
//             } catch (e) {
//                 console.error(e);
//             }
//         };
//         fetchData();
//     }, []);
//
//
//     return (
//         <View>
//             <ScrollView>
//                 {events.map((event, index) => [
//                     <View key={index} >
//                         <Text>{event.name}</Text>
//                         <Text>{event.date}</Text>
//                         <Text>{event.desc}</Text>
//                     </View>
//                 ])}
//             </ScrollView>
//             {/*{events.length === 0 ? (*/}
//             {/*    <Text>No events available</Text>*/}
//             {/*): (*/}
//             {/*    <FlatList*/}
//             {/*        style={styles.flatList}*/}
//             {/*        data={events}*/}
//             {/*        renderItem={renderItem}*/}
//             {/*        keyExtractor={(item, index) =>*/}
//             {/*            index.toString()}*/}
//             {/*    />*/}
//             {/*)}*/}
//             <TouchableOpacity style={styles.buttonForm} onPress={clearAll}>
//                 <Text style={styles.buttonFormText}>Wypierdol wszystkie eventy</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }
//
// const styles = StyleSheet.create({
//     renderItem: {
//       color:'white',
//       backgroundColor: 'black',
//         width: 340,
//         height: 600,
//     },
//     flatList: {
//       flex:1,
//     },
//     list: {
//         fontSize: 40,
//         color: '#fff'
//     },
//     buttonForm: {
//         marginTop: 10,
//         marginBottom: 10,
//         paddingVertical: 20,
//         backgroundColor: '#234'
//     },
//     buttonFormText:{
//         textAlign:"center",
//         color: 'white',
//         fontSize: 20,
//     },
// })
//
// export default  EventList