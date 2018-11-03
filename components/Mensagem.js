import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

export class Mensagem extends React.Component {
  render() {
    return (
        <Text style={styles.paragraph}>
            Nosso primeiro componente React Native!
        </Text>
    );
  }
}

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
