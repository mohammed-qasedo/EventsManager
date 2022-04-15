import React from 'react';
import {View, Image} from 'react-native';
import styles from './Star.style';

const Star = ({active}) => {
  return (
    <View style={styles.starContainer}>
      <Image
        style={styles.starImg}
        resizeMode="contain"
        source={
          active
            ? require('../../assets/asset58.png')
            : require('../../assets/asset59.png')
        }
      />
    </View>
  );
};

export default Star;
