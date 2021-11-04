import {StyleSheet, View, Alert, Dimensions} from "react-native";

const { width: winWidth, height: winHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  container1: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }, 
  capture: {
    flex: 0,
    //backgroundColor: '#fff',
    borderRadius: 5,
    //padding: 15,
    //paddingHorizontal: 10,
    alignSelf: 'center',
    margin: 20,
  },
});

export default styles;
