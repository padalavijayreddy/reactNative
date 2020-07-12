import React, {Component, Fragment} from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import {ColorPicker} from 'react-native-color-picker';
import {Buttons} from './styledComponents';
import LinearGradient from 'react-native-linear-gradient';

class ColorSelector extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: 50,
          padding: 10,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            alignSelf: 'center',
            margin: 10,
          }}>
          Select Your Favourite color
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#00bfff',
            width: 60,
            height: 30,
            marginLeft: 15,
          }}
          onPress={() => {}}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#bf00ff',
            width: 60,
            height: 30,
            marginLeft: 15,
          }}
          onPress={() => {}}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({});
export default ColorSelector;
