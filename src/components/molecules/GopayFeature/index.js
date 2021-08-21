import React from 'react';
import {Image, Text, View} from 'react-native';

const GopayFeature = ({title, img}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        fontSize: 1,
      }}>
      <Image source={img} />
      <Text
        style={{
          fontSize: 13,
          color: '#fff',
          marginTop: 15,
          fontWeight: 'bold',
        }}>
        {title}
      </Text>
    </View>
  );
};

export default GopayFeature;
