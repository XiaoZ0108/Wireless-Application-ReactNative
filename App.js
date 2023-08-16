import {Component} from 'react';
import {StyleSheet} from 'react-native';
import MarketPlace from './Screen/MarketPlace';
class App extends Component {
  constructor() {
    super();
  }
  render() {
    return <MarketPlace />;
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
