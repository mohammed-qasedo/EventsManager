import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './EventDetails.style';

const DataItem = ({item}) => (
  <View style={styles.item}>
    <Image source={item.imgUri} style={styles.icon} resizeMode="contain" />
    <Text style={styles.text}>
      {item.title} : {item.data}
    </Text>
  </View>
);

const EventDetails = ({event}) => {
  return (
    <View style={styles.container}>
      <DataItem
        item={{
          title: 'organizers',
          data: event.title,
          imgUri: require('../../assets/asset60.png'),
        }}
      />
      <DataItem
        item={{
          title: 'place',
          data: event.body.substring(0, 10),
          imgUri: require('../../assets/asset61.png'),
        }}
      />
      <DataItem
        item={{
          title: 'Time',
          data: event.userId,
          imgUri: require('../../assets/asset62.png'),
        }}
      />
    </View>
  );
};

export default EventDetails;
