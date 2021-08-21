import React from 'react';
import {View, Text, Image} from 'react-native';

const NavbarIcon = ({title, img, active}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={img} style={{width: 26, height: 26}} />
      <Text
        style={{
          fontSize: 10,
          color: active ? '#43ab4a' : '#545454',
          marginTop: 4,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default NavbarIcon;
