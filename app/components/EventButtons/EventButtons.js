import React from 'react';
import {View} from 'react-native';
import Button from '../Button/Button';
import styles from './EventButtons.style';

const EventButtons = ({items}) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <Button
          key={item.title + index}
          title={item.title}
          value={item.value}
          hovered={item.hovered}
          onPress={item.onPress}
        />
      ))}
    </View>
  );
};

export default EventButtons;
