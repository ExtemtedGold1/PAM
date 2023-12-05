import { StyleSheet, TouchableOpacity, Modal } from 'react-native';
import RenderCalendar from "../../components/CalendarComponents/RenderCalendar";
//import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Calendar from 'react-native-calendars/src/calendar';
import {useState} from "react";

export default function TabTwoScreen() {
  const [showCalendar, setShowCalendar ] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kalendarz</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TouchableOpacity onPress={() => setShowCalendar(true)} style={styles.showCalendarButton}>
        <Text style={{color: 'white', fontSize: 22, textAlign:"center",}}>Show calendar</Text>
      </TouchableOpacity>
      <Modal visible={showCalendar} animationType='none'>
        <Calendar style={{borderRadius: 10, elevation: 4, margin: 40}} onDayPress={(date) => {
          console.log(date);
          setShowCalendar(false);
        }}
        initialDate={'2023-12-04'}
        minDate={'2023-12-01'}
        maxDate={'2023-12-31'}/>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
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
    backgroundColor: '#234'
  }
});
