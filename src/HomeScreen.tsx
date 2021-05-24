import React from 'react';
import {Pressable} from 'react-native';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {map} from 'lodash';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [todoList, setTodoList] = React.useState<Todo[]>([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodoList(json));
  }, []);

  //   console.log('todoList: ', todoList);
  const renderTodoList = map(todoList, todo => (
    <Row key={todo.id}>
      <MyLink
        onPress={() => {
          navigation.navigate('Details', {todo});
        }}>
        <Label>{todo.title}</Label>
      </MyLink>
    </Row>
  ));

  return (
    <Screen>
      <Text>on home screen</Text>
      {renderTodoList}
    </Screen>
  );
};
const Screen = styled.ScrollView`
  background-color: black;
`;
const Row = styled.View`
  background-color: #5f6061;
  border: 1px solid #1d2527;
  margin: 2px;
  padding-vertical: 8px;
  padding-horizontal: 14px;
`;
const MyLink = styled(Pressable)``;
const Label = styled.Text`
  color: white;
`;
export default HomeScreen;
