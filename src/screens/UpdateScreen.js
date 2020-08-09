import React from 'react';
import {View, Text} from 'react-native';

export default function UpdateScreen({route}) {
  return (
    <View>
      <Text>Update Screen</Text>
      <Text>{route.params.item.title}</Text>
      <Text>{route.params.item.description}</Text>
    </View>
  );
}
