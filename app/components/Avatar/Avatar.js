import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Avatar.style';

const Avatar = ({imgUri, name}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image source={imgUri} style={styles.img} />
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Avatar;
