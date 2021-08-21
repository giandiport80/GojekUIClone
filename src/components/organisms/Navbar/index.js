import React from 'react';
import {View} from 'react-native';
import {NavbarIcon} from '../../molecules';

const Navbar = () => {
  return (
    <View
      style={{
        height: 54,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopColor: '#efefef',
        borderWidth: 1,
      }}>
      <NavbarIcon
        title="Home"
        img={require('../../../assets/icon/home-active.png')}
        active
      />
      <NavbarIcon
        title="Orders"
        img={require('../../../assets/icon/order.png')}
      />
      <NavbarIcon title="Help" img={require('../../../assets/icon/help.png')} />
      <NavbarIcon
        title="Inbox"
        img={require('../../../assets/icon/inbox.png')}
      />
      <NavbarIcon
        title="Account"
        img={require('../../../assets/icon/account.png')}
      />
    </View>
  );
};

export default Navbar;
