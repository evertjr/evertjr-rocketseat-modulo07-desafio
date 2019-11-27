import React from 'react';
import { useSelector } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { withBadge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo } from './styles';
import logo from '../../assets/images/logo.png';

function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

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
      <BadgeIcon
        onPress={() => navigation.navigate('Cart')}
        name="shopping-basket"
        size={26}
        color="#fff"
      />
    </Container>
  );
}

export default withNavigation(Header);
