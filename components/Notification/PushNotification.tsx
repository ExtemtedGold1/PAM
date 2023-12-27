import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});

export const sendNotification = async () => {
    let data = await AsyncStorage.getItem('@events');

    // Sprawdź, czy data nie jest 'null' lub 'undefined'
    if (data !== null && data !== undefined) {
        // Parsuj dane tylko wtedy, gdy są dostępne
        let events = JSON.parse(data);

        for (let i = 0; i < events?.length; i++) {
            let event = events[i];

            // Sprawdź, czy event.data, event.time, event.name nie są 'null' lub 'undefined'
            if (event?.data && event?.time && event?.name) {
                let dateTime = new Date(event.data + 'T' + event.time);
                let now = new Date();

                if (dateTime > now) {
                    let notification = {
                        content: {
                            title: event.name,
                            body: event.desc,
                        },
                        trigger: dateTime,
                    };
                    await Notifications.scheduleNotificationAsync(notification);
                } else {
                    console.log('Event time has passed. Not scheduling notification.')
                }
            } else {
                console.log('Event data is incomplete. Not scheduling notification.')
            }
        }
    } else {
        console.log('No data available in AsyncStorage');
    }
};


// export const sendNotification = async () => {
//     let data = await AsyncStorage.getItem('@events');
//
//     if (data !== null && data !== undefined){data = JSON.parse(data);}
//
//     for (let i = 0; i < data?.length; i++){
//         let dateTime = new Date(data[i].data + 'T' + data[i].time);
//         let now = new Date();
//
//         if (dateTime > now){
//             let notification = {
//                 content: {
//                     title: data[i].name,
//                     body: data[i].desc,
//                 },
//                 trigger: dateTime,
//             };
//             await Notifications.scheduleNotificationAsync(notification);
//         } else {
//             console.log('Event time has passed. NotScheduling notificaion.')
//         }
//     }
// };