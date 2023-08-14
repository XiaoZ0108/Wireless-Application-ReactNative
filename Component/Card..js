import {StyleSheet, View, Text} from 'react-native';

const {Component} = require('react');

class Card extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View style={[styles.container, this.props.styles]}>
        <Text>abu</Text>
      </View>
    );
  }
}

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 200,
    width: 170,
    borderRadius: 14,
    margin: 5,
  },
});
