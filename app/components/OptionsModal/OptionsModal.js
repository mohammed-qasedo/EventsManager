import React from 'react';
import {View, Modal, TouchableOpacity} from 'react-native';
import styles from './OptionsModal.style';
import Option from './option/Option';

const OptionsModal = ({
  modalVisible,
  setModalVisible,
  onPressEdit,
  onPressCancel,
  onPressDelete,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.closeIcon}></TouchableOpacity>
          <Option title="edit event" onPress={onPressEdit} />
          <View style={styles.divider}></View>
          <Option title="cancel event" onPress={onPressCancel} />
          <View style={styles.divider}></View>
          <Option title="delete event" onPress={onPressDelete} />
        </View>
      </View>
    </Modal>
  );
};

export default OptionsModal;
