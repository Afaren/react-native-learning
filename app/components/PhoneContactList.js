import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Actions } from 'react-native-router-flux';
import Avatar from "./avatar/Avatar";


const data = [{
  firstName: '陈',
  secondName: '崇发',
  phoneNumber: '18829292227'
}, {
  firstName: '陈',
  secondName: '崇发',
  phoneNumber: '18829292227'
}, {
  firstName: '陈',
  secondName: '崇发',
  phoneNumber: '18829292227'
}, {
  firstName: '陈',
  secondName: '崇发',
  phoneNumber: '18829292227'
}];

const styles = StyleSheet.create({
  contactItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'center',
  },
  separators: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#bbb'
  }
});

export default class PhoneContactList extends Component {

  _keyExtractor = (item, index) => index;

  _renderItem = ({ item }) => (
    <View style={styles.contactItem}>
      <TouchableOpacity onPress={Actions.contactDetail}>
        <Avatar text={item.firstName}/>
      </TouchableOpacity>
      <Text> {item.secondName} </Text>
      <Text> {item.phoneNumber} </Text>
    </View>
  );

  _renderSeparator = () => (
    <View style={styles.separators}/>
  );


  render() {
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          ItemSeparatorComponent={this._renderSeparator}
        />
      </View>
    );
  }
}