import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import ToDoInput from '../components/ToDoInput';
import Button from '../components/Button';
import {colors, fonts} from '../themes/themes';
export default function AddScreen() {
  const [toDo, setToDo] = useState({
    title: '',
    description: '',
    category: '',
    expireDate: '',
    addDate: null,
    importantLevel: 0,
  });
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.header}>
        <Text style={styles.title}> Add New Item</Text>
      </View>
      <View style={styles.containerContent}>
        <ToDoInput
          label="Title"
          placeholder="e.g: Milk"
          onChangeText={(text) => setToDo({...toDo, title: text})}
        />

        <ToDoInput
          keyboardType="number-pad"
          label="Level"
          placeholder="e.g: 0-2"
          onChangeText={(text) =>
            setToDo({...toDo, importantLevel: parseInt(text)})
          }
        />
        <ToDoInput
          label="Category"
          placeholder="e.g:Shopping"
          onChangeText={(text) => setToDo({...toDo, category: text})}
        />

        <View style={styles.inputContainer}>
          <View style={styles.label}>
            <Text style={styles.inputText}>Expire @</Text>
          </View>
          <DatePicker
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            style={{width: '30%'}}
            date={toDo.expireDate}
            mode="date"
            onDateChange={(date) => setToDo({...toDo, expireDate: date})}
            format="DD-MM-YYYY"
            showIcon={false}
            placeholder="Select date"
            customStyles={{
              dateInput: {
                height: 30,
                padding: 0,
                marginLeft: 20,
                borderRadius: 10,
                borderWidth: 0,
              },
            }}
          />
        </View>
        <ToDoInput
          label="Detail"
          placeholder="e.g.: Get milk from shop"
          onChangeText={(text) => setToDo({...toDo, description: text})}
        />
        <View style={styles.btn}>
          <Button
            title="+ Add"
            onPress={() => Alert.alert(toDo.importantLevel)}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 5,
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
  },
  container: {
    flex: 1,
  },
  containerContent: {
    flex: 5,
    marginTop: 10,
  },
  header: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  inputText: {
    borderRadius: 10,
  },
  label: {
    backgroundColor: colors.secondary,
    borderRadius: 5,
    padding: 5,
    marginLeft: -10,
    width: 100,
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.semiBold,
    fontSize: 24,
    color: 'white',
  },
  btn: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

/*
   <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Add Title</Text>
        <TextInput style={styles.input} placeholder="Buy Milk.." />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Expire @</Text>
        <DatePicker
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          style={{width: '30%'}}
          date={toDo.expireDate}
          mode="date"
          onDateChange={(date) => setToDo({...toDo, expireDate: date})}
          format="DD-MM-YYYY"
          showIcon={false}
          placeholder="Select date"
          customStyles={{
            dateInput: {
              height: 30,
              padding: 0,
              marginLeft: 20,
              borderRadius: 10,
              borderWidth: 0,
            },
          }}
        />
      </View>
      <View style={styles.footer}>
        <View style={[styles.inputContainer]}>
          <View>
            <Text style={styles.inputText}>Level</Text>
          </View>
          <TextInput style={styles.input} placeholder="0-2" />
        </View>

        <View style={[styles.inputContainer, styles.footerLevel]}>
          <View style={styles.label}>
            <Text style={styles.inputText}>Category</Text>
          </View>
          <TextInput style={styles.input} placeholder="Private" />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.label}>
          <Text style={styles.inputText}>Add Detail</Text>
        </View>
        <TextInput style={styles.input} placeholder="Buy milk from shop.." />
      </View>
*/
