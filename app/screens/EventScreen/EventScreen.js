import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import styles from './EventScreen.style';
import Avatar from '../../components/Avatar/Avatar';
import HorizontalList from '../../components/HorizontalList/HorizontalList';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import EventHeader from '../../components/EventHeader/EventHeader';
import EventButtons from '../../components/EventButtons/EventButtons';
import EventDetails from '../../components/EventDetails/EventDetails';
import Rating from '../../components/Rating/Rating';
import Search from '../../components/Search/Search';
import QRCode from '../../components/QRCode/QRCode';
import OptionsModal from '../../components/OptionsModal/OptionsModal';
import EventMoreInfo from '../../components/EventMoreInfo/EventMoreInfo';
const members = [
  {
    id: 0,
    name: 'malika',
    imgUri: require('../../assets/malika.jpg'),
  },
  {
    id: 1,
    name: 'malika',
    imgUri: require('../../assets/malika.jpg'),
  },
  {
    id: 2,
    name: 'malika',
    imgUri: require('../../assets/malika.jpg'),
  },
  {
    id: 3,
    name: 'malika',
    imgUri: require('../../assets/malika.jpg'),
  },
  {
    id: 4,
    name: 'malika',
    imgUri: require('../../assets/malika.jpg'),
  },
  {
    id: 5,
    name: 'malika',
    imgUri: require('../../assets/malika.jpg'),
  },
  {
    id: 6,
    name: 'malika',
    imgUri: require('../../assets/malika.jpg'),
  },
  {
    id: 7,
    name: 'malika',
    imgUri: require('../../assets/malika.jpg'),
  },
  {
    id: 8,
    name: 'malika',
    imgUri: require('../../assets/malika.jpg'),
  },
  {
    id: 9,
    name: 'malika',
    imgUri: require('../../assets/malika.jpg'),
  },
];

const EventScreen = () => {
  const [pressedButton, setPressedButton] = useState('interested');
  const [goingValue, setGoingValue] = useState(2);
  const [interestedValue, setInterestedValue] = useState(76);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePressButton = id => {
    if (pressedButton != id) {
      setPressedButton(id);
    }
    if (id == 'going') {
      setGoingValue(prevValue => prevValue + 1);
    } else {
      setInterestedValue(prevValue => prevValue + 1);
    }
  };

  return (
    <View style={styles.screen}>
      <ScreenHeader
        title="events"
        backIcon={require('../../assets/asset47.png')}
        optionsIcon={require('../../assets/asset21.png')}
        onPressBack={() => console.log('Hello Wrold!!')}
        onPressOptions={() => setModalVisible(true)}
      />
      <ScrollView>
        <EventHeader
          event={{
            title: 'business development confrence expert',
            time: 'july 16th pm utc + 04 - july 19th',
            info: 'online event',
            imgUri: require('../../assets/event-background.jpg'),
          }}
        />
        <Rating />
        <EventButtons
          items={[
            {
              title: 'going',
              value: goingValue,
              hovered: pressedButton == 'going',
              onPress: handlePressButton,
            },
            {
              title: 'interested',
              value: interestedValue,
              hovered: pressedButton == 'interested',
              onPress: handlePressButton,
            },
          ]}
        />
        <QRCode />
        <EventDetails />
        <EventMoreInfo />
        <Search />
        <HorizontalList
          items={members}
          renderItem={({item}) => (
            <Avatar
              name={item.name}
              imgUri={require('../../assets/malika.jpg')}
            />
          )}
        />
      </ScrollView>
      <OptionsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onPressEdit={() => console.log('edit')}
        onPressCancel={() => console.log('cancel')}
        onPressDelete={() => console.log('delete')}
      />
    </View>
  );
};

export default EventScreen;
