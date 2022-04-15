import React from 'react';
import {FlatList} from 'react-native';
import styles from './HorizontalList.style';

const HorizontalList = ({items, renderItem}) => {
  return (
    <FlatList
      data={items}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      horizontal
      contentContainerStyle={styles.container}
    />
  );
};

export default HorizontalList;
