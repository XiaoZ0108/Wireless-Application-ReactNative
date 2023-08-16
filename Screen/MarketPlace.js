import {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import SearchBar from '../BigComponent/SearchBar';
import ItemBox from '../BigComponent/ItemBox';
class MarketPlace extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <SearchBar />
        <ItemBox />
        <ItemBox />
        <ItemBox />
      </View>
    );
  }
}

export default MarketPlace;

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
