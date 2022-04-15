import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './ScreenHeader.style';

const ScreenHeader = ({
  backIcon,
  title,
  optionsIcon,
  onPressBack,
  onPressOptions,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPressBack}
        style={styles.iconContainer}
        activeOpacity={0.6}>
        <Image style={styles.icon} resizeMode="contain" source={backIcon} />
      </TouchableOpacity>
      <Text style={styles.title} onPress={onPressOptions}>
        {title}
      </Text>
      <TouchableOpacity
        onPress={onPressOptions}
        style={styles.iconContainer}
        activeOpacity={0.6}>
        <Image style={styles.icon} resizeMode="contain" source={optionsIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default ScreenHeader;
