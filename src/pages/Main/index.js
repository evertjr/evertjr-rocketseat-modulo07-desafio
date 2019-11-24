import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/action';

import {
  ProductList,
  Product,
  ProductImage,
  ProductName,
  AddToCartBtn,
  ProductPrice,
  BtnText,
  SvgBlock,
  AmountText,
} from './styles';

class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;
    return (
      <ProductList
        data={products}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => (
          <Product>
            <ProductImage
              source={{
                uri: item.image,
              }}
            />
            <ProductName>{item.title}</ProductName>
            <ProductPrice>{item.priceFormatted}</ProductPrice>
            <AddToCartBtn onPress={() => this.handleAddProduct(item.id)}>
              <SvgBlock>
                <Icon name="add-shopping-cart" color="#fff" size={24} />
                <AmountText>{amount[item.id] || 0}</AmountText>
              </SvgBlock>
              <BtnText>Adicionar</BtnText>
            </AddToCartBtn>
          </Product>
        )}
      />
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
