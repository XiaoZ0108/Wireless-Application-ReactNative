import {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Card from './Component/Card.';
import SearchBar from './Component/SearchBar';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <SearchBar />
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ad4a4a',
    padding: 20,
  },
});
