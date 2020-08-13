import React from 'react';
import {Text, TouchableHighlight, StyleSheet} from 'react-native';
import {colors, fonts} from '../themes/themes';

export default function Button(props) {
  const styles = StyleSheet.create({
    btn: {
      backgroundColor: props.delete ? '#e64830' : colors.headerBackground,
      padding: 10,
      borderRadius: 10,
      shadowColor: 'black',
      // shadowOffset: {width: 5, height: 4},
      // shadowOpacity: 0.5,
      // shadowRadius: 2,
      elevation: 4,
      width: 150,
    },
    btnText: {
      color: 'white',
      textAlign: 'center',
      fontFamily: fonts.semiBold,
      fontSize: 16,
    },
  });
  return (
    <TouchableHighlight style={styles.btn} {...props}>
      <Text style={styles.btnText}> {props.title} </Text>
    </TouchableHighlight>
  );
}
