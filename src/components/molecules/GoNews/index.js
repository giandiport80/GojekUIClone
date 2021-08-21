import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const GoNews = ({onPress}) => {
  return (
    <View
      style={{
        paddingTop: 16,
        paddingHorizontal: 16,
      }}>
      <View style={{position: 'relative'}}>
        <Image
          source={require('../../../assets/dummy/sepak-bola.jpg')}
          style={{height: 170, width: '100%', borderRadius: 6}}
        />
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: '#000',
            opacity: 0.15,
            borderRadius: 6,
          }}></View>

        <View
          style={{
            height: 15,
            width: 55,
            position: 'absolute',
            top: 16,
            left: 16,
          }}>
          <Image
            source={require('../../../assets/logo/white.png')}
            style={{
              width: undefined,
              height: undefined,
              flex: 1,
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
      <View
        style={{
          paddingTop: 16,
          paddingBottom: 20,
          borderBottomColor: '#e8e9ed',
          borderBottomWidth: 1,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#1c1c1c',
            marginTop: 10,
          }}>
          GO-NEWS
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'normal',
            color: '#7a7a7a',
            marginBottom: 11,
          }}>
          Dimas Drajat selamatkan penali, timnas U-23 kalahkan Brunei
        </Text>
        <TouchableOpacity
          onPress={onPress}
          style={{
            backgroundColor: '#61a756',
            paddingHorizontal: 12,
            paddingVertical: 11,
            alignSelf: 'flex-end',
            borderRadius: 4,
            textAlign: 'center',
          }}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            READ
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GoNews;
