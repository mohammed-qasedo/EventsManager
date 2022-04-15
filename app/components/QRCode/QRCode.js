import React from 'react';
import {View, Text} from 'react-native';
import styles from './QRCode.style';
import Icon from 'react-native-vector-icons/AntDesign';

const QRCode = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.right}>
          <Text>H</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.title}>Refer a Friend via QR Code</Text>
          <Text style={styles.info}>Get 50% discount Coupon</Text>
        </View>
        <Icon name="arrowright" color="#7b7b7b" size={30} style={styles.icon} />
      </View>
    </View>
  );
};

export default QRCode;
