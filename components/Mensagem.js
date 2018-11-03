import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

export class Mensagem extends React.Component {
  render() {
    return (
        <Text style={styles.paragraph}>
            
            {/* Novidade aqui! */}
            {this.props.texto}
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
