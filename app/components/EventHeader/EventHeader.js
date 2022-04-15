import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './EventHeader.style';

const EventHeader = ({event}) => {
  const {imgUri, title, time, info} = event;
  return (
    <View>
      <View style={styles.eventImgContainer}>
        <Image style={styles.eventImg} source={imgUri} resizeMode="cover" />
      </View>
      <View style={styles.eventDetailsContainer}>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.info}>{info}</Text>
      </View>
    </View>
  );
};

export default EventHeader;
