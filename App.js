import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'blue'}}></View>
      <View
        style={{height: 54, backgroundColor: 'yellow', flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: 'red',
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Text>Home</Text>
        </View>
        <View
          style={{
            backgroundColor: 'red',
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Text>Orders</Text>
        </View>
        <View
          style={{
            backgroundColor: 'red',
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Text>Help</Text>
        </View>
        <View
          style={{
            backgroundColor: 'red',
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Text>Inbox</Text>
        </View>
        <View
          style={{
            backgroundColor: 'red',
            flex: 1,
            justifyContent: 'space-evenly',
          }}>
          <Text>Account</Text>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
