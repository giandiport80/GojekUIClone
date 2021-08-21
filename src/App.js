import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import GopayFeature from './components/molecules/GopayFeature';
import MainFeature from './components/molecules/MainFeature';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
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
              source={require('./assets/icon/search.png')}
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
            <Image source={require('./assets/icon/promo.png')} />
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
            <Image source={require('./assets/icon/gopay.png')} />
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
            <GopayFeature title="Pay" img={require('./assets/icon/pay.png')} />
            <GopayFeature
              title="Nearby"
              img={require('./assets/icon/nearby.png')}
            />
            <GopayFeature
              title="Top Up"
              img={require('./assets/icon/topup.png')}
            />
            <GopayFeature
              title="More"
              img={require('./assets/icon/more.png')}
            />
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
              flexWrap: 'wrap',
              marginBottom: 18,
            }}>
            <MainFeature
              title="GO-RIDE"
              img={require('./assets/icon/go-ride.png')}
            />
            <MainFeature
              title="GO-CAR"
              img={require('./assets/icon/go-car.png')}
            />
            <MainFeature
              title="GO-BLUEBIRD"
              img={require('./assets/icon/go-bluebird.png')}
            />
            <MainFeature
              title="GO-SEND"
              img={require('./assets/icon/go-send.png')}
            />
            <MainFeature
              title="GO-DEALS"
              img={require('./assets/icon/go-deals.png')}
            />
            <MainFeature
              title="GO-PULSA"
              img={require('./assets/icon/go-pulsa.png')}
            />
            <MainFeature
              title="GO-FOOD"
              img={require('./assets/icon/go-food.png')}
            />
            <MainFeature
              title="MORE"
              img={require('./assets/icon/go-more.png')}
            />
          </View>
        </View>

        {/* padding gray */}
        <View
          style={{
            height: 17,
            backgroundColor: '#f2f2f4',
            marginTop: 20,
          }}></View>

        {/* news section */}
        <View
          style={{
            paddingTop: 16,
            paddingHorizontal: 16,
          }}>
          <View style={{position: 'relative'}}>
            <Image
              source={require('./assets/dummy/sepak-bola.jpg')}
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
                source={require('./assets/logo/white.png')}
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

        {/* internal information */}
        <View style={{padding: 16, paddingBottom: 0}}>
          <View
            style={{
              height: 15,
              width: 60,
              marginLeft: -4,
            }}>
            <Image
              source={require('./assets/logo/gojek.png')}
              style={{
                width: undefined,
                height: undefined,
                flex: 1,
                resizeMode: 'contain',
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: '#1c1c1c',
              marginTop: 15,
              marginBottom: 20,
            }}>
            Complete your profile
          </Text>
          <View style={{flexDirection: 'row', marginBottom: 16}}>
            <View>
              <Image source={require('./assets/dummy/facebook-connect.png')} />
            </View>
            <View style={{marginLeft: 16, flex: 1}}>
              <Text
                style={{fontSize: 15, color: '#4a4a4a', fontWeight: 'bold'}}>
                Connect with Facebook
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'normal',
                  color: '#4a4a4a',
                  width: '70%',
                }}>
                Login faster without verification code
              </Text>
            </View>
          </View>
          <TouchableOpacity
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
              Connect
            </Text>
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: '#e8e9ed',
              borderBottomWidth: 1,
              marginTop: 16,
            }}></View>
        </View>

        {/* Gofood banner section */}
        <View style={{padding: 16}}>
          <View style={{position: 'relative'}}>
            <Image
              source={require('./assets/dummy/food-banner.jpg')}
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
                source={require('./assets/logo/white.png')}
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
                position: 'absolute',
                bottom: 0,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 16,
                paddingBottom: 16,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#fff',
                    marginBottom: 8,
                  }}>
                  Free GO-FOOD vouchers
                </Text>
                <Text style={{fontSize: 12, color: '#fff'}}>
                  Quick, before they run out!
                </Text>
              </View>
              <View style={{flex: 1, paddingLeft: 12}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#61a756',
                    paddingHorizontal: 12,
                    paddingVertical: 11,
                    alignSelf: 'flex-end',
                    borderRadius: 4,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: 'bold',
                      color: '#fff',
                    }}>
                    GET VOUCHER
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#e8e9ed',
              borderBottomWidth: 1,
              marginTop: 16,
            }}></View>
        </View>

        {/* neaby go-food */}
        <View>
          <View
            style={{
              height: 15,
              width: 60,
              marginLeft: 16,
            }}>
            <Image
              source={require('./assets/logo/go-food.png')}
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
              Neaby Restourants
            </Text>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61a765'}}>
              See All
            </Text>
          </View>
          <ScrollView
            style={{flexDirection: 'row', paddingLeft: 16}}
            horizontal={true}>
            {/* image product */}
            <View style={{marginRight: 16}}>
              <View
                style={{
                  width: 150,
                  height: 150,
                  backgroundColor: 'pink',
                  borderRadius: 10,
                }}>
                <Image
                  source={require('./assets/dummy/go-food-kfc.jpg')}
                  style={{
                    width: undefined,
                    height: undefined,
                    flex: 1,
                    resizeMode: 'cover',
                    borderRadius: 10,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#1c1c1c',
                  marginTop: 10,
                }}>
                Sederhana Minang
              </Text>
            </View>
            {/* image product */}
            <View style={{marginRight: 16}}>
              <View
                style={{
                  width: 150,
                  height: 150,
                  backgroundColor: 'pink',
                  borderRadius: 10,
                }}>
                <Image
                  source={require('./assets/dummy/go-food-gm.jpg')}
                  style={{
                    width: undefined,
                    height: undefined,
                    flex: 1,
                    resizeMode: 'cover',
                    borderRadius: 10,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#1c1c1c',
                  marginTop: 10,
                }}>
                Bakmi GM Aeon Mall
              </Text>
            </View>
            {/* image product */}
            <View style={{marginRight: 16}}>
              <View
                style={{
                  width: 150,
                  height: 150,
                  backgroundColor: 'pink',
                  borderRadius: 10,
                }}>
                <Image
                  source={require('./assets/dummy/go-food-orins.jpg')}
                  style={{
                    width: undefined,
                    height: undefined,
                    flex: 1,
                    resizeMode: 'cover',
                    borderRadius: 10,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#1c1c1c',
                  marginTop: 10,
                }}>
                Martabak Orins
              </Text>
            </View>
            {/* image product */}
            <View style={{marginRight: 16}}>
              <View
                style={{
                  width: 150,
                  height: 150,
                  backgroundColor: 'pink',
                  borderRadius: 10,
                }}>
                <Image
                  source={require('./assets/dummy/go-food-banka.jpg')}
                  style={{
                    width: undefined,
                    height: undefined,
                    flex: 1,
                    resizeMode: 'cover',
                    borderRadius: 10,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#1c1c1c',
                  marginTop: 10,
                }}>
                Martabak Banka
              </Text>
            </View>
            {/* image product */}
            <View style={{marginRight: 16}}>
              <View
                style={{
                  width: 150,
                  height: 150,
                  backgroundColor: 'pink',
                  borderRadius: 10,
                }}>
                <Image
                  source={require('./assets/dummy/go-food-pak-boss.jpg')}
                  style={{
                    width: undefined,
                    height: undefined,
                    flex: 1,
                    resizeMode: 'cover',
                    borderRadius: 10,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#1c1c1c',
                  marginTop: 10,
                }}>
                Ayam Bakar Pak Boss
              </Text>
            </View>
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
      </ScrollView>

      {/* bottom navigation */}
      <View
        style={{
          height: 54,
          flexDirection: 'row',
          backgroundColor: '#fff',
          borderTopColor: '#efefef',
          borderWidth: 1,
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('./assets/icon/home-active.png')}
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
            source={require('./assets/icon/order.png')}
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
            source={require('./assets/icon/help.png')}
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
            source={require('./assets/icon/inbox.png')}
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
            source={require('./assets/icon/account.png')}
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
