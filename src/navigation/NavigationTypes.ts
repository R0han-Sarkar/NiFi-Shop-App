import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  MyCart: undefined;
  ProductInfo: {productID: number};
};

export type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

export type MyCartScreenProps = StackScreenProps<RootStackParamList, 'MyCart'>;

export type ProductInfoScreenProps = StackScreenProps<
  RootStackParamList,
  'ProductInfo'
>;
