// In App.js in a new project

import * as React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import UpdateScreen from './screens/UpdateScreen';
import {fonts, colors} from './themes/themes';
const Stack = createStackNavigator();

const {width, height} = Dimensions.get('window');
function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation, route}) => ({
            title: 'Your List',
            headerRight: () => (
              <TouchableHighlight
                style={styles.floatingBtn}
                onPress={() => navigation.navigate('Add')}>
                <Text style={styles.btnText}>+</Text>
              </TouchableHighlight>
            ),
          })}
        />
        <Stack.Screen
          name="Add"
          component={AddScreen}
          options={{title: 'Add New To Do'}}
        />
        <Stack.Screen
          name="Update"
          component={UpdateScreen}
          options={({navigation, route}) => ({
            title:
              route.params.item.title.length > 10
                ? 'Edit: ' + route.params.item.title.slice(0, 10) + '...'
                : 'Edit ' + route.params.item.title,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;

const styles = StyleSheet.create({
  floatingBtn: {
    backgroundColor: colors.btn,
    borderRadius: 40,
    width: 40,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  btnText: {
    fontFamily: fonts.semiBold,
    fontSize: 20,
    color: 'white',
  },
});
