import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import MockData from '../mock';
import ToDo from '../components/ToDo';
import {colors} from '../themes/themes';

export default function HomeScreen(props) {
  const renderItem = ({item}) => {
    return <ToDo navigation={props.navigation} item={item} />;
  };
  return (
    <SafeAreaView style={{backgroundColor: colors.background, flex: 1}}>
      <FlatList
        data={MockData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
