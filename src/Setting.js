import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, AlertIOS, ImagePickerIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';

export default class SettingScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Setting`,
  });
  constructor() {
    super()

  }
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          🤓 Hi , get setting here 💻📲
        </Text>
      </View>
    );
  }
  handleBtnPress = () => {
    
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#38639C',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF5DB',
  },
  img: {
    width:100,
    height:100,
    borderRadius:50
  },
});