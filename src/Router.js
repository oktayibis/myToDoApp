// In App.js in a new project

import * as React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import UpdateScreen from './screens/UpdateScreen';
import {fonts, colors} from './themes/themes';
const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="float">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation, route}) => ({
            title: 'To Do List',
            headerRight: () => (
              <TouchableOpacity
                style={styles.floatingBtn}
                onPress={() => navigation.navigate('Add')}>
                <Text style={styles.btnText}>+</Text>
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: colors.headerBackground,
            },
            headerTitleStyle: {color: 'white'},
            headerBackTitleStyle: {color: 'white'},
          })}
        />
        <Stack.Screen
          name="Add"
          component={AddScreen}
          options={{
            title: 'Add New To Do',
            headerStyle: {
              backgroundColor: colors.headerBackground,
            },
            headerTitleStyle: {color: 'white'},
            headerBackTitleStyle: {color: 'white'},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Update"
          component={UpdateScreen}
          options={({navigation, route}) => ({
            title:
              route.params.item.title.length > 10
                ? 'Edit: ' + route.params.item.title.slice(0, 10) + '...'
                : 'Edit ' + route.params.item.title,
            headerStyle: {
              backgroundColor: colors.headerBackground,
            },
            headerTitleStyle: {color: 'white'},
            headerBackTitleStyle: {color: 'white'},
            headerTintColor: 'white',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;

const styles = StyleSheet.create({
  floatingBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    shadowColor: 'blue',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  btnText: {
    fontFamily: fonts.semiBold,
    fontSize: 35,
    color: 'white',
  },
});
