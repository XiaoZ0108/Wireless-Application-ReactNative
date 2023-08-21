import {Component} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import SearchBar from '../BigComponent/SearchBar';
import ItemBox from '../BigComponent/ItemBox';
import Card from '../Component/Card.';

const inidata = [
  {
    title: 'Ice1',
    price: '50',
    rating: 5,
    //path: require('../Asset/p1.png'),
    path: require('../Asset/ice1.png'),
  },
  {title: 'Ice2', price: '5', rating: 3, path: require('../Asset/ice2.png')},
  {title: 'Ice3', price: '30', rating: 2, path: require('../Asset/ice3.png')},
  {
    title: 'Pandaman',
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
        <ScrollView>
          <View style={styles.itemArea}>
            {display}
            <Card />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default MarketPlace;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemArea: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
