import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import {colors, fonts} from '../themes/themes';

export default function Button(props) {
  return (
    <TouchableHighlight style={styles.btn} {...props}>
      <Text style={styles.btnText}> {props.title} </Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.btn,
    padding: 10,
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: fonts.semiBold,
    fontSize: 20,
  },
});
