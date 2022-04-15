import React from 'react';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './Search.style';

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
          placeholder="Search Friends"
          placeholderStyle={styles.placeholder}
          style={styles.input}
        />
        <TouchableOpacity>
          <Image
            resizeMode="contain"
            style={styles.searchIcon}
            source={require('../../assets/asset66.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.invite}>Invite Friend</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;
