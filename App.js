import { Constants } from 'expo';
import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  formatMessage(message = '') {
    let el;
    if(message.length > 2) {
      el = <Text>{message.toUpperCase()}</Text>;
    } else {
      el = <Text>{message}</Text>;
    }
    return el;
  }

  render() {
    const nome = 'José';
    const saudacao = 'oi';

    return (
      <View style={styles.container}>
        {this.formatMessage(saudacao)}
        {this.formatMessage(nome)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
