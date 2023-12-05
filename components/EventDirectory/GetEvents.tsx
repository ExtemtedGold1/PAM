// import AsyncStorage from "@react-native-async-storage/async-storage";
//
// const getEvents = async () => {
//     try {
//         const eventData = await AsyncStorage.getItem('events');
//
//         if (eventData !== null){
//             const data = JSON.parse(eventData);
//             return [data.name, data.data, data.desc];
//         } else {
//             console.log('Brak zapisanych danych');
//             return null;
//         }
//     } catch (e){
//         console.error('błąd podczas odczytywania danych', e)
//         return null;
//     }
// };
// export default getEvents();
//
