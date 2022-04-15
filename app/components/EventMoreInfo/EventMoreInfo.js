import React from 'react';
import {View, Text} from 'react-native';
import styles from './EventMoreInfo.style';

const EventMoreInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>More about event</Text>
      <Text style={styles.info}>
        This body of work features so many intricate musical layers, we have
        brought in one of the UK's leading Orchestras to perform a complete
        rendition of the album and some of Dre's west coast classic from start
        to finish. Accompanied by DJ's, singers, and lyricists - this is not
        your average Orchestral event.
      </Text>
    </View>
  );
};

export default EventMoreInfo;
