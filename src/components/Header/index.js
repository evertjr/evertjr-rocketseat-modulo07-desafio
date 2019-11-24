import React from 'react';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { withBadge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo } from './styles';
import logo from '../../assets/images/logo.png';

function Header({ navigation, cartSize }) {
  const BadgeIcon = withBadge(cartSize || '0', {
    badgeStyle: {
      backgroundColor: '#7159c1',
    },
    left: 8,
    top: -4,
  })(Icon);
  return (
    <Container>
      <Logo source={logo} />
      {/* <Icon name="shopping-basket" size={26} color="#fff" /> */}
      <BadgeIcon
        onPress={() => navigation.navigate('Cart')}
        name="shopping-basket"
        size={26}
        color="#fff"
      />
    </Container>
  );
}

export default withNavigation(
  connect(state => ({
    cartSize: state.cart.length,
  }))(Header)
);
