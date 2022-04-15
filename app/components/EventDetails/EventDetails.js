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

const EventDetails = () => {
  return (
    <View style={styles.container}>
      <DataItem
        item={{
          title: 'organizers',
          data: 'mohammed qasedo',
          imgUri: require('../../assets/asset60.png'),
        }}
      />
      <DataItem
        item={{
          title: 'place',
          data: 'Palestine, Tulkarm',
          imgUri: require('../../assets/asset61.png'),
        }}
      />
      <DataItem
        item={{
          title: 'Time',
          data: '4pm - 10pm',
          imgUri: require('../../assets/asset62.png'),
        }}
      />
    </View>
  );
};

export default EventDetails;
