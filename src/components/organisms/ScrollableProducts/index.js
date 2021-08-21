import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {ScrollableItem} from '../../molecules';

const ScrollableProducts = () => {
  return (
    <View>
      <View
        style={{
          height: 15,
          width: 60,
          marginLeft: 16,
        }}>
        <Image
          source={require('../../../assets/logo/go-food.png')}
          style={{
            width: undefined,
            height: undefined,
            flex: 1,
            resizeMode: 'contain',
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
          paddingHorizontal: 16,
          marginTop: 12,
        }}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: '#1c1c1c',
          }}>
          Neaby Restaurants
        </Text>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61a765'}}>
          See All
        </Text>
      </View>
      <ScrollView
        style={{flexDirection: 'row', paddingLeft: 16}}
        horizontal={true}>
        <ScrollableItem
          title="Sederhana Minang"
          img={require('../../../assets/dummy/go-food-kfc.jpg')}
        />
        <ScrollableItem
          title="Bakmi GM Aeon Mall"
          img={require('../../../assets/dummy/go-food-gm.jpg')}
        />
        <ScrollableItem
          title="Martabak Orins"
          img={require('../../../assets/dummy/go-food-orins.jpg')}
        />
        <ScrollableItem
          title="Martabak Banka"
          img={require('../../../assets/dummy/go-food-banka.jpg')}
        />
        <ScrollableItem
          title="Ayam Bakar Pak Boss"
          img={require('../../../assets/dummy/go-food-pak-boss.jpg')}
        />
      </ScrollView>
      <View
        style={{
          borderBottomColor: '#e8e9ed',
          borderBottomWidth: 1,
          marginTop: 16,
          marginBottom: 20,
          marginHorizontal: 16,
        }}></View>
    </View>
  );
};

export default ScrollableProducts;
