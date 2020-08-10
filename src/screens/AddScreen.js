import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native';

import {connect} from 'react-redux';
import {addToList} from '../redux/actions';
import DatePicker from 'react-native-datepicker';
import ToDoInput from '../components/ToDoInput';
import Button from '../components/Button';
import {colors, fonts} from '../themes/themes';

function AddScreen(props) {
  const [toDo, setToDo] = useState({
    title: '',
    importantLevel: null,
    category: '',
    expireDate: '',
    description: '',

    addDate: null,
  });

  const handleAdd = () => {
    let date = new Date();
    let payload = {
      ...toDo,
      id: props.list.length + 1,
      addDate:
        date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
    };
    for (const [key, value] of Object.entries(payload)) {
      if (!value) {
        return Alert.alert('Error', `Please enter ${key}`);
      }
    }
    props.addToList(payload);
    Alert.alert('Sucess', 'Your todo added to list', [
      {text: 'OK', onPress: () => props.navigation.pop()},
    ]);
  };
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
          value={toDo.title}
        />

        <ToDoInput
          keyboardType="number-pad"
          value={toDo.importantLevel}
          label="Level"
          placeholder="e.g: 1-3"
          onChangeText={(text) =>
            setToDo({...toDo, importantLevel: parseInt(text, 10)})
          }
        />
        <ToDoInput
          label="Category"
          placeholder="e.g:Shopping"
          onChangeText={(text) => setToDo({...toDo, category: text})}
          value={toDo.category}
        />

        <View style={styles.inputContainer}>
          <View style={styles.label}>
            <Text style={styles.inputText}>Expire @</Text>
          </View>
          <DatePicker
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            // eslint-disable-next-line react-native/no-inline-styles
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
          value={toDo.description}
        />
        <View style={styles.btn}>
          <Button title="+ Add" onPress={handleAdd} />
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

const mapStateToProps = (state) => {
  const {list} = state.listResponse;
  return {list};
};

export default connect(mapStateToProps, {addToList})(AddScreen);
