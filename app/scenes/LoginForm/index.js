import React, {Component, useState} from 'react';
import {
  StyleSheet,
  View,
  Picker,
  Text,
  TextInput,
  ScrollView,
  Alert,
  CheckBox,
  Button,
} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import SelectInput from 'react-native-select-input-ios';
import DatePicker from 'react-native-datepicker';
import RangeSlider from 'rn-range-slider';
import CheckBoxComponent from '../../components/Checkbox';
import {goToLaunchScene} from '../../utils/NavigationUtils';

var genderOptions = [
  {label: 'Male', value: 0},
  {label: 'Female', value: 1},
  {label: 'Others', value: 2},
];

class LoginFormScene extends Component {
  constructor(props) {
    super(props);
    //set value in state for initial date
    this.state = {
      date: '15-05-2018',
      style: {
        backgroundColor: 'white',
      },
      isChange: false,
    };
  }

  goToLaunchScreen = () => {
    goToLaunchScene();
  };

  onPressBlack = () => {
    this.setState({style: {backgroundColor: 'black'}});
    this.setState({isChange: true});
  };

  onPressWhite = () => {
    this.setState({style: {backgroundColor: 'white'}});
    this.setState({isChange: false});
  };

  render() {
    const options = [
      {value: 0, label: 'SELECT YOUR BRANCH'},
      {value: 1, label: 'ECE'},
      {value: 2, label: 'CIVIL'},
      {value: 3, label: 'CSE'},
    ];
    return (
      <ScrollView style={[this.state.style, {paddingTop: 10}]}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text
            style={[
              styles.heading,
              this.state.isChange ? {color: 'white'} : {color: 'black'},
            ]}>
            SIGN UP
          </Text>
          <Button title={'Dark'} onPress={this.onPressBlack} />
          <Button title={'Light'} onPress={this.onPressWhite} />
        </View>
        <Text style={styles.description}>
          Please fill in the form to create an account
        </Text>
        <View style={styles.userInterface}>
          <TextInput
            style={styles.textInput}
            placeholder="FirstName"
            underlineColorAndroid={'transparent'}
          />
          <TextInput
            style={styles.textInput}
            placeholder="LastName"
            underlineColorAndroid={'transparent'}
          />
        </View>
        <View style={styles.userInterfacePart2}>
          <TextInput
            style={styles.textInputPart2}
            placeholder="MobileNumber"
            underlineColorAndroid={'transparent'}
          />
          <TextInput
            style={styles.textInputPart2}
            placeholder="Email id"
            underlineColorAndroid={'transparent'}
          />
          <TextInput
            style={styles.textInputPart2}
            placeholder="Password"
            underlineColorAndroid={'transparent'}
          />
          <TextInput
            style={styles.textInputPart2}
            placeholder="ConfirmPassword"
            underlineColorAndroid={'transparent'}
          />
        </View>
        <View style={styles.userInterfacePart3}>
          <View style={styles.viewTags}>
            <Text
              style={[
                this.state.isChange ? {color: 'white'} : {color: 'black'},
              ]}>
              Gender :
            </Text>
            <RadioForm
              style={styles.gender}
              radio_props={genderOptions}
              onPress={value => {}}
            />
          </View>
          <View style={styles.viewTags}>
            <Text
              style={[
                this.state.isChange ? {color: 'white'} : {color: 'black'},
              ]}>
              Select Branch:{' '}
            </Text>
            <SelectInput
              style={[
                this.state.isChange
                  ? {
                      borderColor: 'white',
                      borderWidth: 1,
                      backgroundColor: '#D3D3D3',
                    }
                  : '',
              ]}
              value={0}
              options={options}
            />
          </View>
          <View style={styles.viewTags}>
            <Text
              style={[
                this.state.isChange ? {color: 'white'} : {color: 'black'},
              ]}>
              Date Of Birth:
            </Text>
            <DatePicker
              style={{width: 200, marginTop: 10}}
              date={this.state.date} //initial date from state
              mode="date" //The enum of date, datetime and time
              placeholder="select date"
              format="DD-MM-YYYY"
              minDate="01-01-2016"
              maxDate="01-01-2019"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              onDateChange={date => {
                this.setState({date: date});
              }}
            />
          </View>
          <View style={styles.viewTags}>
            <Text
              style={[
                this.state.isChange ? {color: 'white'} : {color: 'black'},
              ]}>
              Enter Your Address:
            </Text>
            <TextInput
              style={styles.textArea}
              underlineColorAndroid={'transparent'}
              placeholder="Enter Your Address Here...."
              multiline={true}
              numberOfLines={6}
              textAlignVertical={'top'}
            />
          </View>
          <View style={styles.viewTags}>
            <Text
              style={[
                this.state.isChange ? {color: 'white'} : {color: 'black'},
              ]}>
              Set Your Typing Speed:
            </Text>
            <RangeSlider
              rangeEnabled={false}
              style={{height: 80}}
              gravity={'center'}
              max={100}
              selectionColor="#3df"
              blankColor="#f618"
            />
          </View>
          <View style={styles.viewTags}>
            <CheckBoxComponent isColor={this.state.isChange} />
            <Button
              onPress={this.goToLaunchScreen}
              title="Sign Up"
              color="#2196f3"
              accessibilityLabel="Sign up and Create an account"
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  loginForm: {
    alignSelf: 'stretch',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'arial',
  },
  description: {
    fontSize: 12,
    color: 'grey',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 3,
    paddingLeft: 25,
    paddingBottom: 10,
    marginBottom: 40,
  },
  textInput: {
    height: 40,
    margin: 10,
    backgroundColor: '#D3D3D3',
    borderColor: '#DCDCDC',
    borderWidth: 1,
  },
  userInterface: {
    flexDirection: 'column',
  },
  textInputPart2: {
    height: 40,
    margin: 10,
    backgroundColor: '#D3D3D3',
    borderColor: '#DCDCDC',
    borderWidth: 1,
  },
  userInterfacePart2: {
    flexDirection: 'column',
  },
  userInterfacePart3: {
    marginBottom: 20,
    paddingLeft: 10,
    justifyContent: 'space-around',
  },
  gender: {
    flexDirection: 'row',
    margin: 2,
    marginTop: 5,
    justifyContent: 'space-around',
  },
  textArea: {
    margin: 10,
    backgroundColor: '#DCDCDC',
    borderColor: '#DCDCDC',
    borderWidth: 1,
  },
  viewTags: {
    margin: 10,
  },
});

export default LoginFormScene;
