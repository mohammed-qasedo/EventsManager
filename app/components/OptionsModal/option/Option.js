import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Option.style';

const Option = ({title, onPress, bordered}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, bordered && styles.bordered]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Option;
