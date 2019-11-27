import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

export default function Main() {
  const [products, setProducts] = useState([]);

  // state = {
  //   products: [],
  // };

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(data);
    }
    loadData();
  }, []);

  const amount = useSelector(state =>
    state.cart.reduce((amountSum, product) => {
      amountSum[product.id] = product.amount;
      return amountSum;
    }, {})
  );

  const dispatch = useDispatch();

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

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
          <AddToCartBtn onPress={() => handleAddProduct(item.id)}>
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
