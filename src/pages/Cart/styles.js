import styled from 'styled-components/native';

export const ScrollableCart = styled.ScrollView``;

export const CartBlock = styled.View`
  min-height: 100px;
  background: #fff;
  margin: 20px 20px;
  border-radius: 4px;
`;

export const CartList = styled.FlatList``;

export const CartItem = styled.View`
  margin: 20px 16px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductInfo = styled.View`
  width: 163px;
  height: 59px;
  margin: 0 40px 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
`;

export const ProductName = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14;
`;

export const ProductPrice = styled.Text`
  font-size: 16;
  font-weight: bold;
`;

export const SubtotalArea = styled.View`
  height: 40px;
  flex: 1 0;
  flex-direction: row;
  background: #eee;
  padding: 8px;
  border-radius: 4px;
  justify-content: space-between;
`;

export const AmountArea = styled.View`
  flex-direction: row;
`;

export const Amount = styled.TextInput`
  background: #fff;
  margin: 0 8px;
  padding: 0;
  width: 51px;
  height: 26px;
  border-radius: 4px;
  text-align: center;
  font-size: 14px;
`;

export const Subtotal = styled.Text`
  font-size: 16;
  font-weight: bold;
`;

export const TotalText = styled.Text`
  font-size: 16;
  font-weight: bold;
  text-align: center;
  color: #999;
  padding-top: 30px;
`;

export const TotalValue = styled.Text`
  font-size: 30;
  font-weight: bold;
  text-align: center;
`;

export const SubmitButton = styled.TouchableOpacity`
  margin: 27px 10px 10px;
  background: #7159c1;
  height: 42px;
  border-radius: 4px;
  align-content: center;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  margin: auto;
`;

export const Center = styled.View`
  align-items: center;
  padding: 20px;
`;
