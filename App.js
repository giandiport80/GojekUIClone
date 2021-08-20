import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'pink'}}>
        <Text>Clone Gojek App</Text>
      </View>
      <View style={{height: 54, flexDirection: 'row', backgroundColor: '#fff'}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('./src/assets/icon/home-active.png')}
            style={{width: 26, height: 26}}
          />
          <Text style={{fontSize: 10, color: '#43ab4a', marginTop: 4}}>
            Home
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('./src/assets/icon/order.png')}
            style={{width: 26, height: 26}}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Orders
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('./src/assets/icon/help.png')}
            style={{width: 26, height: 26}}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Help
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('./src/assets/icon/inbox.png')}
            style={{width: 26, height: 26}}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Inbox
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('./src/assets/icon/account.png')}
            style={{width: 26, height: 26}}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Account
          </Text>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
