import React from 'react';
import {SafeAreaView, FlatList, View, Text} from 'react-native';
import MockData from '../mock';
import ToDo from '../components/ToDo';
import {colors} from '../themes/themes';
import {connect} from 'react-redux';
import {getTodoList, deleteItem} from '../redux/actions';

function HomeScreen(props) {
  React.useEffect(() => {
    props.getTodoList();
  }, []);
  const renderItem = ({item}) => {
    return (
      <ToDo
        deleteItem={props.deleteItem}
        navigation={props.navigation}
        item={item}
      />
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: colors.background, flex: 1}}>
      <FlatList
        data={props.list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={() => {
          return (
            <View>
              <Text>Please add todo</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => {
  const {list} = state.listResponse;
  return {list};
};

export default connect(mapStateToProps, {getTodoList, deleteItem})(HomeScreen);
