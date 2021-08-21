import React from 'react';
import {ScrollView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Divider,
  GoBanner,
  GoInfo,
  GoNews,
  HomeGopay,
  HomeMainFeature,
  Navbar,
  ScrollableProducts,
  SearchFeature,
} from '../../components';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        <SearchFeature />
        <HomeGopay />
        <HomeMainFeature />
        <Divider />
        <GoNews onPress={() => navigation.navigate('News Detail')} />
        <GoInfo />
        <GoBanner />
        <ScrollableProducts />
      </ScrollView>

      <Navbar />
    </View>
  );
};

export default Home;
