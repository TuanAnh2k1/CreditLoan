import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const CheckBox = ({title, value, onValueChange}) => {
  const handleCheckboxToggle = () => {
    onValueChange(value);
  };

  return (
    <TouchableOpacity onPress={handleCheckboxToggle} style={styles.container}>
      <View style={[styles.checkbox, value && styles.checked]}>
        {value && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: 'green',
  },
  checkmark: {
    color: 'white',
    fontSize: 14,
  },
  label: {
    marginLeft: 8,
  },
});

export default CheckBox;
