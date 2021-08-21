import React from 'react';
import {View, Text, Image} from 'react-native';

const ScrollableItem = ({title, img}) => {
  return (
    <View style={{marginRight: 16}}>
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: 'pink',
          borderRadius: 10,
        }}>
        <Image
          source={img}
          style={{
            width: undefined,
            height: undefined,
            flex: 1,
            resizeMode: 'cover',
            borderRadius: 10,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#1c1c1c',
          marginTop: 10,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default ScrollableItem;
