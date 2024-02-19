import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Platform,
  NativeModules,
  SafeAreaView,
} from "react-native";
const { StatusBarManager } = NativeModules;

export default function ControlledLayout({ children, customStyles, ...other }) {
  return (
    <SafeAreaView
      style={
        customStyles
          ? { ...styles.container, ...customStyles }
          : styles.container
      }
      {...other}
    >
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
  },
});
