import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePicker from '@react-native-community/datetimepicker';


interface RenderDatePickerProps {
    onDateChangeCallback: (formattedDate: string) => void;
}
const RenderDatePicker: React.FC<RenderDatePickerProps> = ({ onDateChangeCallback }) => {
    const [showTime, setShowTime] = useState(false);
    const [date, setDate] = useState(new Date());

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate || date;
        if (event.type === 'set') {
            setShowTime(Platform.OS === 'ios');
            setDate(currentDate);
            onDateChangeCallback(currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        } else {
            setShowTime(false);
        }
    };

    const showTimepicker = () => {
        setShowTime(true);
    };

    const hideTimepicker = () => {
        setShowTime(false);
    };

    return (
        <View>
            {!showTime && (
                <TouchableOpacity style={styles.showTimeButton} onPress={showTimepicker}>
                    <Text style={{ color: 'white', fontSize: 22, textAlign: "center" }}>Pick Time</Text>
                </TouchableOpacity>
            )}
            {showTime && (
                <View style={styles.dateTimePickerContainer}>
                    <DateTimePicker
                        testID='timePicker'
                        value={date}
                        mode='time'
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                    <TouchableOpacity onPress={hideTimepicker} style={styles.closeButton}>
                        <Text style={{ color: 'white', fontSize: 18 }}>Close</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    showTimeButton: {
        borderRadius: 15,
        padding: 20,
        backgroundColor: '#234',
    },
    dateTimePickerContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#234',
        borderRadius: 10,
        alignSelf: 'center',
    },
});

export default RenderDatePicker;

//
// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
//
// const RenderDatePicker = ({ onDateChangeCallback }) => {
//     const [showTime, setShowTime] = useState(false);
//     const [date, setDate] = useState(new Date());
//
//     const onChange = (event: any, selectedDate: any) => {
//         const currentDate = selectedDate || date;
//         if (event.type === 'set') {
//             setShowTime(Platform.OS === 'ios');
//             setDate(currentDate);
//             onDateChangeCallback(currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
//         } else {
//             setShowTime(false);
//         }
//     };
//
//     const showTimepicker = () => {
//         setShowTime(true);
//     };
//
//     const hideTimepicker = () => {
//         setShowTime(false);
//     };
//
//     return (
//         <View>
//             { !showTime && (
//                 <TouchableOpacity style={styles.showTimeButton} onPress={showTimepicker}>
//                     <Text style={{ color: 'white', fontSize: 22, textAlign: "center" }}>Pick Time</Text>
//                 </TouchableOpacity>
//             )}
//             {showTime && (
//                 <View style={styles.dateTimePickerContainer}>
//                     <DateTimePicker
//                         testID='timePicker'
//                         style={styles.timePicker}
//                         value={date}
//                         mode='time'
//                         is24Hour={true}
//                         display="default"
//                         onChange={onChange}
//                         dateFormat='HH:mm'
//                     />
//                     <TouchableOpacity onPress={hideTimepicker} style={styles.closeButton}>
//                         <Text style={{ color: 'white', fontSize: 18 }}>Close</Text>
//                     </TouchableOpacity>
//                 </View>
//             )}
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     showTimeButton: {
//         borderRadius: 15,
//         padding: 20,
//         backgroundColor: '#234'
//     },
//     dateTimePickerContainer: {
//         backgroundColor: '#222',
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     closeButton: {
//         marginTop: 20,
//         padding: 10,
//         backgroundColor: '#234',
//         borderRadius: 10,
//         alignSelf: 'center',
//     },
//     timePicker: {
//     }
// });
//
// export default RenderDatePicker;
