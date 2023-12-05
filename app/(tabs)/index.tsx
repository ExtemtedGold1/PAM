import { StyleSheet } from 'react-native';
import { View } from '../../components/Themed';
import Events from "../../components/ListTask";

export default function TabOneScreen() {

  return (
    <View style={styles.container}>
      <Events/>
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

});