import { Constants } from 'expo';
import * as React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    console.log('O componente foi construído.');
  }

  componentDidMount() {
    console.log('O componente foi montado.');
  }

  componentDidUpdate() {
    console.log('O componente foi atualizado.');
  }

  componentWillUnmount() {
    console.log('O componente será desmontado.');
  }

  handleClick = () => {
    this.setState(prevState => ({ clicks: prevState.clicks + 1 }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title={`Clicou ${this.state.clicks} vezes`} onPress={this.handleClick}></Button>
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
