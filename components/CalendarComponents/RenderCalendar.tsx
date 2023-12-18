import React, { useState } from "react";
import { TouchableOpacity, View, Modal, StyleSheet } from "react-native";
import { Text } from "../Themed";
import Calendar from 'react-native-calendars/src/calendar';

const RenderCalendar = ({ onDayPressCallBack }: { onDayPressCallBack: (date: any) => void }) => {
    const [showCalendar, setShowCalendar] = useState(false);
    const nowDate = new Date();

    return (
        <View>
            <TouchableOpacity onPress={() => setShowCalendar(true)} style={styles.showCalendarButton}>
                <Text style={{ color: 'white', fontSize: 22, textAlign: "center" }}>Pick Date</Text>
            </TouchableOpacity>
        <View style={styles.separator} />
            <Modal visible={showCalendar} animationType='fade'>
                <View>
                    <Text style={{ color: '#222', marginTop: 50, fontSize: 32, textAlign: 'center' }}>Pick a Date</Text>
                    <Calendar
                        style={{
                            borderRadius: 10,
                            elevation: 3,
                            marginTop: 100,
                            marginHorizontal: 20,
                            backgroundColor: '#222'
                        }}
                        onDayPress={(date) => {
                            console.log(date);
                            onDayPressCallBack(date);
                            setShowCalendar(false);
                        }}
                        initialDate={nowDate.toString()}
                        minDate={'2023-12-01'}
                        maxDate={'2023-12-31'}
                    />
                    <TouchableOpacity onPress={() => setShowCalendar(false)} style={styles.showCalendarButton}>
                        <Text style={{ color: 'white', fontSize: 22, textAlign: "center" }}>Close Calendar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    showCalendarButton: {
        borderRadius: 15,
        padding: 20,
        backgroundColor: '#234',
        marginBottom: -50,
    }
});

export default RenderCalendar;


// import React, {useState} from "react";
// import {TouchableOpacity, View, Modal, StyleSheet} from "react-native";
// import {Text} from "../Themed";
// import Calendar from 'react-native-calendars/src/calendar';
// import {getData} from "ajv/lib/compile/validate";
//
// const RenderCalendar = () => {
//     const [showCalendar, setShowCalendar] = useState(false);
//     const nowDate = new Date();
//     return (
//         <View>
//             <TouchableOpacity onPress={() => setShowCalendar(true)} style={styles.showCalendarButton}>
//                 <Text style={{color: 'white', fontSize: 22, textAlign: "center",}}>Show calendar</Text>
//             </TouchableOpacity>
//             <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
//             <Modal visible={showCalendar} animationType='fade'>
//                 <View>
//                     <Text
//                         style={{color:'#222', marginTop: 50, fontSize: 32,textAlign: 'center'}}>Pick a Date</Text>
//                     <Calendar style={{
//                         borderRadius: 10,
//                         elevation: 3,
//                         marginTop: 100,
//                         marginHorizontal: 20,
//                         backgroundColor: '#222'}}
//                               onDayPress={(date) => {
//                                   console.log(date);
//                                   setShowCalendar(false);
//                               }}
//                               minDate={'2023-12-01'}
//                               maxDate={'2023-12-31'}
//                     />
//                     <TouchableOpacity onPress={() => setShowCalendar(false)}>
//                         <Text>Close Calendar</Text>
//                     </TouchableOpacity>r
//                 </View>
//             </Modal>
//         </View>
//     );
// };
//     const styles = StyleSheet.create({
//         title: {
//             fontSize: 20,
//             fontWeight: 'bold',
//         },
//         separator: {
//             marginVertical: 30,
//             height: 1,
//             width: '80%',
//         },
//         showCalendarButton: {
//             borderRadius: 15,
//             padding: 20,
//             backgroundColor: '#234'
//         }
//     });
//
// export default RenderCalendar;