import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { YellowBox } from 'react-native';
import * as CartActions from '../../store/modules/cart/action';
import { formatPrice } from '../../util/format';

import {
  CartList,
  CartBlock,
  CartItem,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  SubtotalArea,
  AmountArea,
  Amount,
  Subtotal,
  TotalText,
  TotalValue,
  SubmitButton,
  SubmitText,
  ScrollableCart,
  Center,
} from './styles';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

export default function Cart() {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <ScrollableCart>
      <CartBlock>
        <CartList
          data={cart}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <CartItem>
              <ProductImage
                source={{
                  uri: item.image,
                }}
              />
              <ProductInfo>
                <ProductName>{item.title}</ProductName>
                <ProductPrice>{item.priceFormatted}</ProductPrice>
              </ProductInfo>
              <Icon
                name="delete"
                size={24}
                color="#7159c2"
                onPress={() => dispatch(CartActions.removeFromCart(item.id))}
              />
              <SubtotalArea>
                <AmountArea>
                  <Icon
                    name="remove-circle-outline"
                    size={24}
                    color="#7159c2"
                    onPress={() => decrement(item)}
                  />
                  <Amount type="number" readOnly value={String(item.amount)} />
                  <Icon
                    name="add-circle-outline"
                    size={24}
                    color="#7159c2"
                    onPress={() => increment(item)}
                  />
                </AmountArea>
                <Subtotal>{item.subtotal}</Subtotal>
              </SubtotalArea>
            </CartItem>
          )}
        />
        {cart.length <= 0 ? (
          <Center>
            <Icon name="remove-shopping-cart" size={70} color="#eee" />
            <TotalText>CARRINHO ATUALMENTE VAZIO :(</TotalText>
          </Center>
        ) : (
          <>
            <TotalText>TOTAL</TotalText>
            <TotalValue>{total}</TotalValue>
            <SubmitButton>
              <SubmitText>Finalizar pedido</SubmitText>
            </SubmitButton>
          </>
        )}
      </CartBlock>
    </ScrollableCart>
  );
}
