import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  Alert,
  Button,
} from 'react-native';

import {Container, Items, Images, Buttons} from './styledComponents';

import {goToComedyScene} from '../../utils/NavigationUtils';

const DATA = [
  {
    id: 1,
    title: 'Arabica',
    about:
      'Arabica is the most popular type of coffee, hands down. Depending on who you ask, many coffee enthusiasts prefer using Arabica beans due to its taste.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-wYJ51v7K_b0I2--XSANuF98wOjyTaLA9zw&usqp=CAU',
  },
  {
    id: 2,
    title: 'Robusta',
    about:
      'While Arabica is the most popular, Robusta is cheaper and stronger.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzUPZTtHk0zJXsyQddlE0RVVjj7qUMKxYVlA&usqp=CAU',
  },
  {
    id: 3,
    title: 'Black',
    about:
      'Arabica is the most popular type of coffee, hands down. Depending on who you ask, many coffee enthusiasts prefer using Arabica beans due to its taste.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToZP8eK89qFPyngvfwFGq03s3mdjXemcmkdQ&usqp=CAU',
  },
  {
    id: 4,
    title: 'Latte',
    about:
      'Arabica is the most popular type of coffee, hands down. Depending on who you ask, many coffee enthusiasts prefer using Arabica beans due to its taste.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZ-zAipfkpgZXWB-BC4yKJIfvkO2bniyjqfw&usqp=CAU',
  },
  {
    id: 5,
    title: 'Cappuccino',
    about:
      'Arabica is the most popular type of coffee, hands down. Depending on who you ask, many coffee enthusiasts prefer using Arabica beans due to its taste.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFwRyCZkXKKInXS_uD2nF6_Z7g2DGW5l6Deg&usqp=CAU',
  },
  {
    id: 6,
    title: 'Affogato',
    about:
      'Arabica is the most popular type of coffee, hands down. Depending on who you ask, many coffee enthusiasts prefer using Arabica beans due to its taste.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNwDAq0iXpcikgYaWOGwVNSj5TtOJ-AkYuYQ&usqp=CAU',
  },
  {
    id: 7,
    title: 'Ristretto',
    about:
      'Arabica is the most popular type of coffee, hands down. Depending on who you ask, many coffee enthusiasts prefer using Arabica beans due to its taste.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmVVRnZFhBmd67EOlPo5Dj__EztFUtlDEPTQ&usqp=CAU',
  },
  {
    id: 8,
    title: 'Mocha',
    about:
      'Arabica is the most popular type of coffee, hands down. Depending on who you ask, many coffee enthusiasts prefer using Arabica beans due to its taste.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-wYJ51v7K_b0I2--XSANuF98wOjyTaLA9zw&usqp=CAU',
  },
  {
    id: 9,
    title: 'Macchiato',
    about:
      'Arabica is the most popular type of coffee, hands down. Depending on who you ask, many coffee enthusiasts prefer using Arabica beans due to its taste.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQO3umE5sjJuuClP8J9LEvXmZXqT6nN2DPqgA&usqp=CAU',
  },
  {
    id: 10,
    title: 'Lungo',
    about:
      'Arabica is the most popular type of coffee, hands down. Depending on who you ask, many coffee enthusiasts prefer using Arabica beans due to its taste.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzf9lkgReGEH5JyAnRJTgkVorVNR8zsNvguQ&usqp=CAU',
  },
  {
    id: 11,
    title: 'Red Eye',
    about:
      'Arabica is the most popular type of coffee, hands down. Depending on who you ask, many coffee enthusiasts prefer using Arabica beans due to its taste.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-wYJ51v7K_b0I2--XSANuF98wOjyTaLA9zw&usqp=CAU',
  },
  {
    id: 12,
    title: 'Cortado',
    about:
      'Arabica is the most popular type of coffee, hands down. Depending on who you ask, many coffee enthusiasts prefer using Arabica beans due to its taste.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFwRyCZkXKKInXS_uD2nF6_Z7g2DGW5l6Deg&usqp=CAU',
  },
  {
    id: 13,
    title: 'Doppio',
    about:
      'Arabica is the most popular type of coffee, hands down. Depending on who you ask, many coffee enthusiasts prefer using Arabica beans due to its taste.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSju8uewDO9BfEob6z0yzR3O7GJxwlM7PbHkw&usqp=CAU',
  },
  {
    id: 14,
    title: 'Espresso',
    about:
      'Arabica is the most popular type of coffee, hands down. Depending on who you ask, many coffee enthusiasts prefer using Arabica beans due to its taste.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-wYJ51v7K_b0I2--XSANuF98wOjyTaLA9zw&usqp=CAU',
  },

  {
    id: 15,
    title: 'Americano',
    about:
      'Arabica is the most popular type of coffee, hands down. Depending on who you ask, many coffee enthusiasts prefer using Arabica beans due to its taste.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFwRyCZkXKKInXS_uD2nF6_Z7g2DGW5l6Deg&usqp=CAU',
  },
];

const Item = ({item, onPress, style}: any) => {
  return (
    <Items onPress={onPress} style={[styles.boxWithShadow, style]}>
      <Images
        source={{
          uri: item.image,
        }}
      />
      <View
        style={{
          padding: 10,
          height: 150,
          justifyContent: 'space-around',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#FFE4C4',
            fontSize: 20,
            marginBottom: 20,
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#B22222',
            fontSize: 18,
            alignSelf: 'center',
            marginBottom: 40,
          }}>
          {item.about}{' '}
        </Text>
        <Buttons title="Rs.2" onPress={goToComedyScene} />
      </View>
    </Items>
  );
};

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}: any) => {
    const backgroundColor = item.id === selectedId ? '#2F4F4F' : '#8FBC8F';
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{backgroundColor}}
      />
    );
  };

  const goToComedySceneLocal = () => {
    goToComedyScene();
  };

  return (
    <Container>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item: number) => item.id}
        extraData={selectedId}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  boxWithShadow: {
    elevation: 50,
  },
});

export default App;
