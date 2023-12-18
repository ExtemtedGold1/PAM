import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { fetchEvent, deleteEvent, editEvents } from "./SaveEvents";
import EditEventModal from "./Buttons/EditEventModal";

interface Event {
    id: number;
    name: string;
    desc: string;
    data: string;
    time: string;
}

const EventList = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);

    useEffect(() => {
        const updateEvents = async () => {
            try {
                const eventsFromStorage = await fetchEvent();
                if (eventsFromStorage !== null) {
                    setEvents(eventsFromStorage);
                }
            } catch (e) {
                console.error(e);
            }
        };
        updateEvents();
    }, [events]);

    const handleEdit = (index: number) => {
        setSelectedEvent(events[index]);
        setIsEditModalVisible(true);
    };

    const handleSaveEdit = async (editedEvent: Partial<Event>) => {
        if (selectedEvent) {
            try {
                const updatedEvents = [...events];
                const updatedIndex = updatedEvents.findIndex(
                    (event) => event.id === selectedEvent.id
                );
                if (updatedIndex !== -1) {
                    await editEvents(editedEvent, setEvents);

                }
            } catch (e) {
                console.error(e);
            }
        }
        setIsEditModalVisible(false);
    };

    const handleCloseEditModal = () => {
        setIsEditModalVisible(false);
    };

    const renderItem = ({ item, index }: { item: Event; index: number }) => (
        <View style={styles.renderItem}>
            <Text style={styles.renderTextContainer}>
                <Text style={styles.headerText}>Id: {index} </Text>
                <Text style={styles.labelText}>Name: {item.name}</Text>
                <Text style={styles.labelText}>Opis: {item.desc}</Text>
                <Text style={styles.labelText}>Data: {item.data}</Text>
                <Text style={styles.labelText}>Time: {item.time}</Text>
            </Text>
            <View style={styles.buttonsEvents}>
                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => deleteEvent(index, setEvents)}>
                    <MaterialIcons name="delete" size={30} color="#900" />
                    <Text>delete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => handleEdit(index)}>
                    <MaterialIcons name="edit" size={30} color='#4caf50' />
                    <Text>edit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatList}
                data={events}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                ListEmptyComponent={<Text style={{ color: 'white', fontSize: 20 }}>No events available</Text>}
            />
            <Modal
                visible={isEditModalVisible}
                animationType='slide'
                onRequestClose={handleCloseEditModal}>
                <EditEventModal
                    visible={isEditModalVisible}
                    onClose={handleCloseEditModal}
                    onSave={handleSaveEdit}
                    eventData={selectedEvent as Event}
                />
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    buttonsEvents: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
    },
    iconButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    flatList: {
        marginTop: 30,
    },
    renderItem: {
        backgroundColor: '#616161',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 10,
        borderColor: '#ccc',
        marginBottom: 10,
    },
    renderTextContainer: {
        marginLeft: 10,
        width: '60%',
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    labelText: {
        fontSize: 14,
        marginBottom: 3,
    }
});

export default EventList;



// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {fetchEvent, deleteEvent, editEvents} from "./SaveEvents";
// import EditEventModal from "./Buttons/EditEventModal";
//
// interface Event {
//     id:number;
//     name: string;
//     desc: string;
//     data: string;
//     time: string;
// }
//
// const EventList = () => {
//     const [events, setEvents] = useState<Event[]>([]);
//     const [selectedEvent, setSelectedEvents ] = useState<Event|null>(null);
//     const [isEditModalVisible, setIsEditModalVisible] = useState(false);
//
//     useEffect(() => {
//         const updateEvents = async () => {
//             try{
//                 const eventsFromStorage = await fetchEvent();
//                 if(eventsFromStorage !== null){
//                     const UpdatedEvents = [...events, ...eventsFromStorage]
//                     setEvents(eventsFromStorage);
//                 }
//             } catch (e) {
//                 console.error(e);
//             }
//         };
//         updateEvents();
//     }, [events]);
//
//     const handleEdit = (index: number) => {
//         setSelectedEvents(events[index]);
//         setIsEditModalVisible(true);
//     }
//
//     const handleSaveEdit = (editedEvent: Partial<Event>) => {
//         // do zrobienia w AsyncStore
//         if(selectedEvent){
//             const updatedEvents = [...events];
//             const updatedIndex = updatedEvents.findIndex(
//                 (event) => event.id === selectedEvent.id
//             );
//             if (updatedIndex !== -1){
//                 updatedEvents[updatedIndex] = {...selectedEvent, ...editedEvent};
//                 setEvents(updatedEvents);
//             }
//         }
//         setIsEditModalVisible(false);
//     };
//
//     const handleCloseEditModal = () => {
//         setIsEditModalVisible(false);
//     }
//
//
//     const renderItem = ({ item, index }: { item: Event; index: number }) => (
//         <View style={styles.renderItem}>
//             <Text style={styles.renderTextContener}>
//                     <Text style={styles.headerText}>Id: {index} </Text>
//                     <Text style={styles.labelText}>Name: {item.name}</Text>
//                     <Text style={styles.labelText}>Opis: {item.desc}</Text>
//                     <Text style={styles.labelText}>Data: {item.data}</Text>
//                     <Text style={styles.labelText}>Time: {item.time}</Text>
//             </Text>
//             <View style={styles.buttonsEvents}>
//                 <TouchableOpacity
//                     style={styles.iconButton}
//                     onPress={() => deleteEvent(index, setEvents)}>
//                     <MaterialIcons name="delete" size={30} color="#900" />
//                     <Text>delete</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     style={styles.iconButton}
//                     onPress={() => handleEdit(index)}>
//                     <MaterialIcons name="edit" size={30} color='#4caf50'/>
//                     <Text>edit</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
//
//     return (
//         <View style={styles.container}>
//             <FlatList
//                 style={styles.flatList}
//                 data={events}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={renderItem}
//                 ListEmptyComponent={<Text style={{ color: 'white', fontSize: 20 }}>No events available</Text>}
//             />
//             <Modal
//                 visible={isEditModalVisible}
//                 animationType='slide'
//                 onRequestClose={handleCloseEditModal}>
//                 <EditEventModal visible={isEditModalVisible} onClose={handleCloseEditModal} onSave={handleSaveEdit} eventData={selectedEvent as Event}/>
//             </Modal>
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     container: {
//
//     },
//     buttonsEvents: {
//         flexDirection: "row",
//         alignItems: 'center',
//         justifyContent: "space-between",
//     },
//     iconButton: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginRight: 10,
//     },
//     flatList: {
//         marginTop: 30,
//     },
//     renderItem: {
//         //flex: 1,
//         backgroundColor: '#616161',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 10,
//         borderBottomWidth: 10,
//         borderColor: '#ccc',
//         marginBottom: 10,
//
//     },
//     renderTextContener: {
//         marginLeft: 10,
//         width: '60%',
//     },
//     headerText: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginBottom: 5,
//     },
//     labelText: {
//         fontSize: 14,
//         marginBottom: 3,
//     }
// });
//
// export default EventList;
//
