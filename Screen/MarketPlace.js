import {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import SearchBar from '../BigComponent/SearchBar';
import ItemBox from '../BigComponent/ItemBox';
import Card from '../Component/Card.';

const inidata = [
  {
    title: 'gayboyadwwwwwwwwwwwwwwwwwwwwwwwww',
    price: '50',
    rating: 5,
    path: require('../Asset/p1.png'),
  },
  {title: 'gayman', price: '5', rating: 3, path: require('../Asset/p2.png')},
  {title: 'gay', price: '30', rating: 2, path: require('../Asset/p3.png')},
  {
    title: 'pandaman',
    price: '666',
    rating: 5,
    path: require('../Asset/p4.png'),
  },
];

class MarketPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: inidata,
      filtered: inidata,
    };
  }

  searchItem(data) {
    const filtered = inidata.filter(item => {
      return item.title.toLowerCase().includes(data.toLowerCase());
    });
    this.setState(prev => {
      return {...prev, filtered: filtered};
    });
  }

  render() {
    display = this.state.filtered.map((item, index) => {
      return (
        <ItemBox
          title={item.title}
          price={item.price}
          rating={item.rating}
          path={item.path}
          key={index}
        />
      );
    });

    return (
      <View style={styles.container}>
        <SearchBar search={this.searchItem.bind(this)} />
        {display}
        <Card />
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
    justifyContent: 'space-around',

    padding: 20,
  },
});
