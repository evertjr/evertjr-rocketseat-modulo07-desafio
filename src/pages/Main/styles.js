import styled from 'styled-components/native';

export const ProductList = styled.FlatList.attrs({
  horizontal: true,
})`
  flex: 1;
  background: #191920;
`;

export const Product = styled.View`
  height: 358px;
  width: 220px;
  background: #fff;
  margin: 20px 0px 20px 20px;
  border-radius: 4px;
  justify-content: space-between;
  align-items: baseline;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
  margin: 0 10px;
`;

export const ProductName = styled.Text.attrs({
  numberOfLines: 2,
})`
  margin: 16px 19px 0px;
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  margin: 8px 20px;
  font-size: 21px;
  font-weight: bold;
`;

export const AddToCartBtn = styled.TouchableOpacity`
  margin: 8px 10px;
  background: #7159c1;
  border-radius: 4px;
  width: 200px;
  height: 42px;
  display: flex;
  flex-direction: row;
`;

export const SvgBlock = styled.View`
  width: auto;
  height: 42px;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0 10px;
`;

export const AmountText = styled.Text`
  color: #fff;
`;

export const BtnText = styled.Text`
  align-self: center;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  margin: auto;
`;
