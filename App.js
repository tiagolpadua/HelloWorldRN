import { Constants } from 'expo';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Mensagem } from './components/Mensagem';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const minhaMsg = 'Olá José';
    return (
      <View style={styles.container}>
        <Mensagem texto={minhaMsg} />
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
