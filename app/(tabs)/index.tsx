import { StyleSheet } from 'react-native';
import {Text, View} from '../../components/Themed';
import EventForm from "../../components/EventDirectory/EventForm";



export default function TabOneScreen() {


  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>Add event</Text>
      <EventForm/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
});
