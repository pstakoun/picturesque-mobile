import React, {PureComponent} from "react";
import {Text, View, Alert, TouchableOpacity, Button, SafeAreaView} from "react-native";
import {RNCamera} from 'react-native-camera';
//@ts-ignore
import Icon from 'react-native-vector-icons/dist/FontAwesome'; 
import styles from "./styles";

interface IProps {}
interface IState {
  takingPic: Boolean,
}

export default class CameraPage extends PureComponent<IProps, IState> {
  camera!: RNCamera | null;

  constructor(props: IProps) {
    super(props);
    this.state = {
      takingPic: false,
    };
  }

  takePicture = async () => {
    if (this.camera && !this.state.takingPic) {

      let options = {
        quality: 0.85,
        fixOrientation: true,
        forceUpOrientation: true,
      };

      this.setState({takingPic: true});

      try {
         const data = await this.camera.takePictureAsync(options);
         Alert.alert('Success', JSON.stringify(data));
      } catch (err) {
        Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
        return;
      } finally {
        this.setState({takingPic: false});
      }
    }
  }

  render() {
    return (
      <View style={styles.container1}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Icon name="camera" size={40} activeOpacity={0.5} color="#fff"/>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
};