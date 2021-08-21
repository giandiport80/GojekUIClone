import React from 'react';
import {ScrollView, View} from 'react-native';
import Divider from './components/atoms/Divider';
import GoBanner from './components/molecules/GoBanner';
import GoInfo from './components/molecules/GoInfo';
import GoNews from './components/molecules/GoNews';
import SearchFeature from './components/molecules/SearchFeature';
import HomeGopay from './components/organisms/HomeGopay';
import HomeMainFeature from './components/organisms/HomeMainFeature';
import Navbar from './components/organisms/Navbar';
import ScrollableProducts from './components/organisms/ScrollableProducts';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        <SearchFeature />
        <HomeGopay />
        <HomeMainFeature />
        <Divider />
        <GoNews />
        <GoInfo />
        <GoBanner />
        <ScrollableProducts />
      </ScrollView>

      <Navbar />
    </View>
  );
};

export default App;
