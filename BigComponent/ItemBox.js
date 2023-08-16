import {Component} from 'react';
import {StyleSheet, Image, View, Text, Pressable} from 'react-native';
import Card from '../Component/Card.';
import Icon from 'react-native-vector-icons/AntDesign';

class ItemBox extends Component {
  constructor(props) {
    super(props);
  }

  pressHandle() {
    console.log('box pressed');
  }
  render() {
    return (
      <Card>
        <Pressable
          onPress={this.pressHandle.bind(this)}
          style={styles.outerContainer}
          android_ripple={{color: '#f5f5f5'}}>
          <Image style={styles.img} source={require('../Asset/handsome.png')} />
          <View style={styles.itemDesc}>
            <View style={styles.titlebox}>
              <Text style={styles.title} ellipsizeMode="tail" numberOfLines={2}>
                {this.props.title}GayBoy
              </Text>
            </View>
            <View style={styles.pricebox}>
              <Text style={styles.price}>
                RM{this.props.price ? this.props.price : 0}
              </Text>
              <Text style={styles.rating}>
                1.3{this.props.rating}
                <Icon name={'star'} style={styles.star} />
              </Text>
            </View>
          </View>
        </Pressable>
      </Card>
    );
  }
}

export default ItemBox;

const styles = StyleSheet.create({
  img: {
    flex: 5,
    width: '100%',
    height: '100%',
    marginBottom: 5,
  },
  itemDesc: {
    flex: 2,
  },
  title: {color: 'black', fontSize: 16},
  price: {color: 'purple', fontSize: 18},
  titlebox: {
    flex: 2,
  },
  pricebox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  outerContainer: {
    flex: 1,
    padding: 5,
  },
  rating: {
    color: 'black',
    fontSize: 16,
  },
  star: {
    fontSize: 16,
  },
});
