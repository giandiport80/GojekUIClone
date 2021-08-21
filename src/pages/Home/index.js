import React from 'react';
import {ScrollView, View} from 'react-native';
import SearchFeature from '../../components/molecules/SearchFeature';
import HomeGopay from '../../components/organisms/HomeGopay';
import HomeMainFeature from '../../components/organisms/HomeMainFeature';
import Divider from '../../components/atoms/Divider';
import GoNews from '../../components/molecules/GoNews';
import GoInfo from '../../components/molecules/GoInfo';
import GoBanner from '../../components/molecules/GoBanner';
import ScrollableProducts from '../../components/organisms/ScrollableProducts';
import Navbar from '../../components/organisms/Navbar';

const Home = ({navigation}) => {
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
