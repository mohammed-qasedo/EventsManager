import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './Button.style';

const Button = ({onPress, hovered, title, value}) => {
  return (
    <TouchableWithoutFeedback
      style={styles.mainContainer}
      onPress={() => onPress(title)}>
      <View style={[styles.container, hovered && styles.hovered]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}k</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
