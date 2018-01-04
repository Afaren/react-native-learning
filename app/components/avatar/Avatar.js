import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, Image } from "react-native";

import backgroundImage from '../../image/round.png'

const styles = StyleSheet.create({
  image: {
    flexShrink: 1,
    aspectRatio: 1,
  },
  text: {
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default class Avatar extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={backgroundImage}
               style={styles.image}
        />
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}