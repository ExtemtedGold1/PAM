import AsyncStorage from '@react-native-async-storage/async-storage';

interface Event {
    id: number;
    name: string;
    desc: string;
    data: string;
    time: string;
}

export const saveEvent = async (event: Event) => {
    try {
        let eventsArray: Event[] = [];
        let eventsStorage;
        let eventsFrom = await AsyncStorage.getItem('@events');
        if (eventsFrom !== null) {
            eventsStorage = JSON.parse(eventsFrom);
        }
        if (!eventsStorage) {
            eventsArray.push({...event, id: new Date().getTime() });
        } else {
            eventsArray = eventsStorage;
            eventsArray.push({...event, id: new Date().getTime() });
        }
        await AsyncStorage.setItem('@events', JSON.stringify(eventsArray));
        console.log('@events:', eventsArray);
    } catch (e) {
        console.error(e);
    }
};

export const fetchEvent = async () => {
    try {
        let eventsStorage;
        let eventsFrom = await AsyncStorage.getItem('@events');
        let eventsArray: Event[] = [];

        if (eventsFrom !== null) {
            eventsStorage = JSON.parse(eventsFrom);
            eventsArray = eventsStorage;
        }

        await AsyncStorage.setItem('@events', JSON.stringify(eventsArray));

        return eventsArray;
    } catch (e) {
        console.log(e);
    }
};

export const deleteEvent = async (
    index: number,
    updateState: (events: Event[]) => void
) => {
    try {
        const eventsFromStorage = await AsyncStorage.getItem('@events');
        if (eventsFromStorage !== null) {
            const parsedEvents = JSON.parse(eventsFromStorage) as Event[];

            if (index >= 0 && index < parsedEvents.length) {
                parsedEvents.splice(index, 1);

                await AsyncStorage.setItem('@events', JSON.stringify(parsedEvents));

                updateState(parsedEvents);
            } else {
                console.error('Invalid index for deleteEvent');
            }
        }
    } catch (e) {
        console.error(e);
    }
};

export const editEvents = async (
    editedEvent: Partial<Event>,
    updateState: (events: Event[]) => void
) => {
    try {
        const eventsFromStorage = await AsyncStorage.getItem('@events');
        if (eventsFromStorage !== null) {
            const parsedEvents = JSON.parse(eventsFromStorage) as Event[];

            const editedIndex = parsedEvents.findIndex(
                (event) => event.id === editedEvent.id
            );

            if (editedIndex !== -1) {
                parsedEvents[editedIndex] = { ...parsedEvents[editedIndex], ...editedEvent };

                await AsyncStorage.setItem('@events', JSON.stringify(parsedEvents));

                updateState(parsedEvents);
            } else {
                console.error('Invalid index for editEvent');
            }
        }
    } catch (e) {
        console.error(e);
    }
};


// import AsyncStorage from "@react-native-async-storage/async-storage";
//
// export const saveEvents = async (event: object) => {
//     try{
//       let eventsArray = [];
//       let eventsStorage;
//       let eventsFrom = await AsyncStorage.getItem('@events')
//       if(eventsFrom!==null){ eventsStorage = JSON.parse(eventsFrom)}
//         if(!eventsStorage){
//             eventsArray.push(event)
//         }else{
//             eventsArray=eventsStorage;
//             eventsArray.push(event);
//         }
//          await AsyncStorage.setItem( '@events', JSON.stringify(eventsArray))
//         console.log('@events:',eventsArray)
//     } catch (e) {
//         console.error(e);
//     }
// };
//
// export const fetchEvent = async () => {
//     try {
//         let eventsStorage;
//         let eventsFrom = await AsyncStorage.getItem('@events')
//         let eventsArray = [];
//
//         if(eventsFrom!==null){
//             eventsStorage = JSON.parse(eventsFrom)
//             eventsArray = eventsStorage;
//         }
//
//         await AsyncStorage.setItem('@events', JSON.stringify(eventsArray));
//
//         return eventsArray;
//     } catch (e){
//         console.log(e);
//     }
// }
//
// export const deleteEvent = async (index: number, updateState: (events: Event[]) => void) => {
//     try {
//         // Pobierz wydarzenia z AsyncStorage
//         const eventsFromStorage = await AsyncStorage.getItem('@events');
//         if (eventsFromStorage !== null) {
//             const parsedEvents = JSON.parse(eventsFromStorage) as Event[];
//
//
//             if (index >= 0 && index < parsedEvents.length) {
//
//                 parsedEvents.splice(index, 1);
//
//                 await AsyncStorage.setItem('@events', JSON.stringify(parsedEvents));
//
//
//                 updateState(parsedEvents);
//             } else {
//                 console.error('Invalid index for deleteEvent');
//             }
//         }
//     } catch (e) {
//         console.error(e);
//     }
// };
//
// export const editEvents = async ( editedEvent: Event, updatedState: (events: Event[])=> void) => {
//     try {
//         const eventsFromStorage = await AsyncStorage.getItem('@events');
//         if (eventsFromStorage !== null) {
//             const parsedEvents = JSON.parse(eventsFromStorage) as Event[];
//
//             const editedIndex = parsedEvents.findIndex(event => event.id === editedEvent.id);
//
//             if (editedIndex !== -1) {
//                 parsedEvents[editedIndex] = editedEvent;
//
//                 await AsyncStorage.setItem('@events', JSON.stringify(parsedEvents));
//
//                 updateState(parsedEvents);
//             } else {
//                 console.error('Event not found for editing');
//             }
//         }
//     } catch (e) {
//         console.error(e);
//     }
// };