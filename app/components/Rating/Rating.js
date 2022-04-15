import React from 'react';
import {View} from 'react-native';
import Star from '../Star/Star';
import styles from './Rating.style';

const stars = [1, 2, 3, 4, 5];

const Rating = props => {
  return (
    <View style={styles.container}>
      {stars.map(star => (
        <Star key={star} active={star != 5} />
      ))}
    </View>
  );
};

export default Rating;
