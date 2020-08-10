import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {colors, fonts} from '../themes/themes';
/**

 id: 2,
    title: 'Title 3',
    category: 'Private',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    expireDate: '01/08/2020',
    addDate: '11/01/2020',
    importantLevel: 1,
 */
export default function ToDo({item, navigation, deleteItem}) {
  const findImportantColor = (number) => {
    if (number > 3) {
      number = 3;
    }
    if (number < 1) {
      number = 1;
    }
    switch (number) {
      case 1:
        return '#84a9ac';
      case 2:
        return '#3b6978';
      case 3:
        return '#204051';

      default:
        return 'lightgrey';
    }
  };
  const findImportantText = (number) => {
    if (number > 3) {
      number = 3;
    }
    if (number < 1) {
      number = 1;
    }
    switch (number) {
      case 1:
        return 'Low';
      case 2:
        return 'Medium';
      case 3:
        return 'High';

      default:
        return 'undefined';
    }
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      margin: 5,
      padding: 15,
      borderRadius: 5,
      borderColor: colors.background,
      borderWidth: 0.5,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 5,
      borderBottomWidth: 0.3,
      borderBottomColor: colors.background,
    },
    title: {
      color: colors.text,
      fontFamily: fonts.bold,
      fontSize: 22,
    },
    editBtn: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      backgroundColor: '#cedebd',
      borderRadius: 10,
    },
    editText: {
      color: colors.text,
      fontFamily: fonts.regular,
    },
    content: {
      marginTop: 10,
      marginBottom: 10,
    },
    contentText: {
      fontFamily: fonts.regular,
    },
    addDate: {
      fontSize: 10,
      fontFamily: fonts.light,
      maxWidth: 45,
    },
    footer: {
      marginTop: 10,
      flexDirection: 'row',
      borderTopWidth: 0.4,
      borderTopColor: colors.background,
      paddingTop: 10,
      justifyContent: 'space-between',
    },
    expireDateContainer: {
      backgroundColor: colors.background,
      borderRadius: 5,
      padding: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    expireDateText: {
      fontFamily: fonts.regular,
      color: colors.text,
    },
    importantLevelContainer: {
      backgroundColor: findImportantColor(item.importantLevel),
      padding: 2,
      borderRadius: 5,
      minWidth: 75,
      alignItems: 'center',
      justifyContent: 'center',
    },
    importantLevelText: {
      color: 'white',
      fontFamily: fonts.semiBold,
      fontWeight: '600',
      textAlign: 'center',
    },
    categoryContainer: {
      minWidth: 100,
      backgroundColor: colors.background,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    categoryText: {
      textAlign: 'center',
      fontFamily: fonts.regular,
    },
  });

  const handleDelete = (item) => {
    Alert.alert('Are you sure?', 'I finished this to do!', [
      {
        text: 'OK',
        onPress: () => deleteItem(item),
      },
      {
        text: 'Cancel',
      },
    ]);
  };
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Update', {item})}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.addDate}>Added: {item.addDate}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <TouchableOpacity
            style={styles.editBtn}
            onPress={() => handleDelete(item)}>
            <Text style={styles.editText}>Delete</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>{item.description}</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.expireDateContainer}>
            <Text style={styles.expireDateText}>
              Expire @ {item.expireDate}
            </Text>
          </View>
          <View style={styles.importantLevelContainer}>
            <Text style={styles.importantLevelText}>
              {findImportantText(item.importantLevel)}
            </Text>
          </View>
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryText}> {item.category}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
