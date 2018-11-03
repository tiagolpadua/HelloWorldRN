import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { Mensagem } from './components/Mensagem';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Novidade aqui! */}
        <Mensagem texto="Olá Mundo via props!"/>
        <Mensagem texto="Passando propriedades dinamicamente!"/>
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
