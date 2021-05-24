import React from 'react';
import {View, Text} from 'react-native';

interface DetailsScreenProps {
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
}

const DetailsScreen = (props: DetailsScreenProps) => {
  const todo = props.route.params.todo;
  console.log('todo : ', todo);
  return (
    <View>
      <Text>{todo.title}</Text>
    </View>
  );
};

export default DetailsScreen;
