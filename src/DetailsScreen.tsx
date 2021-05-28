import React from 'react';
import {
  ImageLibraryOptions,
  launchImageLibrary,
  ImagePickerResponse,
  CameraOptions,
  launchCamera,
} from 'react-native-image-picker';
import styled from 'styled-components/native';

import {View, Text} from 'react-native';

interface DetailsScreenProps {
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
}

const DetailsScreen = (props: DetailsScreenProps) => {
  const todo = props.route.params.todo;
  const [currentPicture, setCurrentPicture] = React.useState('');

  const selectPhotoOptions: ImageLibraryOptions = {
    mediaType: 'photo',
  };
  const launchCameraOptions: CameraOptions = {
    mediaType: 'photo',
    saveToPhotos: true,
  };

  const selectPhoto = () => {
    launchImageLibrary(selectPhotoOptions, (response: ImagePickerResponse) => {
      debugger;
      if (response.uri) {
        setCurrentPicture(response.uri);
      }
    });
  };
  const takePhoto = () => {
    launchCamera(launchCameraOptions, (response: ImagePickerResponse) => {
      if (response.uri) {
        setCurrentPicture(response.uri);
      }
    });
  };

  return (
    <View>
      {currentPicture ? <Photo source={{uri: currentPicture}} /> : null}
      <Text>{todo.title}</Text>
      <SelectPhotoButton onPress={selectPhoto}>
        <Text>Choose Image</Text>
      </SelectPhotoButton>
      <SelectPhotoButton onPress={takePhoto}>
        <Text>Take Photo</Text>
      </SelectPhotoButton>
      <Text>{JSON.stringify(currentPicture, null, 2)}</Text>
    </View>
  );
};

const Photo = styled.Image`
  width: 180px;
  height: 180px;
`;
const Screen = styled.View`
  justify-content: center;
  align-items: center;
`;

const SelectPhotoButton = styled.Pressable`
  background-color: red;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  padding-vertical: 16px;
  margin: 5px;
`;

export default DetailsScreen;
