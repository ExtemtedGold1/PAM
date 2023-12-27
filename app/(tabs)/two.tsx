import { StyleSheet } from 'react-native';
import { View } from '../../components/Themed';
import Events from "../../components/ListTask";
export default function TabTwoScreen() {

  return (
    <View style={styles.container}>
      <Events/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
