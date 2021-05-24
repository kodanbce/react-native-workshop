import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

declare global {
  type RootStackParamList = {
    Home: undefined;
    Details: {todo: Todo};
  };

  // Navigation
  type HomeScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Home'
  >;
  type DetailsScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Details'
  >;

  type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
  type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
}
