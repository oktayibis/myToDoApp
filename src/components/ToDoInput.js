import React from 'react';
import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native';
import {fonts, colors} from '../themes/themes';

export default function ToDoInput(props) {
  const {width} = Dimensions.get('window');
  const styles = StyleSheet.create({
    input: {
      backgroundColor: 'white',
      marginLeft: 20,
      fontFamily: fonts.regular,
      width: props.width ? props.width : null,
      padding: 20,
    },
    inputContainer: {
      flexDirection: 'row',
      marginVertical: 5,
      marginHorizontal: 5,
      backgroundColor: 'white',
      alignItems: 'center',
      borderRadius: 10,
      maxWidth: width - 20,
      padding: 5,
      flexWrap: 'wrap',
    },
    inputText: {
      padding: 1,
      borderRadius: 10,
      overflow: 'scroll',
      flexWrap: 'wrap',
    },
    label: {
      backgroundColor: colors.secondary,
      borderRadius: 5,
      padding: 5,
      width: 100,
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.inputContainer}>
      <View style={styles.label}>
        <Text style={styles.inputText}>{props.label}</Text>
      </View>
      <TextInput
        {...props}
        style={styles.input}
        placeholder={props.placeholder}
        value={props.value}
      />
    </View>
  );
}
