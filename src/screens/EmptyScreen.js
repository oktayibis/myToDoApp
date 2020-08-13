import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EmptyScreen = () => {
  return (
    <View styles={styles.container}>
      <Text style={styles.text}>Empty</Text>
    </View>
  );
};

export default EmptyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
