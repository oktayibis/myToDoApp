import React from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={{paddingTop: 8}}>Hello Subheader</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'absolute',
    height: 100,
    zIndex: 100,
    width: '100%',
    paddingTop: 50,
  },
});
