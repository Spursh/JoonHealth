import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import SignUpStack from "./src/navigation/SignUpStack";
import {Provider} from "react-redux";
import store from "./src/stateManagement/store";

export default function App() {
  return (
    <Provider store={store}>
        <View style={styles.container}>
            <StatusBar style="auto" />
            <SignUpStack />
        </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
});
