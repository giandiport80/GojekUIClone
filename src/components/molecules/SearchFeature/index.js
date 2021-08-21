import React from 'react';
import {View, Image, TextInput} from 'react-native';

const SearchFeature = () => {
  return (
    <View style={{marginHorizontal: 17, flexDirection: 'row', paddingTop: 15}}>
      <View style={{position: 'relative', flex: 1}}>
        <TextInput
          placeholder="What do you want to eat?"
          style={{
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: '#e8e8e8',
            borderRadius: 25,
            height: 40,
            fontSize: 13,
            paddingLeft: 45,
            paddingRight: 20,
            marginRight: 18,
          }}
        />
        <Image
          source={require('../../../assets/icon/search.png')}
          style={{position: 'absolute', top: 5, left: 12}}
        />
      </View>
      <View
        style={{
          width: 35,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={require('../../../assets/icon/promo.png')} />
      </View>
    </View>
  );
};

export default SearchFeature;
