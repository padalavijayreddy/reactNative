import React, {useState} from 'react';
import {CheckBox, Text, StyleSheet, View, Alert} from 'react-native';

const CheckBoxComponent = props => {
  const [isSelected, setSelection] = useState(false);
  const color = props.isColor ? 'white' : 'black';
  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={{color, alignSelf: 'center'}}>
          I accept the Terms of Use & Privacy Policy? {isSelected ? '👍' : '👎'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  checkboxContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  checkbox: {
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  label: {
    alignSelf: 'center',
  },
});

export default CheckBoxComponent;
