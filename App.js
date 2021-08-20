import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        {/* search bar */}
        <View
          style={{marginHorizontal: 17, flexDirection: 'row', paddingTop: 15}}>
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
              source={require('./src/assets/icon/search.png')}
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
            <Image source={require('./src/assets/icon/promo.png')} />
          </View>
        </View>
        {/* gopay */}
        <View style={{marginHorizontal: 17, marginTop: 8}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#2c5fb8',
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              padding: 14,
            }}>
            <Image source={require('./src/assets/icon/gopay.png')} />
            <Text style={{fontSize: 17, fontWeight: 'bold', color: '#fff'}}>
              Rp. 50.375
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 20,
              paddingBottom: 14,
              backgroundColor: '#2f64bd',
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                fontSize: 1,
              }}>
              <Image source={require('./src/assets/icon/pay.png')} />
              <Text
                style={{
                  fontSize: 13,
                  color: '#fff',
                  marginTop: 15,
                  fontWeight: 'bold',
                }}>
                Pay
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                fontSize: 1,
              }}>
              <Image source={require('./src/assets/icon/nearby.png')} />
              <Text
                style={{
                  fontSize: 13,
                  color: '#fff',
                  marginTop: 15,
                  fontWeight: 'bold',
                }}>
                Nearby
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                fontSize: 1,
              }}>
              <Image source={require('./src/assets/icon/topup.png')} />
              <Text
                style={{
                  fontSize: 13,
                  color: '#fff',
                  marginTop: 15,
                  fontWeight: 'bold',
                }}>
                Top Up
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                fontSize: 1,
              }}>
              <Image source={require('./src/assets/icon/more.png')} />
              <Text
                style={{
                  fontSize: 13,
                  color: '#fff',
                  marginTop: 15,
                  fontWeight: 'bold',
                }}>
                More
              </Text>
            </View>
          </View>
        </View>
        {/* main feature */}
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 18,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: 18,
            }}>
            <View
              style={{
                width: `${100 / 4}%`,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#efefef',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('./src/assets/icon/go-ride.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-RIDE
              </Text>
            </View>
            <View
              style={{
                width: `${100 / 4}%`,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#efefef',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('./src/assets/icon/go-car.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-CAR
              </Text>
            </View>
            <View
              style={{
                width: `${100 / 4}%`,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#efefef',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('./src/assets/icon/go-bluebird.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-BLUEBIRD
              </Text>
            </View>
            <View
              style={{
                width: `${100 / 4}%`,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#efefef',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('./src/assets/icon/go-send.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-SEND
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View
              style={{
                width: `${100 / 4}%`,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#efefef',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('./src/assets/icon/go-deals.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-DEALS
              </Text>
            </View>
            <View
              style={{
                width: `${100 / 4}%`,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#efefef',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('./src/assets/icon/go-pulsa.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-PULSA
              </Text>
            </View>
            <View
              style={{
                width: `${100 / 4}%`,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#efefef',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('./src/assets/icon/go-food.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-FOOD
              </Text>
            </View>
            <View
              style={{
                width: `${100 / 4}%`,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#efefef',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('./src/assets/icon/go-more.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                MORE
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* bottom navigation */}
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
